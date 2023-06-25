import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  url: string = "http://localhost:8080/api/v1/auth";
  constructor(private client: HttpClient) {}

  register(userToRegister: object) {
    const updateUrl = this.url + "/register";
    return this.client.post(updateUrl, userToRegister);
  }

  registerPet(petToRegister: object) {
    const updateUrl = this.url + "/petRegister";
    return this.client.post(updateUrl, petToRegister);
  }
}
