import { Component, Output, EventEmitter, Input } from "@angular/core";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent {
  @Output() loginEvent = new EventEmitter<boolean>();
  @Output() logOffUser = new EventEmitter<string>();
  @Output() openUserPage = new EventEmitter<string>();
  @Input() userLogged = "";

  logged = false;
  faPowerOff = faPowerOff;

  verifyLogin() {
    if (this.userLogged == "") {
      this.logged = true;
      this.loginEvent.emit(this.logged);
    } else {
      this.openUserPage.emit('user');
    }
  }

  logOff() {
    this.logged = false;
    this.userLogged = "";
    this.logOffUser.emit("");
  }
}
