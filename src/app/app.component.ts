import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  title = 'buddyCarer';
  
  userType = 'client';
  inLogin = false;

  openLoginInterface(){
    this.inLogin = true;
  }

  acessGaranted(evento: any){
    if(evento){
      this.inLogin = false;
    }else{
      this.toastr.error('Acesso Negado');
    }
  }

  return(evento: any){
    if(evento){
      this.inLogin = false;
    }
  }
}
