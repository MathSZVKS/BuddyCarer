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
        imagem: 'https://www.petdaterra.com.br/wp-content/uploads/2021/05/cachorro-raca-shih-tzu-pet-da-terra.png',
        cardColor: 'rgb(153 81 81)'
      },
      {
        nome: 'Ted',
        imagem: 'https://www.dogbible.com/_ipx/f_png,q_80,fit_cover,s_1536x1536/dogbible/i/en/shih-tzu.png',
        cardColor: 'rgb(81 98 153)'
      },
      {
        nome: 'Nero',
        imagem: 'https://www.pngplay.com/wp-content/uploads/13/Poodle-Download-Free-PNG.png',
        cardColor: 'rgb(81 153 125)'
      }
    ]
    return myPets; 
  }
}
