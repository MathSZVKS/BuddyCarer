import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  @Output() loginStatus = new EventEmitter<boolean>();

  user = '';
  password = '';
  accessPermited: any;

  constructor(
    public loginService: LoginService,
  ){}

  registerValue(value: string, type: string){
    if(type == 'user'){
      this.user = value;
    }else if (type = 'password'){
      this.password = value;
    }
  }

  access(){
    this.loginStatus.emit(this.loginService.login(this.user, this.password));
  }

}
