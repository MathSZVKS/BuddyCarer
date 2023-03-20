import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  user = '';
  password = '';

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
    this.loginService.login(this.user, this.password)
  }

}
