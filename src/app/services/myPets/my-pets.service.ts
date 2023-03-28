import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPetsService {

  constructor() { }

  getMyPets(){
    let myPets = [
      {
        nome: 'Barnei',
        imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
      },
      {
        nome: 'Ted',
        imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
      },
      {
        nome: 'Nero',
        imagem: 'https://images.vexels.com/media/users/3/210964/isolated/preview/9b8f69a5180ae3b60f65d65612db7bda-cachorro-sorrindo-feliz-ilustracao.png'
      }
    ]
    return myPets; 
  }
}
