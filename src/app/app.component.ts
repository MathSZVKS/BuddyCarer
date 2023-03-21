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
  userLogged = '';

  openLoginInterface(){
    this.inLogin = true;
  }

  acessGaranted(event: any){
    if(event.permissionAccess){
      this.inLogin = false;
      this.userLogged = event.user;
    }else{
      this.toastr.error('Usuário ou senha incorretos');
    }
  }

  return(event: any){
    if(event){
      this.inLogin = false;
    }
  }

  updateUserLogged(event: any){
    this.userLogged = event;
  }
}
