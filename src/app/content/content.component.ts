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
import { BaseChartDirective } from "ng2-charts";
import DataLabelsPlugin from "chartjs-plugin-datalabels";

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
    { id: 1, name: "Feminino" },
    { id: 2, name: "Masculino" },
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
  olderPetSelectedId = "Barnei";

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
    private donationsService: DonationsService
  ) {}

  ngOnInit() {
    this.myPets = this.myPetsService.getMyPets();
  }

  ngOnChanges() {
    //Carregando os elementos das páginas de forma dinamica para melhorar a performance
    switch (this.page) {
      case "myPets":
        break;
      case "Calendar":
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
        this.donations = this.donationsService.getAllDonations();
        break;
    }
  }

  alterPage(page: string) {
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
    this.choosePage.emit("aboutPet");
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

  registerEventInCalendar(pet: any) {
    const calendarApi = this.selectInfo.view.calendar;

    calendarApi.unselect();

    const title = pet.nome;

    calendarApi.addEvent({
      title,
      start: this.startDate,
      end: this.endDate,
      allDay: this.allDay,
    });

    this.startNewService = false;
    this.toastr.success("Agendamento criado com sucesso :D")
  }

  startDate: any;
  endDate: any;
  allDay: any;
  selectInfo: any
  handleDateSelect(selectInfo: DateSelectArg) {
    this.startNewService = true;
    this.startDate = selectInfo.startStr;
    this.endDate = selectInfo.endStr;
    this.allDay = selectInfo.allDay;
    this.selectInfo = selectInfo.view.calendar;
    console.log(this.myPets);
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(`Gostaria de desmarcar o agendamento?'${clickInfo.event.title}'`)
    ) {
      clickInfo.event.remove();
    }
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

  registerNewPet() {
    //Aqui devo chamar o serviço do back pra salvar o novo pet

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

    this.myPets.push(this.newPet);
    this.toastr.success("Pet cadastrado com sucesso :D");
    this.alterPage("myPets");
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
}
