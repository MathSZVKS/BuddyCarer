import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private client: HttpClient) {}
  url:string = 'http://localhost:8080/api/v1/auth';

  login(user: string, password: string) {
   let updateUrl = this.url + "/login";
    let login = {
      username: user,
      password: password
    }
   return this.client.post(updateUrl,login);
  }

  saveUserData() {
    //Aqui preciso enviar o Json com o Objeto de usuário atualizado pro back e pegar o retorno após salvar
    return true;
  }
}
