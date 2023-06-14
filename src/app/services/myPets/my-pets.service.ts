import { Injectable } from "@angular/core";
import { Expensives } from "src/app/interfaces/expensives";
import { Procedimento } from "src/app/interfaces/procedimento";

@Injectable({
  providedIn: "root",
})
export class MyPetsService {
  constructor() {}

  returnAtualDate(){
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataAtual.getFullYear();
    var dataFormatada = dia + '/' + mes + '/' + ano;
    return dataFormatada;
  }

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
        nascimento: "★ 01/01/2012",
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
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
        morte: "✟ " + this.returnAtualDate(),
        historia: "Isabel, uma gatinha adorável, trouxe felicidade para sua família. Com seu olhar meigo e personalidade encantadora, ela se tornou uma companheira afetuosa. Isabel era amigável e seu carinho sincero aquecia os corações de todos ao seu redor. Sua presença iluminava a casa, revelando o poder especial dos animais de estimação em nossas vidas."
      },
    ];
    return myPets;
  }

  getMemorialPets() {
    let myPets = [
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
        morte: "✟ 12/12/2020",
        historia: "Luty, um filhote de cachorro adorável, foi resgatado de um abrigo. Com sua energia contagiante, ele trouxe alegria para sua família adotiva. Luty era leal, amigável e adorava explorar o mundo ao seu redor. Sua presença iluminava os dias e seu amor incondicional era um presente especial. Ele ensinou o valor da felicidade simples e do vínculo entre humanos e animais de estimação. Luty, o cãozinho cheio de vida, deixou uma marca indelével em todos que o conheceram."
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
        morte: "✟ 06/08/2013",
        historia: "Marry, uma gatinha resgatada, encantou sua nova família com sua curiosidade e carinho. Ela era independente, mas adorava receber afeto e ronronar em seus colos. Marry era uma caçadora habilidosa e sua natureza sociável a tornava amiga de todos. Sua presença trazia alegria e magia para cada dia, mostrando o poder dos laços entre humanos e animais de estimação. Marry, a gatinha especial, deixou uma marca indelével com seu afeto e sua personalidade cativante."
      }
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

  getVaccines(petName: string){
    let longTime = "rgb(253, 140, 142)";
    let shortTime = "rgb(92 164 183)";
    let late = "rgb(128 91 145)";

    let myPetCare: {
      vaccine: string;
      completed: boolean;
      cardColor: string,
      dateToFinish: string,
      term: string
    }[] = [];

    switch (petName) {
      case "Barnei":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Ted":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Nero":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Katie":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Atom":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Jasmim":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Petunia":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
      case "Isabel":
        myPetCare = [
          {
            vaccine: "Tetragenica",
            completed: true,
            cardColor: late,
            dateToFinish: "05/04/2023",
            term: 'late'
          },
          {
            vaccine: "Anti Rábica",
            completed: false,
            cardColor: longTime,
            dateToFinish: "20/04/2023",
            term: 'longTime'
          },
          {
            vaccine: "Cinomose",
            completed: false,
            cardColor: shortTime,
            dateToFinish: "10/04/2023",
            term: 'shortTime'
          },
          {
            vaccine: "Hepatite",
            completed: false,
            cardColor: longTime,
            dateToFinish: "30/04/2023",
            term: 'longTime'
          },
        ];
        break;
    }
    return myPetCare;
  }

  getExpensives(){
    let expensives: Expensives[] =  [
      {
        nome: 'Barnei',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Nero',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Katie',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Atom',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Isabel',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Jasmim',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Petunia',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Ted',
        procedimentos: [
          {
            nome: 'Tosa Higiênica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://static.wixstatic.com/media/0b78d1_c70b8b2ad2a7409d97de78a76d95e8be~mv2.png/v1/fill/w_424,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vet%20Gru.png',
            descricao: 'A tosa higiênica em um animal de estimação é um procedimento que envolve o corte de pelos de determinadas áreas do corpo do animal para mantê-lo limpo e saudável. Essas áreas incluem a região em torno dos olhos, boca, ouvidos, genitais e ânus. Durante a tosa higiênica, o pelo nessas áreas é aparado para evitar que fiquem muito compridos e acumulem sujeira, bactérias e parasitas. Isso ajuda a prevenir infecções e irritações na pele do animal. Também pode ser realizado um corte de unhas e limpeza de ouvidos. É importante lembrar que a tosa higiênica não deve ser feita apenas por motivos estéticos, mas sim como parte da rotina de cuidados com a saúde e bem-estar do animal. O procedimento deve ser realizado por um profissional capacitado e com os equipamentos adequados para evitar possíveis ferimentos ao pet',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Banho Quentim',
            valor:'R$ 120,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://assinatura.petlandbrasil.com.br/img/banhos-ilimitados.png',
            descricao: 'Um banho animal é um procedimento de higiene em que o animal de estimação é lavado com água e xampu específico para animais. O banho ajuda a remover sujeira, pelos soltos, odores e parasitas externos da pele e pelagem do animal. O banho animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas, escovação dos dentes e aplicação de produtos para hidratação e proteção da pele e do pelo. É importante ressaltar que a frequência do banho deve ser adequada ao tipo de pelagem e à rotina do animal, para evitar ressecamento da pele e queda excessiva de pelos. O banho animal pode ser realizado em casa, mas é recomendado que seja feito por um profissional em um pet shop ou clínica veterinária, para garantir a segurança e conforto do animal durante o procedimento.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Vacina Tetragenica',
            valor:'R$ 100,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://animedpvh.com.br/wp-content/uploads/2022/12/petvacinas.webp',
            descricao: 'É uma vacina que oferece proteção contra quatro tipos de vírus ou bactérias diferentes. Por exemplo, a vacina tetravalente pode oferecer proteção contra quatro cepas diferentes do vírus da gripe, ou contra quatro tipos diferentes de bactérias que causam meningite. A vacina tetravalente é uma das formas de prevenir certas doenças infecciosas e é administrada por meio de uma injeção. É importante consultar um profissional de saúde para saber quais as vacinas recomendadas para cada faixa etária e situação específica.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Tosa Completa',
            valor:'R$ 120,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://vita24h.com.br/wp-content/uploads/2023/02/petland-banho.png',
            descricao: 'A tosa animal é um procedimento de cuidado com a pelagem de animais de estimação, como cães e gatos. Ela pode ser realizada por diversos motivos, como estética, conforto e higiene. Durante a tosa animal, a pelagem do animal é aparada, cortada ou raspada em determinadas áreas do corpo, de acordo com as preferências do proprietário ou a necessidade do animal. Algumas técnicas de tosa são específicas para determinadas raças, como a tosa leão para cães da raça poodle, por exemplo. Além do corte de pelos, a tosa animal também pode incluir outros cuidados, como a limpeza das orelhas, corte das unhas e limpeza dos dentes. É importante lembrar que a tosa deve ser realizada por um profissional capacitado e com os equipamentos adequados, para evitar possíveis ferimentos ao animal.',
            status: 'Pago',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
    ]
    
    return expensives
  }

  getExpensivesToPay(){
    let expensivesToPay: Expensives[] =  [
      {
        nome: 'Barnei',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(153 81 81)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
            
          }
        ]
      },
      {
        nome: 'Nero',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(81 153 125)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Katie',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(136 81 153)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Atom',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(112 103 114)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Isabel',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(196 191 198)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Jasmim',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(153 81 126)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Petunia',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(102 64 64)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
      {
        nome: 'Ted',
        procedimentos: [
          {
            nome: 'Castração',
            valor:'R$ 500,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://vetmedcarelavras.com.br/wp-content/uploads/2022/07/hospital_veterinario_medcare_lavras_dra_tati_godinho_005-1.png',
            descricao: 'A castração animal é um procedimento cirúrgico que consiste na remoção dos órgãos reprodutores de animais, como cães e gatos. No caso dos machos, é removido os testículos, enquanto que nas fêmeas, é removido os ovários e, em alguns casos, o útero. A castração é realizada por diversos motivos, como o controle populacional de animais, prevenção de doenças, redução de comportamentos indesejáveis, entre outros. Entre os benefícios da castração estão a redução da agressividade, diminuição de riscos de doenças relacionadas ao sistema reprodutor, prevenção de tumores mamários nas fêmeas, além de ajudar a controlar a superpopulação de animais abandonados. A castração deve ser realizada por um médico veterinário e requer um cuidado especial no período pós-operatório, como evitar atividades físicas intensas e manter o animal em repouso. É importante consultar um profissional de saúde para saber se a castração é indicada para cada animal, além de esclarecer dúvidas e receber informações sobre o procedimento e cuidados necessários.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          },
          {
            nome: 'Limpeza Corporal',
            valor:'R$ 220,00 ',
            cardColor: "rgb(81 98 153)",
            imagemServico: 'https://campanha.condor.com.br/wp-content/uploads/2022/07/pets.png',
            descricao: 'A limpeza corporal em animais é uma rotina de cuidados que envolve a higiene da pele, pelo, ouvido, olhos, unhas e dentes do animal. A limpeza corporal é essencial para a saúde e bem-estar do animal, pois ajuda a prevenir doenças e infecções e também mantém o animal limpo e confortável. A rotina de limpeza corporal varia de acordo com o tipo de animal, raça, idade, estilo de vida e outras características específicas. Por exemplo, algumas raças de cães precisam de banhos regulares e escovação frequente do pelo, enquanto outros podem precisar de cuidados especiais para evitar problemas de pele. Alguns dos cuidados mais comuns na limpeza corporal animal incluem banhos regulares com shampoo próprio para animais, escovação do pelo para remover pelos mortos e emaranhados, limpeza dos ouvidos com soluções específicas para evitar acúmulo de cera, corte de unhas para evitar que cresçam demais e limpeza dos dentes para prevenir problemas dentários e mau hálito. É importante lembrar que a limpeza corporal deve ser realizada com produtos e técnicas adequadas para cada tipo de animal, e é recomendável consultar um veterinário para receber orientações específicas sobre a rotina de cuidados de cada animal de estimação.',
            status: 'Aguardando Pagamento',
            avaliacao: 3,
            parcelas: '4 x de R$ 20,00',
            tipoPagamento: 'Cartão de Crédito',
            dataPagamento: '25/04/2023'
          }
        ]
      },
    ]
    
    return expensivesToPay
  }
}
