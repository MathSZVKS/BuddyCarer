import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ɵɵNgOnChangesFeature,
} from "@angular/core";
import { MyPetsService } from "../services/myPets/my-pets.service";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import { VaccinesService } from "../services/vaccines/vaccines.service";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { SchedulesService } from "../services/schedules/schedules.service";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../services/user/user.service";
import { Procedimento } from "../interfaces/procedimento";
import { RaceService } from "../services/race/race.service";
import { ClientsService } from "../services/clients/clients.service";
import { DonationsService } from "../services/donations/donations.service";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { PetShopServicesService } from "../services/pet-shop-services/pet-shop-services.service";
import { BaseChartDirective } from "ng2-charts";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import { InServicePetsService } from "../services/admin-services/in-service-pets.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService],
})
export class ContentComponent {
  @Output() choosePage = new EventEmitter<string>();
  @Input() backgroundTitleColor = "#1f1d2b";
  @Input() page = "initial";
  @Input() userLogged = {
    permissionAccess: false,
    type: "",
    user: "",
    name: "",
    email: "",
    receiveNews: "",
    birthDay: "",
    cpf: "",
    phone: "",
    typePerson: "",
    password: "",
    cardNumber: "",
    cardName: "",
    flag: "",
    securityCode: "",
    rua: "",
    cep: "",
    numeroRua: "",
    complemento: "",
    referencia: "",
    cidade: "",
    estado: "",
    telefoneResidencial: "",
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
  };

  petPictureUrl: any;
  uploader = Uploader({
    apiKey: "free",
  });

  options: UploadWidgetConfig = {
    multi: false,
  };

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
    private inServicePetsService: InServicePetsService
  ) {}

  ngOnInit() {
    this.myPets = this.myPetsService.getMyPets();
    this.petsMemorial = this.myPetsService.getMemorialPets();
    this.inServicePets = this.inServicePetsService.getInServicePets();
    this.awaitingPets = this.inServicePetsService.getAwaitingPets();
    this.attendedPets = this.inServicePetsService.getAttendedPets();
    this.donations = this.donationsService.getAllDonations();
    this.doantionsPetShop = this.donationsService.getAllDonationsPetShop();
  }

  ngOnChanges() {
    //Carregando os elementos das páginas de forma dinamica para melhorar a performance
    switch (this.page) {
      case "myPets":
        break;
      case "Calendar":
        this.petShopServicesVaccines =
          this.PetShopServicesService.getServicesVaccines();
        this.petShopServicesCare =
          this.PetShopServicesService.getServicesCare();
        this.startNewService = false;
        this.inServiceScreen = false;
        break;
      case "Money":
        this.myPets = this.myPetsService.getMyPets();
        this.expensives = this.myPetsService.getExpensives();
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
        break;
      case "aboutPet":
        this.page = "aboutPet";
        break;
      case "Donation":
        break;
      case "Memorial":
        break;
      case "Service":
        break;
    }
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

  alterPageAndRegisterExpensiveSelected(page: string, expensive: any) {
    this.page = page;
    this.choosePage.emit(page);
    this.expensiveSelected = expensive;
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
    this.petSelectedCare = this.myPetsService.getCare(pet.nome);
    this.petSelectedVaccines = this.myPetsService.getVaccines(pet.nome);
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
    const title = pet.nome + " - " + this.serviceSelected.nome;

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
    }
  }

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

    if(type == 'newPetDonation'){
      this.doantionsPetShop.push(this.newPet);
      this.toastr.success("Pet cadastrado com sucesso :D");
      this.alterPage("mockery");
    }else if(type == 'newPet'){
      this.myPets.push(this.newPet);
      this.toastr.success("Pet cadastrado com sucesso :D");
      this.alterPage("myPets");
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

  finishDonation(petName: string) {
    this.toastr.success("Pedido de adoção enviado para análise com sucesso :D");
    this.donations = this.donations.filter(
      (obj: { nome: string }) => obj.nome !== petName
    );
    this.inDonationProcess = false;
    this.termsAccepted = false;
  }

  goodBye(pet: any) {
    this.toastr.warning("A equipe BuddyCarer sente muito por sua perda :(");
    this.toastr.success("O perfil de " + pet.nome + " foi criado no memorial");
    this.myPets = this.myPets.filter(
      (obj: { nome: string }) => obj.nome !== pet.nome
    );
    this.petsMemorial.push(pet);
    this.alterPage("myPets");
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
