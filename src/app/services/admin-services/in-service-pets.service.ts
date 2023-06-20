import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InServicePetsService {

  constructor() { }

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
        historia: "Barney, um cachorro leal e brincalhão, trouxe alegria para sua nova família. Com sua energia contagiante e natureza amorosa, ele se tornou um companheiro inseparável. Barney era amigável com outros animais e seu coração generoso encantava a todos. Sua presença trazia conforto e diversão para a casa, mostrando o poder dos laços entre humanos e animais de estimação. Barney, o cãozinho especial, deixou memórias felizes e um legado de amor e alegria."
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
        historia: "Ted, um adorável cachorro, trouxe alegria para sua família. Com seu espírito brincalhão e amor incondicional, ele se tornou um companheiro fiel. Ted era amigável com todos e seu carinho contagiava a todos ao seu redor. Sua presença trouxe felicidade e calor para o lar, mostrando o poder especial de um cachorro na vida das pessoas."
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
        historia: "Nero, um cachorro carinhoso, trouxe felicidade para sua família. Com seu temperamento afetuoso e leal, ele se tornou um companheiro inseparável. Nero era amigável e seu amor incondicional deixava uma marca duradoura nos corações de todos. Sua presença trazia alegria e amor, destacando o poder dos animais de estimação em nossas vidas."
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
        nascimento: "★ 04/01/2012",
        historia: "Katie, uma gatinha encantadora, trouxe alegria para sua família. Com seu jeito doce e cativante, ela se tornou uma companheira amorosa. Katie era amigável e seu carinho trazia conforto e felicidade para todos ao seu redor. Sua presença iluminava a casa e demonstrava o poder especial dos animais de estimação em nossas vidas."
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
        historia: "Atom, um gatinho adorável, trouxe alegria para sua família. Com sua energia contagiante e olhos curiosos, ele se tornou um companheiro cativante. Atom era amigável e seu carinho afetuoso deixava todos encantados. Sua presença iluminava o ambiente, mostrando o poder especial dos animais de estimação em nossas vidas."
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
        nascimento: "★ 06/01/2012",
        historia: "Jasmin, uma cadela amorosa, trouxe felicidade para sua família. Com sua natureza gentil e olhos expressivos, ela se tornou uma companheira fiel. Jasmin era amigável e seu carinho sincero alegrava a todos ao seu redor. Sua presença iluminava a casa, destacando o poder especial dos animais de estimação em nossas vidas."
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
        nascimento: "★ 07/01/2012",
        historia: "Petunia, uma cadela encantadora, trouxe alegria para sua família. Com seu temperamento amoroso e olhar afetuoso, ela se tornou uma companheira leal. Petunia era amigável e seu carinho genuíno aquecia os corações de todos ao seu redor. Sua presença iluminava o lar, revelando o poder especial dos animais de estimação em nossas vidas."
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
        historia: "Isabel, uma gatinha adorável, trouxe felicidade para sua família. Com seu olhar meigo e personalidade encantadora, ela se tornou uma companheira afetuosa. Isabel era amigável e seu carinho sincero aquecia os corações de todos ao seu redor. Sua presença iluminava a casa, revelando o poder especial dos animais de estimação em nossas vidas."
      },
    ];
    return myPets;
  }
}
