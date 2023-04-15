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

  faPencil = faPencil;

  constructor(
    private toastr: ToastrService,
    public myPetsService: MyPetsService,
    private changeDetector: ChangeDetectorRef,
    private vaccinesService: VaccinesService,
    private schedulesService: SchedulesService,
    private userService: UserService
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
      }

      if (input.readOnly) {
        if(this.userService.saveUserData()){
          this.toastr.success("Usuário editado com Sucesso");
        }
      }
    }
  }
}
