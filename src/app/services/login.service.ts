import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: string, password: string){
    let logged;

    if(user == 'admin' && password == 'admin'){
      logged = true;
    }else{
      logged = false;
    }
    return logged;
  }
}
