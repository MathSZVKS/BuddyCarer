import { Component, Input, ɵɵNgOnChangesFeature } from "@angular/core";
import { MyPetsService } from "../services/myPets/my-pets.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  providers: [MyPetsService]
})
export class ContentComponent {
  @Input() page = "initial";

  myPets: any;

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
    }
  }

  switchPage(page: string){
    this.page = page;
  }
}
