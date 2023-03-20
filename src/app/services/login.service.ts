import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: string, password: string){
    if(user == 'admin' && password == 'admin'){
      return alert('logado');
    }else{
      return alert('nao logado');
    }
  }
}
