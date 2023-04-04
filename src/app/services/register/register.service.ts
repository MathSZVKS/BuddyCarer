import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor() {}

  //Aqui será necessário fazer todas as validações no Back se o usuário já existe ou não
  register(userToRegister: object) {
    if (userToRegister != null) {
      return "registered";
    } else {
      return "notRegistered";
    }
  }
}
