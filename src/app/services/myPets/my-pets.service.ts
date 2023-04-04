import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MyPetsService {
  constructor() {}

  getMyPets() {
    let myPets = [
      {
        nome: "Barnei",
        imagem:
          "https://www.petdaterra.com.br/wp-content/uploads/2021/05/cachorro-raca-shih-tzu-pet-da-terra.png",
        cardColor: "rgb(153 81 81)",
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
      },
      {
        nome: "Ted",
        imagem:
          "https://www.dogbible.com/_ipx/f_png,q_80,fit_cover,s_1536x1536/dogbible/i/en/shih-tzu.png",
        cardColor: "rgb(81 98 153)",
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
      },
      {
        nome: "Nero",
        imagem:
          "https://www.pngplay.com/wp-content/uploads/13/Poodle-Download-Free-PNG.png",
        cardColor: "rgb(81 153 125)",
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
      },
      {
        nome: "Katie",
        imagem:
          "https://www.petdaterra.com.br/wp-content/uploads/2021/05/gato-raca-bengal-pet-da-terra.png",
        cardColor: "rgb(136 81 153)",
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
      },
      {
        nome: "Atom",
        imagem: "https://www.biofreshpet.com.br/calc/assets/images/cat-2.png",
        cardColor: "rgb(112 103 114)",
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
      },
      {
        nome: "Jasmim",
        imagem: "https://images-ra.adoptapet.com/seo/1/h/111_h.png",
        cardColor: "rgb(153 81 126)",
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
      },
      {
        nome: "Petunia",
        imagem:
          " https://landingpage.petz.com.br/vira-lata-caramelo/images/dog.png",
        cardColor: "rgb(102 64 64)",
        raca: "Vira-Lata",
        cor: "Marrom",
        idade: "11 Anos",
        sexo: "Fêmea",
        comportamento: "Dócil somente com familiares",
        adestrado: "Não Adestrado",
        castrado: "Não Castrada",
        condicaoEspecial: "Indestrutivel",
        peso: "2,50 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "Latinhas",
      },
      {
        nome: "Isabel",
        imagem:
          "https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
        cardColor: "rgb(196 191 198)",
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
      },
    ];
    return myPets;
  }

  getCare(petName: string) {
    let myPetCare: {
      care: string;
      careStatus: string;
      carePercentagem: string;
    }[] = [];

    switch (petName) {
      case "Barnei":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Ted":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Nero":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Katie":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Atom":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Jasmim":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Petunia":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
      case "Isabel":
        myPetCare = [
          {
            care: "Tosa Higiênica",
            careStatus: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "60",
          },
          {
            care: "Banho Quentinho",
            careStatus:
              petName +
              " está aguardando finalizar a tosa para começar seu banho",
            carePercentagem: "10",
          },
        ];
        break;
    }
    return myPetCare;
  }
}
