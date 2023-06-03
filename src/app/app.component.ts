import { Component, ElementRef } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private toastr: ToastrService, private elementRef: ElementRef) {}

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
