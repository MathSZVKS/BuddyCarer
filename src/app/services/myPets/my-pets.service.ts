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
        cardColor: 'rgb(153 81 81)',
        raca: 'Shih tzu',
        cor: 'Branco',
        idade: '4 Anos',
        comportamento: 'Dócil',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Nenhuma',
        peso: '5,00 Kg',
        porte: 'Pequeno',
        expectativaVida: 'infinito',
        origemRaca: 'China'
      },
      {
        nome: 'Ted',
        imagem: 'https://www.dogbible.com/_ipx/f_png,q_80,fit_cover,s_1536x1536/dogbible/i/en/shih-tzu.png',
        cardColor: 'rgb(81 98 153)',
        raca: 'Shih tzu',
        cor: 'Caramelo',
        idade: '2 Anos',
        comportamento: 'Dócil',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Nenhuma',
        peso: '5,00 Kg',
        porte: 'Pequeno',
        expectativaVida: 'infinito',
        origemRaca: 'China'
      },
      {
        nome: 'Nero',
        imagem: 'https://www.pngplay.com/wp-content/uploads/13/Poodle-Download-Free-PNG.png',
        cardColor: 'rgb(81 153 125)',
        raca: 'Poodle',
        cor: 'Branco',
        idade: '1 Ano',
        comportamento: 'Dócil',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Autista',
        peso: '5,00 Kg',
        porte: 'Médio',
        expectativaVida: 'infinito',
        origemRaca: 'Alemanha'
      },
      {
        nome: 'Katie',
        imagem: 'https://www.petdaterra.com.br/wp-content/uploads/2021/05/gato-raca-bengal-pet-da-terra.png',
        cardColor: 'rgb(136 81 153)',
        raca: 'Vira-Lata',
        cor: 'Rajadinha',
        idade: '3 Anos',
        comportamento: 'Dócil',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Nenhuma',
        peso: '1,00 Kg',
        porte: 'Pequeno',
        expectativaVida: 'infinito',
        origemRaca: 'Latinhas'
      },
      {
        nome: 'Atom',
        imagem: 'https://www.biofreshpet.com.br/calc/assets/images/cat-2.png',
        cardColor: 'rgb(112 103 114)',
        raca: 'Angorá',
        cor: 'Cinza',
        idade: '2 Anos',
        comportamento: 'Arisco',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Rabinho Quebrado',
        peso: '1,50 Kg',
        porte: 'Médio',
        expectativaVida: 'infinito',
        origemRaca: 'Turquia'
      },
      {
        nome: 'Jasmim',
        imagem: 'https://images-ra.adoptapet.com/seo/1/h/111_h.png',
        cardColor: 'rgb(153 81 126)',
        raca: 'Shih tzu',
        cor: 'Café',
        idade: '11 Anos',
        comportamento: 'Dócil',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Um olinho cego',
        peso: '3,50 Kg',
        porte: 'Pequeno',
        expectativaVida: 'infinito',
        origemRaca: 'China'
      },
      {
        nome: 'Petunia',
        imagem: ' https://landingpage.petz.com.br/vira-lata-caramelo/images/dog.png',
        cardColor: 'rgb(102 64 64)',
        raca: 'Vira-Lata',
        cor: 'Marrom',
        idade: '11 Anos',
        comportamento: 'Dócil somente com familiares',
        adestrado: 'Não Adestrado',
        condicaoEspecial: 'Indestrutivel',
        peso: '2,50 Kg',
        porte: 'Pequeno',
        expectativaVida: 'infinito',
        origemRaca: 'Latinhas'
      }
    ]
    return myPets;
  }
}
