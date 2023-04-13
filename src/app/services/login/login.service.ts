import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  login(user: string, password: string) {
    let logged = {};

    if (user == "admin" && password == "admin") {
      logged = { permissionAccess: true, user: user, type: "admin", name: "admin", email: "admin@email.com", receiveNews: 'sim' };
    } else if (user == "client" && password == "client") {
      logged = { permissionAccess: true, user: user, type: "client", name: "client", email: "client@email.com", receiveNews: 'sim' };
    } else if (user == "matheus" && password == "matheus") {
      logged = { permissionAccess: true, user: user, type: "client", name: "Matheus Sizervinks", email: "matheussizervinks@email.com", receiveNews: 'sim' };
    } else {
      logged = { permissionAccess: false, user: "" };
    }
    return logged;
  }
}
