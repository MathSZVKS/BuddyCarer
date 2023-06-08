import { Component, ElementRef, Renderer2 } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private toastr: ToastrService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  title = "buddyCarer";
  userType = "client";
  inLogin = false;
  theme = "default";
  backgroundTitleColor = "#1f1d2b";
  userLogged = {
    permissionAccess: false,
    type: "",
    user: "",
    name: "",
    email: "",
    receiveNews: "",
    birthDay: "",
    cpf: "",
    phone: "",
    typePerson: "",
    password: "",
    cardNumber: "",
    cardName: "",
    flag: "",
    securityCode: "",
    rua: "",
    cep: "",
    numeroRua: "",
    complemento: "",
    referencia: "",
    cidade: "",
    estado: "",
    telefoneResidencial: "",
  };
  page = "initial";

  openLoginInterface() {
    this.inLogin = true;
  }

  acessGaranted(event: any) {
    if (event.permissionAccess) {
      this.inLogin = false;
      this.userLogged = event;
      this.userType = event.type;
    } else {
      this.toastr.error("Usuário ou senha inválidos");
    }
  }

  return(event: string) {
    if ((event = "initial")) {
      this.inLogin = false;
    }
  }

  logOffUser() {
    this.userLogged.user = "";
    this.userType = "client";
    this.page = "initial";
  }

  alterPage(page: string) {
    this.page = page;
  }

  sendUserLogged(userLogged: object) {
    userLogged = this.userLogged;
  }

  adjustScreen() {
    const containerElement =
      this.elementRef.nativeElement.querySelector(".container");

    if (containerElement.style.maxWidth == "100%") {
      containerElement.style.maxWidth = "1240px";
    } else {
      containerElement.style.maxWidth = "100%";
    }
  }

  alterBackgroundColor(backgroundColor: string) {
    const containerElement =
      this.elementRef.nativeElement.querySelector(".container");
    containerElement.style.backgroundColor = backgroundColor;
    this.backgroundTitleColor = backgroundColor;

    if (backgroundColor == "rgb(18 18 18)") {
      const containerbackElement =
        this.elementRef.nativeElement.querySelector(".outer-container");
      containerbackElement.style.background = backgroundColor;

      const bodyElement = this.elementRef.nativeElement.querySelector(".body");
      bodyElement.style.background = backgroundColor;
    } else {
      const containerbackElement =
        this.elementRef.nativeElement.querySelector(".outer-container");
      containerbackElement.style =
        "background: linear-gradient(90deg, rgba(32, 32, 32, 1) 0%, rgba(72, 72, 119, 1) 61%, rgba(62, 77, 84, 1) 100%);";

      const bodyElement = this.elementRef.nativeElement.querySelector(".body");
      bodyElement.style =
        "background: linear-gradient(90deg, rgba(32, 32, 32, 1) 0%, rgba(72, 72, 119, 1) 61%, rgba(62, 77, 84, 1) 100%);";
    }
  }

  alterTheme() {
    if (this.theme == "default") {
      this.theme = "white";

      const containerElement =
        this.elementRef.nativeElement.querySelector(".container");
      containerElement.style.backgroundColor = "#ffffffbf";
    } else {
      this.theme = "default";

      const containerElement =
        this.elementRef.nativeElement.querySelector(".container");
      containerElement.style.backgroundColor = "#1f1d2b";
    }
  }
}
