import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  validateEmail(email: string) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email)) {
      return true; 
    } else {
      return false; 
    }
  }
}
