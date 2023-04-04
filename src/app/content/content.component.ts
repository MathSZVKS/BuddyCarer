import { Component, EventEmitter, Input, Output, ɵɵNgOnChangesFeature } from "@angular/core";
import { MyPetsService } from "../services/myPets/my-pets.service";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';

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
    initialView: 'dayGridMonth',
    eventClick: this.handleDateClick.bind(this),
    plugins: [dayGridPlugin],
    events: [
      { title: 'event 1', date: '2023-04-03' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    weekends: true
  };

  myPets: any;
  petSelected: any;

  constructor(public myPetsService: MyPetsService){}

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

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
