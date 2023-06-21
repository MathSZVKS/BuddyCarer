import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InServicePetsService {
  constructor() {}

  getInServicePets() {
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
        nascimento: "★ 01/01/2012",
        historia:
          "Barney, um cachorro leal e brincalhão, trouxe alegria para sua nova família. Com sua energia contagiante e natureza amorosa, ele se tornou um companheiro inseparável. Barney era amigável com outros animais e seu coração generoso encantava a todos. Sua presença trazia conforto e diversão para a casa, mostrando o poder dos laços entre humanos e animais de estimação. Barney, o cãozinho especial, deixou memórias felizes e um legado de amor e alegria.",
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
        nascimento: "★ 02/01/2012",
        historia:
          "Ted, um adorável cachorro, trouxe alegria para sua família. Com seu espírito brincalhão e amor incondicional, ele se tornou um companheiro fiel. Ted era amigável com todos e seu carinho contagiava a todos ao seu redor. Sua presença trouxe felicidade e calor para o lar, mostrando o poder especial de um cachorro na vida das pessoas.",
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
        nascimento: "★ 03/01/2012",
        historia:
          "Nero, um cachorro carinhoso, trouxe felicidade para sua família. Com seu temperamento afetuoso e leal, ele se tornou um companheiro inseparável. Nero era amigável e seu amor incondicional deixava uma marca duradoura nos corações de todos. Sua presença trazia alegria e amor, destacando o poder dos animais de estimação em nossas vidas.",
      },
    ];
    return myPets;
  }

  getAwaitingPets() {
    let myPets = [
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
        nascimento: "★ 07/01/2012",
        historia:
          "Petunia, uma cadela encantadora, trouxe alegria para sua família. Com seu temperamento amoroso e olhar afetuoso, ela se tornou uma companheira leal. Petunia era amigável e seu carinho genuíno aquecia os corações de todos ao seu redor. Sua presença iluminava o lar, revelando o poder especial dos animais de estimação em nossas vidas.",
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
        nascimento: "★ 08/01/2012",
        historia:
          "Isabel, uma gatinha adorável, trouxe felicidade para sua família. Com seu olhar meigo e personalidade encantadora, ela se tornou uma companheira afetuosa. Isabel era amigável e seu carinho sincero aquecia os corações de todos ao seu redor. Sua presença iluminava a casa, revelando o poder especial dos animais de estimação em nossas vidas.",
      },
    ];
    return myPets;
  }

  getAttendedPets() {
    let myPets = [
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
        nascimento: "★ 04/01/2012",
        historia:
          "Katie, uma gatinha encantadora, trouxe alegria para sua família. Com seu jeito doce e cativante, ela se tornou uma companheira amorosa. Katie era amigável e seu carinho trazia conforto e felicidade para todos ao seu redor. Sua presença iluminava a casa e demonstrava o poder especial dos animais de estimação em nossas vidas.",
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
        nascimento: "★ 05/01/2012",
        historia:
          "Atom, um gatinho adorável, trouxe alegria para sua família. Com sua energia contagiante e olhos curiosos, ele se tornou um companheiro cativante. Atom era amigável e seu carinho afetuoso deixava todos encantados. Sua presença iluminava o ambiente, mostrando o poder especial dos animais de estimação em nossas vidas.",
      },
      {
        nome: "Luty",
        imagem:
          "https://images.squarespace-cdn.com/content/v1/5fcf5c11d267866a51a23546/1630427773509-06OY7G6D4ZSMJZ10K9MC/Lecker+bites+newsletter+March.png",
        cardColor: "rgb(141 54 54)",
        raca: "Vira-Lata",
        cor: "Branco",
        idade: "8 Anos",
        sexo: "Fêmea",
        comportamento: "Dócil",
        adestrado: "Não Adestrado",
        castrado: "Não Castrado",
        condicaoEspecial: "Nenhuma",
        peso: "5,00 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "Latinhas",
        nascimento: "★ 01/01/2012",
        historia:
          "Luty, um filhote de cachorro adorável, foi resgatado de um abrigo. Com sua energia contagiante, ele trouxe alegria para sua família adotiva. Luty era leal, amigável e adorava explorar o mundo ao seu redor. Sua presença iluminava os dias e seu amor incondicional era um presente especial. Ele ensinou o valor da felicidade simples e do vínculo entre humanos e animais de estimação. Luty, o cãozinho cheio de vida, deixou uma marca indelével em todos que o conheceram.",
      },
      {
        nome: "Marry",
        imagem:
          "https://protecaoanimal.curitiba.pr.gov.br/images/gatos-castrados.png",
        cardColor: "rgb(99 54 141)",
        raca: "Vira-Lata",
        cor: "Rajadinha",
        idade: "17 Anos",
        sexo: "Fêmea",
        comportamento: "Dócil",
        adestrado: "Adestrado",
        castrado: "Castrado",
        condicaoEspecial: "Nenhuma",
        peso: "2,00 Kg",
        porte: "Pequeno",
        expectativaVida: "Infinito",
        origemRaca: "Latinhas",
        nascimento: "★ 14/10/2006",
        historia:
          "Marry, uma gatinha resgatada, encantou sua nova família com sua curiosidade e carinho. Ela era independente, mas adorava receber afeto e ronronar em seus colos. Marry era uma caçadora habilidosa e sua natureza sociável a tornava amiga de todos. Sua presença trazia alegria e magia para cada dia, mostrando o poder dos laços entre humanos e animais de estimação. Marry, a gatinha especial, deixou uma marca indelével com seu afeto e sua personalidade cativante.",
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
      },
    ];
    return myPets;
  }

  GetToDoServices(petName: string) {
    let services: {
      servico: string;
      observacao: string;
      carePercentagem: string;
    }[] = [];

    switch (petName) {
      case "Lucy":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Duda":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Marry":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Luty":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Victor":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Barnei":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Banho Quentinho",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Ted":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Nero":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Katie":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Atom":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Jasmim":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Petunia":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Isabel":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
    }
    return services;
  }

  GetRealizedServices(petName: string) {
    let services: {
      servico: string;
      observacao: string;
      carePercentagem: string;
    }[] = [];

    switch (petName) {
      case "Lucy":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Duda":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Marry":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Luty":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Victor":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Barnei":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Banho Quentinho",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Ted":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Nero":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Katie":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Atom":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Jasmim":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Petunia":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
      case "Isabel":
        services = [
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
          {
            servico: "Tosa Higiênica",
            observacao: petName + " acabou de chegar ao PetShop =)",
            carePercentagem: "0",
          },
        ];
        break;
    }
    return services;
  }
}
