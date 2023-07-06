import { Component, Output, EventEmitter } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../services/user/user.service";
import { RegisterService } from "../../services/register/register.service";
import { UserData } from "../../interfaces/UserData";
import { DataLogin } from "../../interfaces/DataLogin";
import { UtilService } from "../../util/util.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [UserService],
})

export class LoginComponent {
  @Output() loginStatus = new EventEmitter<object>();
  @Output() return = new EventEmitter<string>();

  inLogin = true;
  
  defaultDataLogin: DataLogin = {
    username: '',
    password: '',
    name: '',
    email: ''
  };
  
  userToRegister: DataLogin = { ...this.defaultDataLogin };
  userToLogin: DataLogin = { ...this.defaultDataLogin };

  constructor(
    public userService: UserService,
    public registerService: RegisterService,
    private toastr: ToastrService,
    private UtilService: UtilService
  ) {}

  registerValueToLogin(value: string, type: string) {
    if (type == "user") {
      this.userToLogin.username = value;
    } else if ((type = "password")) {
      this.userToLogin.password = value;
    }
  }

  registerValueToRegister(value: string, type: string) {
    switch (type) {
      case "user":
        this.userToRegister.username = value;
        break;
      case "password":
        this.userToRegister.password = value;
        break;
      case "name":
        this.userToRegister.name = value;
        break;
      case "email":
        this.userToRegister.email = value;
        break;
    }
  }

  registerNewUser() {
    if (
      this.userToRegister.username == "" ||
      this.userToRegister.password == "" ||
      this.userToRegister.name == "" ||
      this.userToRegister.email == ""
    ) {
      this.toastr.warning("Informe todos os dados para o cadastro");
      return;
    }

    if(!this.UtilService.validateEmail(this.userToRegister.email)){
      this.toastr.warning("E-mail inválido");
      return
    }

    let userToRegister = {
      username: this.userToRegister.username,
      password: this.userToRegister.password,
      name: this.userToRegister.name,
      email: this.userToRegister.email,
      storeName: "StoreTest",
      role: "USER",
    };

    this.registerService.register(userToRegister).subscribe({
      next: (res: any) => {
        this.toastr.success("Usuário cadastrado com sucesso!");
        this.returnPage("login");
      },
      error: (error) => {
        console.error("Houve um erro durante o cadastro", error);
      },
    });
  }

  access() {
    this.userService.login(this.userToLogin.username, this.userToLogin.password).subscribe({
      next: (res: any) => {
        const userData: UserData = {
          id: res.id,
          firstname: res.firstname,
          lastname: res.lastname,
          username: res.username,
          password: res.password,
          address: res.adress,
          email: res.email,
          receiveNews: res.receiveNews,
          birthDay: res.birthDay,
          image: res.image,
          phone: res.phone,
          cpf: res.cpf,
          personType: res.personType,
          cardNumber: res.cardNumber,
          cardName: res.cardName,
          flag: res.flag,
          securityCode: res.securityCode,
          age: res.age,
          authorities: res.authorities,
          tokens: res.tokens,
          role: res.role,
        };
        const jsonData = JSON.stringify(userData);
        localStorage.setItem("userData", jsonData);
        this.loginStatus.emit(userData);
        this.returnPage("initial");
      },
      error: (error) => {
        this.toastr.error("Usuário ou senha incorretos!");
      },
    });
  }

  returnPage(page: string) {
    if (page == "initial") {
      this.return.emit(page);
    } else if (page == "login") {
      this.inLogin = true;
    }
  }

  openRegisterPage() {
    this.inLogin = false;
  }
}
