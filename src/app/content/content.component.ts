import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ɵɵNgOnChangesFeature } from "@angular/core";
import { MyPetsService } from "../services/myPets/my-pets.service";
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService]
})
export class ContentComponent {
  @Input() page = "initial";

  @Output() choosePage = new EventEmitter<string>();

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin
    ],
    events: [
      { title: 'event 1', date: '2023-04-03' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };

  currentEvents: EventApi[] = [];

  myPets: any;
  petSelected: any;

  constructor(public myPetsService: MyPetsService, private changeDetector: ChangeDetectorRef){}

  ngOnChanges(){
    //Carregando os elementos das páginas de forma dinamica para melhorar a performance
    switch(this.page){
      case 'myPets':
        this.myPets = this.myPetsService.getMyPets();
      break;

      case 'Calendar':
      break;

      case 'Care':
      break;

      case 'Money':
      break;

      case 'Shop':
      break;
  
      case 'Dashboard':
      break;
  
      case 'Clients':
      break;

      case 'Package':
      break;
    
      case 'CalendarAdmin':
      break;
    
      case 'mockery':
      break;

      case 'aboutPet':
        this.page = 'aboutPet';
      break;
    }
  }

  alterPage(page: string){
    this.page = page;
  }

  switchPageAndRegisterPetSelected(page: string, pet: any){
    this.choosePage.emit('aboutPet');
    this.petSelected = pet;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Insira o Nome do Pet');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); 

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Gostaria de desmarcar o agendamento?'${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
