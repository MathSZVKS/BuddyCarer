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

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService],
})
export class ContentComponent {
  @Input() page = "initial";

  @Output() choosePage = new EventEmitter<string>();

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    events: [{ title: "Tosa do Barnei", date: "2023-04-03" }],
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
    events: [{ title: "Antirábica", date: "2023-04-03" }],
    locales: [{ code: "pt-br" }],
    initialView: "dayGridMonth",
    weekends: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };

  currentEvents: EventApi[] = [];

  myPets: any;
  petSelected: any;
  petSelectedCare: any;
  petSelectedVaccines: any;

  constructor(
    public myPetsService: MyPetsService,
    private changeDetector: ChangeDetectorRef
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
}
