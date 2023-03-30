import { Component, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  title = "buddyCarer";
  userType = "client";
  inLogin = false;
  userLogged = "";
  page = "initial";

  openLoginInterface() {
    this.inLogin = true;
  }

  acessGaranted(event: any) {
    if (event.permissionAccess) {
      this.inLogin = false;
      this.userLogged = event.user;
      this.userType = event.type;
    } else {
      this.toastr.error("Usuário ou senha inválidos");
    }
  }

  return(event: string) {
    if (event = 'initial') {
      this.inLogin = false;
    }
  }

  logOffUser() {
    this.userLogged = '';
    this.userType = "client";
    this.page = "initial";
  }

  alterPage(page: string) {
    this.page = page;
  }

  sendUserLogged(userLogged: string){
    userLogged = this.userLogged;
  }
}
