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
import { SchedulesService } from "../services/schedules/schedules.service";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../services/user/user.service";
import { Procedimento } from "../interfaces/procedimento";
import { RaceService } from "../services/race/race.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService],
})
export class ContentComponent {
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
  };

  @Output() choosePage = new EventEmitter<string>();

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    events: [this.schedulesService.getScheduleds()],
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
    events: [this.vaccinesService.getScheduledVaccines()],
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
  vaccineSelected: any;
  expensives: any
  expensivesToPay: any;
  expensiveSelected: any;
  raceSelected: any

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
    private raceService: RaceService
  ) {}

  ngOnChanges() {
    //Carregando os elementos das páginas de forma dinamica para melhorar a performance
    switch (this.page) {
      case "myPets":
        this.myPets = this.myPetsService.getMyPets();
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
    }
  }

  alterPage(page: string) {
    this.page = page;
    this.choosePage.emit(page);
  }

  alterPageAndRegisterExpensiveSelected(page: string, expensive: any){
    this.page = page;
    this.choosePage.emit(page);
    this.expensiveSelected = expensive;
  }

  alterPageAndRegisterRace(page: string, race: any){
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

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt("Insira o Nome do Pet");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
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
      } else if (input.style.backgroundColor == "rgb(94, 91, 113)"){
        input.style.backgroundColor = "rgb(119 119 130)";
      } else if (input.style.backgroundColor == "rgb(119, 119, 130)"){
        input.style.backgroundColor = "#5e5b71";
      }

      if (input.readOnly) {
        if (this.userService.saveUserData()) {
          this.toastr.success("Usuário editado com Sucesso");
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

  rateService(event: any){
    // aqui recebo a avaliação e preciso atualizar na tela de serviços prestados do pet
    this.toastr.success('Serviço avaliado com sucesso :D')
  }
}
