import { Component, Input, ɵɵNgOnChangesFeature } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent {
  @Input() page = "initial";

  myPets: any;

  ngOnChanges(){
    //Carregando os elementos das páginas de forma dinamica para melhorar a performance

    switch(this.page){
      case 'myPets':
        this.myPets = [
          {
            nome: 'Barnei',
            imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
          },
          {
            nome: 'Ted',
            imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
          },
          {
            nome: 'Nero',
            imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
          }
        ]
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
}
