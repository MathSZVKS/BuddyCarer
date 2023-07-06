import { Injectable } from "@angular/core";
import {ReturnValidate} from "../interfaces/ReturnValidate";

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

  validateCPF(cpf: string){
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let remainder = sum % 11;
    let digit = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpf.charAt(9)) !== digit) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    remainder = sum % 11;
    digit = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpf.charAt(10)) !== digit) {
      return false;
    }

    return true;
  }

  validatePassword(password: string): ReturnValidate {
    let retorno: ReturnValidate = {
      msg: '',
      valid: false
    };
  
    if (password.length < 8) {
      retorno.msg = 'Senha Inválida: A senha precisa ter pelo menos 8 caracteres';
      retorno.valid = false;
      return retorno;
    }
  
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    if (!regex.test(password)) {
      retorno.msg = 'Senha Inválida: A senha precisa conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial';
      retorno.valid = false;
      return retorno;
    }
  
    retorno.msg = '';
    retorno.valid = true;
    return retorno;
  }
}
