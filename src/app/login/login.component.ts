import { Component, Output, EventEmitter } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../services/login/login.service";
import { RegisterService } from "../services/register/register.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginService],
})
export class LoginComponent {
  @Output() loginStatus = new EventEmitter<object>();
  @Output() return = new EventEmitter<string>();

  inLogin = true;

  userToLogin = "";
  passwordToLogin = "";
  
  userToRegister = "";
  passwordToRegister = "";
  nameToRegister = "";
  emailToRegister = "";

  constructor(
    public loginService: LoginService,
    public registerService: RegisterService,
    private toastr: ToastrService
    ) {}

  registerValueToLogin(value: string, type: string) {
    if (type == "user") {
      this.userToLogin = value;
    } else if ((type = "password")) {
      this.passwordToLogin = value;
    }
  }

  registerValueToRegister(value: string, type: string){
    switch(type){
      case 'user':
        this.userToRegister = value;
      break;
      case 'password':
        this.passwordToRegister = value;
      break;
      case 'name':
        this.nameToRegister = value;
      break;
      case 'email':
        this.emailToRegister = value;
      break;
    }
  }
  
  registerNewUser(){
    if(this.userToRegister == '' || this.passwordToRegister == '' || this.nameToRegister == '' || this.emailToRegister == ''){
      this.toastr.warning('Informe todos os dados para o cadastro')
      return ;
    }

    let userToRegister = {
      user: this.userToRegister,
      password: this.passwordToRegister,
      name: this.nameToRegister,
      email: this.emailToRegister
    }

    if(this.registerService.register(userToRegister) == 'registered'){
      this.toastr.success('Usuário cadastrado com sucesso :D');
      this.inLogin = true;
    }else if(this.registerService.register(userToRegister) == 'notRegistered'){
      this.toastr.error('Houve um erro no cadastro :(');
    }
  }

  access() {
    this.loginStatus.emit(this.loginService.login(this.userToLogin, this.passwordToLogin));
  }

  returnPage(page: string) {
    if(page == 'initial'){
      this.return.emit(page);
    }else if(page == 'login'){
      this.inLogin = true;
    }
  }

  openRegisterPage(){
    this.inLogin = false;
  }
}
