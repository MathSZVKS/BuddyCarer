import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ɵɵNgOnChangesFeature,
} from "@angular/core";
import { MyPetsService } from "../../services/myPets/my-pets.service";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import { VaccinesService } from "../../services/vaccines/vaccines.service";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { SchedulesService } from "../../services/schedules/schedules.service";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../services/user/user.service";
import { Procedimento } from "../../interfaces/Procedimento";
import { RaceService } from "../../services/race/race.service";
import { ClientsService } from "../../services/clients/clients.service";
import { DonationsService } from "../../services/donations/donations.service";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { PetShopServicesService } from "../../services/petShop/pet-shop-services.service";
import { BaseChartDirective } from "ng2-charts";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import { InServicePetsService } from "../../services/admin/in-service-pets.service";
import { KeyValuePipe } from "@angular/common";
import { map } from "rxjs/operators";
import { RegisterService } from "../../services/register/register.service";
import { UserData } from "../../interfaces/UserData";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService, KeyValuePipe],
})
export class ContentComponent {
  @Output() choosePage = new EventEmitter<string>();
  @Input() backgroundTitleColor = "#1f1d2b";
  @Input() page = "initial";
  @Input() userLogged: UserData = {
    image: "https://friconix.com/png/fi-cnsuxl-user-circle.png",
    id: 0,
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    address: {
      street: "",
      houseNumber: 0,
      zipCode: "",
      reference: "",
      city: "",
      state: "",
    },
    email: "",
    receiveNews: true,
    birthDay: "",
    phone: {
      dd: 0,
      number: 0,
    },
    cpf: "",
    personType: "",
    cardNumber: 0,
    cardName: "",
    flag: "",
    securityCode: "",
    age: 2,
    authorities: null,
    tokens: null,
    role: "",
  };

  // Opções Bar-Chart
  public barChartData: ChartData<"bar"> = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [60, 70, 80, 81, 86, 90, 100],
        label: "Avaliações acima de três estrelas",
      },
      {
        data: [50, 48, 40, 19, 23, 30, 20],
        label: "Avaliações abaixo de três estrelas",
      },
    ],
  };

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  public barChartPlugins = [DataLabelsPlugin];
  // --

  selectedRaca: any;
  racas = [
    { id: 1, name: "Shih tzu" },
    { id: 2, name: "Poodle" },
    { id: 3, name: "Vira-Lata" },
    { id: 4, name: "Angorá" },
  ];

  selectedSexo: any;
  sexos = [
    { id: 1, name: "Fêmea" },
    { id: 2, name: "Macho" },
  ];

  selectedPorte: any;
  porte = [
    { id: 1, name: "Pequeno" },
    { id: 2, name: "Médio" },
    { id: 2, name: "Grande" },
  ];

  selectedOrigemRaca: any;
  origemRaca = [
    { id: 1, name: "China" },
    { id: 2, name: "Latinhas" },
    { id: 2, name: "Alemanha" },
    { id: 2, name: "Russia" },
    { id: 2, name: "Polonia" },
  ];

  selectedComportamento: any;
  comportamentos = [
    { id: 1, name: "Dócil" },
    { id: 2, name: "Arisco" },
    { id: 2, name: "Amigável" },
    { id: 2, name: "Alerta" },
  ];

  selectedAdestrado: any;
  selectedCastrado: any;
  selectedCondicao: any;
  simNao = [
    { id: 1, name: "Sim" },
    { id: 2, name: "Não" },
  ];

  newPet = {
    nome: "",
    imagem: "",
    cardColor: "#b4b4ba",
    raca: "",
    cor: "",
    idade: "",
    sexo: "",
    comportamento: "",
    adestrado: "",
    castrado: "",
    condicaoEspecial: "",
    peso: "",
    porte: "",
    expectativaVida: "",
    origemRaca: "",
    historia: "",
  };

  petPictureUrl: any;
  uploader = Uploader({
    apiKey: "free",
  });

  options: UploadWidgetConfig = {
    multi: false,
  };

  getType() {
    if (this.userLogged.role == "USER") {
      return "client";
    } else if (this.userLogged.role == "ADMIN") {
      return "admin";
    }
    return "client";
  }

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    events: this.schedulesService.getScheduleds(),
    locales: [{ code: "pt-br" }],
    initialView: "dayGridMonth",
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };

  calendarOptionsVaccines: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    events: this.vaccinesService.getScheduledVaccines(),
    locales: [{ code: "pt-br" }],
    initialView: "dayGridMonth",
    weekends: true,
    dayMaxEvents: true,
  };

  currentEvents: EventApi[] = [];

  myPets: any;
  petSelected: any;
  petSelectedCare: any;
  petSelectedVaccines: any;
  petSelectedGalerry: any;
  vaccineSelected: any;
  expensives: any;
  expensivesToPay: any;
  expensiveSelected: any;
  raceSelected: any;
  clients: any;
  donations: any;
  inDonationProcess = false;
  donationProcessPetName = "";
  termsDonation = "";
  lockButtonPetDonation = false;
  termsAccepted = false;
  startNewService = false;
  petSelectedForService: any;
  serviceSelected: any;
  olderPetSelectedId = "Barnei";
  olderServiceSelectedId = "Banho e tosa";
  startDate: any;
  endDate: any;
  allDay: any;
  selectInfo: any;
  petShopServicesVaccines: any;
  petShopServicesCare: any;
  inServiceScreen = false;
  clickInfo: any;
  petsMemorial: any;
  inServicePets: any;
  awaitingPets: any;
  attendedPets: any;
  selectedPetForDoService: any;
  toDoServices: any;
  realizedServices: any;
  recomendedServices: any;
  servicoFinalizado = false;
  petsOfClient: any;
  clientSelected: any;
  doantionsPetShop: any;

  alterPassword = false;
  currentPassword = "";
  newPassword = "";
  confirmNewPassword = "";

  faPencil = faPencil;

  constructor(
    private toastr: ToastrService,
    public myPetsService: MyPetsService,
    private changeDetector: ChangeDetectorRef,
    private vaccinesService: VaccinesService,
    private schedulesService: SchedulesService,
    private userService: UserService,
    private raceService: RaceService,
    private clientsService: ClientsService,
    private donationsService: DonationsService,
    private PetShopServicesService: PetShopServicesService,
    private inServicePetsService: InServicePetsService,
    public registerService: RegisterService
  ) {}

  ngOnInit() {
    this.inServicePets = this.inServicePetsService.getInServicePets();
    this.awaitingPets = this.inServicePetsService.getAwaitingPets();
    this.attendedPets = this.inServicePetsService.getAttendedPets();
  }

  ngOnChanges() {
    switch (this.page) {
      case "myPets":
        this.loadPetsOfClient();
        break;
      case "Calendar":
        this.loadPetsOfClient();
        this.petShopServicesVaccines =
          this.PetShopServicesService.getServicesVaccines();
        this.petShopServicesCare =
          this.PetShopServicesService.getServicesCare();
        this.startNewService = false;
        this.inServiceScreen = false;
        break;
      case "Money":
        this.loadPetsOfClient();
        this.expensivesToPay = this.myPetsService.getExpensivesToPay();
        break;
      case "Shop":
        break;
      case "Dashboard":
        break;
      case "Clients":
        this.clients = this.clientsService.getClients();
        break;
      case "Package":
        break;
      case "CalendarAdmin":
        break;
      case "mockery":
        this.loadAllDonations();
        break;
      case "aboutPet":
        this.page = "aboutPet";
        break;
      case "Donation":
        this.loadAllDonations();
        break;
      case "Memorial":
        this.loadMemorial();
        break;
      case "Service":
        break;
    }
  }

  loadMemorial() {
    this.myPetsService
      .getMemorial(this.userLogged.username)
      .pipe(map((res: any) => res))
      .subscribe({
        next: (data: any) => {
          this.petsMemorial = data;
          console.log(this.petsMemorial);
        },
        error: (error) => {
          this.toastr.error("Erro ao buscar os Pets do memorial", error);
        },
      });
  }

  loadAllDonations() {
    this.donationsService
      .getAllDonations()
      .pipe(map((res: any) => res))
      .subscribe({
        next: (data: any) => {
          this.donations = data;
          console.log(this.donations);
        },
        error: (error) => {
          this.toastr.error("Erro ao buscar os Pets para doação", error);
        },
      });
  }

  loadPetsOfClient() {
    this.myPetsService
      .getMyPets(this.userLogged.username)
      .pipe(map((res: any) => res))
      .subscribe({
        next: (data: any) => {
          this.myPets = data;
          console.log(this.myPets);
        },
        error: (error) => {
          this.toastr.error("Erro ao buscar os Pets", error);
        },
      });
  }

  alterPage(page: string) {
    this.page = page;
    this.choosePage.emit(page);
  }

  alterPageAndGetPetsOfClient(page: string, clientName: string) {
    this.petsOfClient = this.myPetsService.getPetsOfClient(clientName);
    this.clientSelected = clientName;
    this.page = page;
    this.choosePage.emit(page);
  }

  alterPageAndRemoveImage(page: string) {
    this.page = page;
    this.choosePage.emit(page);
    this.petPictureUrl = undefined;
  }

  alterPageAndRegisterExpensiveSelected(
    page: string,
    expensive: any,
    pet: any,
    status: any
  ) {
    this.page = page;
    this.choosePage.emit(page);
    this.petSelected = pet;
    this.expensiveSelected = expensive;
    this.expensiveSelected.cardColor = pet.cardColor;
    this.expensiveSelected.status = status;
    console.log(this.expensiveSelected);
  }

  alterPageAndRegisterPetForGalerry(page: string, pet: any) {
    this.page = page;
    this.choosePage.emit(page);
    this.petSelectedGalerry = pet;
  }

  alterPageAndRegisterRace(page: string, race: any) {
    this.page = page;
    this.choosePage.emit(page);
    this.raceSelected = this.raceService.getRace(race);
  }

  switchPageAndRegisterVaccineSelected(page: string, vaccine: any) {
    this.page = page;
    this.choosePage.emit(page);
    this.vaccineSelected = this.vaccinesService.getAboutVaccine(
      vaccine.vaccine
    );
  }

  switchPageAndRegisterPetSelected(page: string, pet: any) {
    this.choosePage.emit(page);
    this.petSelected = pet;
    this.petSelectedCare = this.myPetsService.getCare(pet.name);
    this.petSelectedVaccines = this.myPetsService.getVaccines(pet.name);
  }

  registerPetSelectedForService(pet: any) {
    this.petSelectedForService = pet;
    console.log(this.petSelectedForService);

    const olderPet = document.getElementById(this.olderPetSelectedId);
    if (olderPet != null) {
      olderPet.style.border = "none";
      olderPet.style.width = "14.5%";
      olderPet.style.height = "7.7rem";
    }

    const petId = document.getElementById(pet.nome);
    if (petId != null) {
      petId.style.border = "3px solid #d35f2b";
      petId.style.width = "14.3%";
      petId.style.height = "7.3rem";
      this.olderPetSelectedId = pet.nome;
    }
  }

  registerServiceSelected(service: any) {
    this.serviceSelected = service;

    const olderService = document.getElementById(this.olderServiceSelectedId);
    if (olderService != null) {
      olderService.style.border = "none";
    }

    const serviceId = document.getElementById(service.nome);
    if (serviceId != null) {
      serviceId.style.border = "3px solid #d35f2b";
      this.olderServiceSelectedId = service.nome;
    }
  }

  registerEventInCalendar(pet: any) {
    if (this.petSelectedForService == undefined) {
      this.toastr.warning("Selecione um pet para o serviço");
      return;
    }

    if (this.serviceSelected == undefined) {
      this.toastr.warning("Selecione um serviço");
      return;
    }

    const calendarApi = this.selectInfo.view.calendar;
    calendarApi.unselect();
    const title = pet.name + " - " + this.serviceSelected.nome;

    calendarApi.addEvent({
      title,
      start: this.startDate,
      end: this.endDate,
      allDay: this.allDay,
      color: pet.cardColor,
    });

    this.startNewService = false;
    this.petSelectedForService = undefined;
    this.toastr.success("Agendamento criado com sucesso :D");
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.startNewService = true;
    this.startDate = selectInfo.startStr;
    this.endDate = selectInfo.endStr;
    this.allDay = selectInfo.allDay;
    this.selectInfo = selectInfo.view.calendar;
    console.log(this.myPets);
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.inServiceScreen = true;
    this.clickInfo = clickInfo;
    console.log(this.clickInfo);
  }

  deleteService() {
    this.clickInfo.event.remove();
    this.toastr.success(
      "Agendamento " + this.clickInfo.event.title + " cancelado com sucesso"
    );
    this.inServiceScreen = false;
  }

  cancelService() {
    this.startNewService = false;
    this.inServiceScreen = false;
    this.petSelectedForService = undefined;
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  editUserData(idInput: string) {
    const inputs = document.getElementsByClassName("inputDataUser");

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i] as HTMLInputElement;

      input.readOnly = !input.readOnly;

      if (input.style.backgroundColor == "") {
        input.style.backgroundColor = "#474756";
      }

      if (input.style.backgroundColor == "rgb(99, 99, 113)") {
        input.style.backgroundColor = "#474756";
      } else if (input.style.backgroundColor == "rgb(71, 71, 86)") {
        input.style.backgroundColor = "#636371";
      } else if (input.style.backgroundColor == "rgb(94, 91, 113)") {
        input.style.backgroundColor = "rgb(119 119 130)";
      } else if (input.style.backgroundColor == "rgb(119, 119, 130)") {
        input.style.backgroundColor = "#5e5b71";
      }

      if (input.readOnly) {
        if (this.userService.saveUserData()) {
          this.toastr.success("Usuário editado com sucesso");
        }
      }
    }
  }

  openClosePasswordPage() {
    this.alterPassword = !this.alterPassword;
  }

  confirmChangePassword() {
    if (
      this.currentPassword == "" ||
      this.newPassword == "" ||
      this.confirmNewPassword == ""
    ) {
      this.toastr.warning("Informe todos os campos para a troca de senha");
      return;
    }

    if (this.currentPassword != this.userLogged.password) {
      this.toastr.warning("Senha antiga incorreta");
      return;
    }

    if (this.newPassword != this.confirmNewPassword) {
      this.toastr.warning("Novas senhas não se coincidem");
      return;
    }

    this.toastr.success("Senha alterada com sucesso");
    this.newPassword = "";
    this.confirmNewPassword = "";
    this.currentPassword = "";
    this.alterPassword = false;
  }

  registerValueOldPassword(passwordTyping: string, type: string) {
    switch (type) {
      case "currentPassword":
        this.currentPassword = passwordTyping;
        break;
      case "newPassword":
        this.newPassword = passwordTyping;
        break;
      case "confirmNewPassword":
        this.confirmNewPassword = passwordTyping;
        break;
    }
  }

  rateService(event: any) {
    // aqui recebo a avaliação e preciso atualizar na tela de serviços prestados do pet
    this.toastr.success("Serviço avaliado com sucesso :D");
  }

  onComplete = (files: UploadWidgetResult[]) => {
    this.petPictureUrl = files[0]?.fileUrl;
    this.newPet.imagem = this.petPictureUrl;
  };

  registerPetValue(evento: any, tipo: string) {
    switch (tipo) {
      case "nome":
        this.newPet.nome = evento;
        break;
      case "imagem":
        this.newPet.imagem = evento;
        break;
      case "cardColor":
        this.newPet.cardColor = evento;
        break;
      case "raca":
        this.newPet.raca = evento;
        break;
      case "cor":
        this.newPet.cor = evento;
        break;
      case "idade":
        this.newPet.idade = evento;
        break;
      case "sexo":
        this.newPet.sexo = evento;
        break;
      case "comportamento":
        this.newPet.comportamento = evento;
        break;
      case "adestrado":
        this.newPet.adestrado = evento;
        break;
      case "castrado":
        this.newPet.castrado = evento;
        break;
      case "condicaoEspecial":
        this.newPet.condicaoEspecial = evento;
        break;
      case "peso":
        this.newPet.peso = evento;
        break;
      case "porte":
        this.newPet.porte = evento;
        break;
      case "expectativaVida":
        this.newPet.expectativaVida = evento;
        break;
      case "origemRaca":
        this.newPet.origemRaca = evento;
        break;
      case "historia":
        this.newPet.historia = evento;
        break;
    }
  }

  petToRegister: any;
  registerNewPet(type: string) {
    if (
      this.newPet.nome == "" ||
      this.newPet.nome == undefined ||
      this.newPet.nome == null
    ) {
      this.toastr.warning("Informe o nome do Pet");
      return;
    }

    if (
      this.newPet.historia == "" ||
      this.newPet.historia == undefined ||
      this.newPet.historia == null
    ) {
      this.toastr.warning("Informe a história do Pet");
      return;
    }

    if (
      this.newPet.imagem == "" ||
      this.newPet.imagem == undefined ||
      this.newPet.imagem == null
    ) {
      this.toastr.warning("Insira uma imagem");
      return;
    }

    if (
      this.newPet.cardColor == "" ||
      this.newPet.cardColor == undefined ||
      this.newPet.cardColor == null
    ) {
      this.toastr.warning("Seleciona sua cor favorita =)");
      return;
    }

    if (
      this.newPet.raca == "" ||
      this.newPet.raca == undefined ||
      this.newPet.raca == null
    ) {
      this.toastr.warning("Informe a raça do pet");
      return;
    }

    if (
      this.newPet.cor == "" ||
      this.newPet.cor == undefined ||
      this.newPet.cor == null
    ) {
      this.toastr.warning("Informe a cor do pet");
      return;
    }

    if (
      this.newPet.idade == "" ||
      this.newPet.idade == undefined ||
      this.newPet.idade == null
    ) {
      this.toastr.warning("Informe a idade do pet");
      return;
    }

    if (
      this.newPet.sexo == "" ||
      this.newPet.sexo == undefined ||
      this.newPet.sexo == null
    ) {
      this.toastr.warning("Informe o sexo do pet");
      return;
    }

    if (
      this.newPet.comportamento == "" ||
      this.newPet.comportamento == undefined ||
      this.newPet.comportamento == null
    ) {
      this.toastr.warning("Informe o comportamento do pet");
      return;
    }

    if (
      this.newPet.adestrado == "" ||
      this.newPet.adestrado == undefined ||
      this.newPet.adestrado == null
    ) {
      this.toastr.warning("Informe o adestramento do pet");
      return;
    }

    if (
      this.newPet.castrado == "" ||
      this.newPet.castrado == undefined ||
      this.newPet.castrado == null
    ) {
      this.toastr.warning("Informe se o Pet é castrado");
      return;
    }

    if (
      this.newPet.condicaoEspecial == "" ||
      this.newPet.condicaoEspecial == undefined ||
      this.newPet.condicaoEspecial == null
    ) {
      this.toastr.warning("Informe se o Pet tem alguma condição especial");
      return;
    }

    if (
      this.newPet.peso == "" ||
      this.newPet.peso == undefined ||
      this.newPet.peso == null
    ) {
      this.toastr.warning("Informe o peso do Pet");
      return;
    }

    if (
      this.newPet.porte == "" ||
      this.newPet.porte == undefined ||
      this.newPet.porte == null
    ) {
      this.toastr.warning("Informe o porte do Pet");
      return;
    }

    if (
      this.newPet.expectativaVida == "" ||
      this.newPet.expectativaVida == undefined ||
      this.newPet.expectativaVida == null
    ) {
      this.toastr.warning("Informe a expectativa de Vida do Pet");
      return;
    }

    if (
      this.newPet.origemRaca == "" ||
      this.newPet.origemRaca == undefined ||
      this.newPet.origemRaca == null
    ) {
      this.toastr.warning("Informe a origem da raça do Pet");
      return;
    }

    if (type == "newPetDonation") {
      this.petToRegister = {
        pet: {
          name: this.newPet.nome,
          image: this.newPet.imagem,
          cardColor: this.newPet.cardColor,
          color: this.newPet.cor,
          age: this.newPet.idade,
          gender: this.newPet.sexo,
          behavior: this.newPet.comportamento,
          trained: this.newPet.adestrado == "Sim" ? true : false,
          neutered: this.newPet.castrado == "Sim" ? true : false,
          specialCondition:
            this.newPet.condicaoEspecial == "Sim" ? true : false,
          weight: this.newPet.peso,
          size: this.newPet.porte,
          lifeExpectancy: this.newPet.expectativaVida,
          birthDay: null,
          deathDay: null,
          isAlive: true,
          isDonation: true,
          history: this.newPet.historia,
        },
        careName: "Tosa Higiênica",
        breedName: this.newPet.raca,
        userName: this.userLogged.username,
      };
    } else {
      this.petToRegister = {
        pet: {
          name: this.newPet.nome,
          image: this.newPet.imagem,
          cardColor: this.newPet.cardColor,
          color: this.newPet.cor,
          age: this.newPet.idade,
          gender: this.newPet.sexo,
          behavior: this.newPet.comportamento,
          trained: this.newPet.adestrado == "Sim" ? true : false,
          neutered: this.newPet.castrado == "Sim" ? true : false,
          specialCondition:
            this.newPet.condicaoEspecial == "Sim" ? true : false,
          weight: this.newPet.peso,
          size: this.newPet.porte,
          lifeExpectancy: this.newPet.expectativaVida,
          birthDay: null,
          deathDay: null,
          isAlive: true,
          isDonation: false,
          history: this.newPet.historia,
        },
        careName: "Tosa Higiênica",
        breedName: this.newPet.raca,
        userName: this.userLogged.username,
      };
    }

    this.registerService.registerPet(this.petToRegister).subscribe({
      next: (res: any) => {
        this.toastr.success("Pet cadastrado com sucesso! :D");
      },
      error: (error) => {
        this.toastr.error("Erro ao cadastrar o Pet:", error);
      },
    });

    if (type == "newPetDonation") {
      setTimeout(() => {
        this.alterPage("mockery");
      }, 800);
    } else if (type == "newPet") {
      this.myPets = this.myPetsService.getMyPets(this.userLogged.username);
      setTimeout(() => {
        this.alterPage("myPets");
      }, 800);
    }
  }

  startDonationProcess(petName: string) {
    this.termsDonation = this.donationsService.getTermsDonation();
    this.inDonationProcess = true;
    this.donationProcessPetName = petName;
    this.lockButtonPetDonation = true;
  }

  acceptTerms() {
    this.lockButtonPetDonation = false;
    this.inDonationProcess = false;
    this.termsAccepted = true;
  }

  finishDonation(pet: any) {
    let petForDonation = {
      id: pet.pet.id,
      isDonation: false,
    };

    this.myPetsService.updatePet(petForDonation, this.userLogged.id).subscribe({
      next: (data: any) => {
        this.toastr.success(
          "Pet enviado para avaliação de adoção com sucesso!"
        );
        this.loadAllDonations();
        this.inDonationProcess = false;
        this.termsAccepted = false;
      },
      error: (error) => {
        this.toastr.error("Erro ao enviar pedido de adoção", error);
      },
    });
  }

  goodBye(pet: any) {
    let deathPet = {
      id: pet.id,
      isAlive: false,
    };

    this.myPetsService.updatePet(deathPet, this.userLogged.id).subscribe({
      next: (data: any) => {
        this.toastr.warning("A equipe BuddyCarer sente muito por sua perda :(");
        this.toastr.success(
          "O perfil de " + pet.name + " foi criado no memorial"
        );
        this.loadPetsOfClient();

        setTimeout(() => {
          this.alterPage("myPets");
        }, 1000);

        console.log(pet);
      },
      error: (error) => {
        this.toastr.error("Erro ao enviar seu pet ao cemitério :O", error);
      },
    });
  }

  returnAtualDate() {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, "0");
    var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    var ano = dataAtual.getFullYear();
    var dataFormatada = dia + "/" + mes + "/" + ano;
    return dataFormatada;
  }

  iniciarAtendimento(pet: any) {
    this.servicoFinalizado = false;
    this.awaitingPets = this.awaitingPets.filter(
      (obj: { nome: string }) => obj.nome !== pet.nome
    );
    this.inServicePets.push(pet);
    this.selectedPetForDoService = pet;
    this.toastr.success(
      "Serviço para o pet " + pet.nome + " iniciado com sucesso!"
    );
    this.toDoServices = this.inServicePetsService.GetToDoServices(pet.nome);
    this.realizedServices = this.inServicePetsService.GetRealizedServices(
      pet.nome
    );
    this.recomendedServices = this.inServicePetsService.GetRecomendedServices(
      pet.nome
    );

    setTimeout(() => {
      this.alterPage("initialService");
    }, 1300);
  }

  visualizarAtendimento(pet: any) {
    this.servicoFinalizado = false;
    this.toDoServices = this.inServicePetsService.GetToDoServices(pet.nome);
    this.realizedServices = this.inServicePetsService.GetRealizedServices(
      pet.nome
    );
    this.recomendedServices = this.inServicePetsService.GetRecomendedServices(
      pet.nome
    );
    this.selectedPetForDoService = pet;
    this.alterPage("initialService");
  }

  alterPageAndStartService(page: string, pet: any) {
    this.toDoServices = this.inServicePetsService.GetToDoServices(pet.nome);
    this.realizedServices = this.inServicePetsService.GetRealizedServices(
      pet.nome
    );
    this.recomendedServices = this.inServicePetsService.GetRecomendedServices(
      pet.nome
    );

    this.page = page;
    this.choosePage.emit(page);
    setTimeout(() => {
      this.inServicePets.push(pet);
    }, 1300);

    this.toastr.success(
      "Serviço para o pet " + pet.nome + " iniciado com sucesso!"
    );
    this.selectedPetForDoService = pet;

    setTimeout(() => {
      this.alterPage("initialService");
    }, 3000);
  }

  finalizarAtendimento(pet: any) {
    if (!this.servicoFinalizado) {
      this.toastr.warning(
        "Necessário iniciar um serviço para esse atendimento ou concluir o serviço em progresso"
      );
      return;
    }
    this.inServicePets = this.inServicePets.filter(
      (obj: { nome: string }) => obj.nome !== pet.nome
    );
    this.toastr.success("Atendimento finalizado com sucesso!");
    this.alterPage("Service");
  }

  cancelarAtendimento(pet: any) {
    this.inServicePets = this.inServicePets.filter(
      (obj: { nome: string }) => obj.nome !== pet.nome
    );
    this.toastr.success("Serviço cancelado com sucesso!");
    this.alterPage("Service");
  }

  iniciarServico(servico: any) {
    this.servicoFinalizado = false;
    this.toastr.success("Serviço iniciado com sucesso!");
    for (let i = 0; i < this.toDoServices.length; i++) {
      if (servico.servico == this.toDoServices[i].servico) {
        this.toDoServices[i].carePercentagem = "40";
      }
    }

    for (let i = 0; i < this.recomendedServices.length; i++) {
      if (servico.servico == this.recomendedServices[i].servico) {
        this.recomendedServices[i].carePercentagem = "40";
      }
    }
  }

  avancarEtapaServico(servico: any) {
    this.toastr.success("Andamento atualizado com sucesso!");
    for (let i = 0; i < this.toDoServices.length; i++) {
      if (servico.servico == this.toDoServices[i].servico) {
        this.toDoServices[i].carePercentagem = "70";
      }
    }

    for (let i = 0; i < this.recomendedServices.length; i++) {
      if (servico.servico == this.recomendedServices[i].servico) {
        this.recomendedServices[i].carePercentagem = "70";
      }
    }
  }

  finalizarServico(servico: any) {
    this.servicoFinalizado = true;
    this.toastr.success("Serviço concluido com sucesso!");
    for (let i = 0; i < this.toDoServices.length; i++) {
      if (servico.servico == this.toDoServices[i].servico) {
        this.toDoServices[i].carePercentagem = "100";
      }
    }

    for (let i = 0; i < this.recomendedServices.length; i++) {
      if (servico.servico == this.recomendedServices[i].servico) {
        this.recomendedServices[i].carePercentagem = "100";
      }
    }

    this.recomendedServices = this.recomendedServices.filter(
      (obj: { servico: string }) => obj.servico !== servico.servico
    );

    this.toDoServices = this.toDoServices.filter(
      (obj: { servico: string }) => obj.servico !== servico.servico
    );

    this.realizedServices.push(servico);
  }
}
