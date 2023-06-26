import { Component, Output, EventEmitter, Input } from "@angular/core";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

interface UserData {
  image: string,
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  address: Address | null;
  email: string;
  receiveNews: boolean | null;
  birthDay: string;
  phone: Phone | null;
  cpf: string;
  personType: string | null;
  cardNumber: number;
  cardName: string;
  flag: string;
  securityCode: string | null;
  age: number;
  authorities: Authority[] | null;
  tokens: Token[] | null;
  role: String;
}

interface Address {
  street: string;
  houseNumber: number;
  zipCode: string;
  reference: string;
  city: string;
  state: string;
}

interface Phone {
  dd: number;
  number: number;
}

interface Authority {
  authority: string;
}

interface Token {
  id: number;
  token: string;
  tokenType: string;
  revoked: boolean;
  expired: boolean;
}

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
  @Input() userLogged: UserData = {
    image: "https://friconix.com/png/fi-cnsuxl-user-circle.png",
    id: 0,
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    address: {
      street: "",
      houseNumber: 0,
      zipCode: "",
      reference: "",
      city: "",
      state: "",
    },
    email: "",
    receiveNews: true,
    birthDay: "",
    phone: {
      dd: 0,
      number: 0,
    },
    cpf: "",
    personType: "",
    cardNumber: 0,
    cardName: "",
    flag: "",
    securityCode: "",
    age: 2,
    authorities: null,
    tokens: null,
    role: "",
  };

  logged = false;
  faPowerOff = faPowerOff;
  faExpand = faExpand;

  verifyLogin() {
    this.alterBackgroundColor.emit("#1f1d2b");
    if (this.userLogged.username == '') {
      this.logged = true;
      this.loginEvent.emit(this.logged);
    } else {
      this.openUserPage.emit("user");
      console.log(this.userLogged);
    }
  }

  logOff() {
    this.alterBackgroundColor.emit("#1f1d2b");
    this.logged = false;
    this.userLogged.image = 'https://friconix.com/png/fi-cnsuxl-user-circle.png';
    this.logOffUser.emit();
  }
}
