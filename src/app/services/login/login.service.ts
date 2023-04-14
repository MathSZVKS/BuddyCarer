import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  login(user: string, password: string) {
    let logged = {};

    if (user == "admin" && password == "admin") {
      logged = { permissionAccess: true, user: user, type: "admin", name: "admin", email: "admin@email.com", receiveNews: 'sim', birthDay: '10/10/1999', phone: '9 9939-9999', cpf: '13417803654', typePerson: 'Juridica'};
    } else if (user == "client" && password == "client") {
      logged = { permissionAccess: true, user: user, type: "client", name: "client", email: "client@email.com", receiveNews: 'sim' , birthDay: '10/10/1999', phone: '9 9929 9929', cpf: '12917463515', typePerson: 'Juridica'};
    } else if (user == "matheus" && password == "matheus") {
      logged = { permissionAccess: true, user: user, type: "client", name: "Matheus Sizervinks", email: "matheussizervinks@email.com", receiveNews: 'sim' , birthDay: '24/05/1999', phone: '9 9939 9267', cpf: '1839476354', typePerson: 'Juridica'};
    } else {
      logged = { permissionAccess: false, user: "" };
    }
    return logged;
  }
}
