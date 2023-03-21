import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buddyCarer';
  
  userType = 'client';
  inLogin = true;

  openLoginInterface(){
    this.inLogin = true;
  }

  acessGaranted(evento: any){
    if(evento){
      this.inLogin = false;
    }else{
      alert('acesso negado');
    }
  }
}
