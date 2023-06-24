import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RegisterService {

  url:string = 'http://localhost:8080/api/v1/auth'
  constructor(private client:HttpClient) {}

  //Aqui será necessário fazer todas as validações no Back se o usuário já existe ou não
  register(userToRegister: object) {
  const updateUrl = this.url + '/register';
    return this.client.post(updateUrl,userToRegister);
  }
  
}
