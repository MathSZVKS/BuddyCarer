import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor() { }

  getAllDonations() {
    let donations = [
      {
        nome: "Josephine e Snuff",
        imagem: "https://www.br.equilibrio-petfood.com/wp-content/uploads/2022/02/Group-3733.png",
        cardColor: "rgb(159 120 49)",
        raca: "Angorá",
        cor: "Cinza",
        idade: "2 Anos",
        sexo: "Macho",
        comportamento: "Arisco",
        adestrado: "Não Adestrado",
        castrado: "Não Castrado",
        condicaoEspecial: "Rabinho Quebrado",
        peso: "1,50 Kg",
        porte: "Médio",
        expectativaVida: "Infinito",
        origemRaca: "Turquia",
        nivelAdestramento: 2,
        facilidadeCuidado: 4,
        nivelObediencia: 1
      },
      {
        nome: "Duda",
        imagem:
          "https://www.publicdomainpictures.net/pictures/410000/nahled/image-1628407207Cg3.png",
        cardColor: "rgb(42 92 183)",
        raca: "Vira-Lata",
        cor: "Branca",
        idade: "Desconhecido",
        sexo: "Trans",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Castrada",
        condicaoEspecial: "Mochileira",
        peso: "1,50 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "Rua de cima",
        nivelAdestramento: 1,
        facilidadeCuidado: 3,
        nivelObediencia: 3
      },
      {
        nome: "Bartolomeu",
        imagem:
          "https://cdn.pixabay.com/photo/2015/02/20/09/19/cotorro-642966_1280.png",
        cardColor: "rgb(102 151 25)",
        raca: "Shih tzu",
        cor: "Branco",
        idade: "4 Anos",
        sexo: "Macho",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Não Castrado",
        condicaoEspecial: "Nenhuma",
        peso: "5,00 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "China",
        nivelAdestramento: 4,
        facilidadeCuidado: 3,
        nivelObediencia: 5
      },
      {
        nome: "Emily",
        imagem:
          "https://adoletadiversaopet.com.br/wp-content/uploads/2021/09/pngwing.com-13-300x300.png",
        cardColor: "rgb(203 182 197)",
        raca: "Vira-Lata",
        cor: "Rajadinha",
        idade: "3 Anos",
        sexo: "Fêmea",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Castrada",
        condicaoEspecial: "Nenhuma",
        peso: "1,00 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "Latinhas",
        nivelAdestramento: 1,
        facilidadeCuidado: 2,
        nivelObediencia: 1
      },
      {
        nome: "Victor",
        imagem:
          "https://www.dogbible.com/_ipx/f_png,q_80,fit_cover,s_1536x1536/dogbible/i/en/chowchow.png",
        cardColor: "rgb(217 87 48)",
        raca: "Shih tzu",
        cor: "Caramelo",
        idade: "2 Anos",
        sexo: "Macho",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Não Castrado",
        condicaoEspecial: "Nenhuma",
        peso: "5,00 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "China",
        nivelAdestramento: 4,
        facilidadeCuidado: 2,
        nivelObediencia: 5
      },
      {
        nome: "Lucy",
        imagem:
          "https://www.pumpkin.care/wp-content/uploads/2022/11/04_pet_portraits_pretzel.png",
        cardColor: "rgb(209 49 49)",
        raca: "Poodle",
        cor: "Branco",
        idade: "1 Ano",
        sexo: "Macho",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Não Castrado",
        condicaoEspecial: "Autista",
        peso: "5,00 Kg",
        porte: "Médio",
        expectativaVida: "Infinito",
        origemRaca: "Alemanha",
        nivelAdestramento: 2,
        facilidadeCuidado: 3,
        nivelObediencia: 2
      },
      {
        nome: "Denvi",
        imagem: "https://granplus.com.br/calc/assets/images/cat-2.png",
        cardColor: "rgb(169 169 169)",
        raca: "Shih tzu",
        cor: "Café",
        idade: "11 Anos",
        sexo: "Fêmea",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Castrada",
        condicaoEspecial: "Um olinho cego",
        peso: "3,50 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "China",
        nivelAdestramento: 4,
        facilidadeCuidado: 5,
        nivelObediencia: 4
      }
    ];
    return donations;
  }
}
