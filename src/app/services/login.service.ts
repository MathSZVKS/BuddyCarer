import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: string, password: string){
    let logged = {};

    if(user == 'admin' && password == 'admin' || user == 'client' && password == 'client'){
      logged = { "permissionAccess": true, "user": user };
    }else{
      logged = { "permissionAccess": false, "user": '' }
    }
    return logged;
  }
}
