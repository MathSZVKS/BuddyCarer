import { Component, Output, EventEmitter, Input } from "@angular/core";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent {
  @Output() loginEvent = new EventEmitter<boolean>();
  @Output() openUserPage = new EventEmitter<string>();
  @Output() logOffUser = new EventEmitter();
  @Output() alterBackgroundColor = new EventEmitter<string>();
  @Input() userLogged = "";

  logged = false;
  faPowerOff = faPowerOff;
  faExpand = faExpand;

  verifyLogin() {
    this.alterBackgroundColor.emit("#1f1d2b");
    if (this.userLogged == "") {
      this.logged = true;
      this.loginEvent.emit(this.logged);
    } else {
      this.openUserPage.emit("user");
    }
  }

  logOff() {
    this.alterBackgroundColor.emit("#1f1d2b");
    this.logged = false;
    this.userLogged = "";
    this.logOffUser.emit();
  }
}
