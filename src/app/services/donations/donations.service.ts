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
        nivelObediencia: 1,
        historia: "Conheça Josephine, uma gata doce e tranquila, e Snuff, um gatinho brincalhão e cheio de energia. Esses dois amigos inseparáveis estão esperando ansiosamente por uma família amorosa que os adote. Com Josephine e Snuff, você terá o equilíbrio perfeito entre doçura e diversão. Eles trarão alegria e amor para sua casa. Adote Josephine e Snuff e descubra a felicidade de ter dois amigos peludos e leais ao seu lado para sempre."
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
        nivelObediencia: 3,
        historia: "Conheça Duda, uma arara radiante e colorida, com penas que brilham como um arco-íris. Ela é uma beleza exótica que está à espera de uma família especial que a adote. Duda é uma arara cheia de personalidade e encanto. Com suas penas vibrantes e plumagem exuberante, Duda é uma verdadeira joia tropical. Ela chama a atenção por onde passa, encantando a todos com sua natureza graciosa e sociável. Duda adora interagir com as pessoas, e sua capacidade de imitar sons e palavras é simplesmente fascinante. No abrigo, Duda é conhecida por sua habilidade em criar um ambiente animado e alegre. Ela é uma verdadeira artista, soltando suas vocalizações musicais e exibindo seu talento em acrobacias impressionantes. Duda é uma companheira divertida e curiosa, sempre pronta para explorar e aprender coisas novas. Se você está em busca de um animal de estimação exótico e cheio de vida, Duda é a escolha perfeita. Ela trará cor e alegria à sua casa, enchendo-a com suas melodias tropicais e suas expressões carinhosas. Adote Duda e descubra a maravilha de ter uma arara encantadora como parte da sua família. Ela será uma companheira vibrante e cativante, trazendo um toque de natureza selvagem para o seu lar."
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
        nivelObediencia: 5,
        historia: "Conheça Bartolomeu, um papagaio charmoso e cativante, com penas coloridas e uma personalidade divertida. Ele é um papagaio extraordinário, esperando ansiosamente por uma família amorosa que o adote. Bartolomeu é um verdadeiro tesouro emplumado. Com suas penas vibrantes e seu bico curvo, Bartolomeu é uma figura impressionante. Ele é conhecido por suas habilidades de imitação, sendo capaz de reproduzir vozes, toques de telefone e até mesmo músicas populares. Sua inteligência e capacidade de aprendizado são fascinantes. Bartolomeu é um papagaio enérgico e brincalhão. Ele adora interagir com as pessoas, soltando suas risadas contagiantes e realizando acrobacias surpreendentes. Ele é um verdadeiro showman, sempre pronto para entreter e encantar seus espectadores. No abrigo, Bartolomeu é uma sensação. Sua personalidade carismática e suas habilidades impressionantes atraem a atenção de todos. No entanto, ele está em busca de uma família que possa oferecer a ele amor, atenção e um ambiente estimulante. Se você está em busca de um animal de estimação que traga risadas e alegria para sua casa, Bartolomeu é a escolha perfeita. Ele será um companheiro divertido e cheio de vida, enchendo seu lar com suas imitações engraçadas e sua natureza extrovertida. Adote Bartolomeu e descubra a maravilha de ter um papagaio encantador como parte de sua família. Ele será um amigo leal e colorido, iluminando seus dias com suas travessuras e conversas animadas."
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
        nivelObediencia: 1,
        historia: "Conheça Emily, uma gatinha adorável e meiga, com olhos expressivos e uma personalidade encantadora. Ela é uma verdadeira joia felina, esperando ansiosamente por uma família amorosa que a adote. Emily é a definição de doçura. Com sua pelagem macia e seus movimentos elegantes, Emily é uma gatinha que chama a atenção por sua delicadeza. Ela adora receber carinhos e ronronar suavemente no colo de seus humanos. Seus olhos brilhantes refletem sua ternura e sua disposição afetuosa. Emily é uma companheira leal e carinhosa. Ela adora brincar com bolinhas de lã, perseguir feixes de luz e se aconchegar em um cantinho aconchegante para tirar suas sonecas. Ela trará tranquilidade e serenidade para o seu lar, envolvendo você em seu amor felino. No abrigo, Emily conquistou a todos com sua natureza amável e sua personalidade dócil. No entanto, ela anseia por um lar permanente, onde possa receber todo o carinho e atenção que merece. Se você está em busca de um animal de estimação gentil e amoroso, Emily é a escolha perfeita. Ela será uma presença reconfortante em sua vida, trazendo calma e alegria para cada momento compartilhado. Adote Emily e descubra a felicidade de ter uma gatinha doce e encantadora como parte de sua família. Ela será uma amiga fiel e amorosa, iluminando seus dias com sua presença cativante."
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
        nivelObediencia: 5,
        historia: "Conheça Victor, um adorável cachorrinho corajoso e brincalhão, com um espírito aventureiro. Ele é um verdadeiro companheiro canino, esperando ansiosamente por uma família que o adote. Victor é um cachorro destemido e cheio de energia. Com seu pelo macio e olhos cheios de curiosidade, Victor é um cachorrinho que chama a atenção por sua aparência encantadora. Ele adora explorar e descobrir novos lugares em busca de diversão e emoção. Victor é conhecido por sua coragem e disposição para brincar, sempre trazendo sorrisos e risadas por onde passa. Victor é um companheiro leal e enérgico. Ele adora brincar de buscar a bola, correr pelo parque e aprender novos truques. Sua disposição alegre e contagiante trará uma atmosfera animada e alegre para sua casa, sempre proporcionando momentos de diversão e felicidade. No abrigo, Victor é admirado por sua personalidade cativante e espírito aventureiro. No entanto, ele anseia por um lar onde possa explorar e receber todo o amor e carinho que merece. Se você está em busca de um animal de estimação cheio de energia e diversão, Victor é a escolha perfeita. Ele será seu companheiro de aventuras, pronto para acompanhá-lo em caminhadas, trilhas e em todas as suas atividades ao ar livre. Adote Victor e descubra a alegria de ter um cachorrinho aventureiro e brincalhão como parte de sua família. Ele será um amigo fiel e enérgico, trazendo diversão e alegria para cada momento compartilhado."
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
        nivelObediencia: 2,
        historia: "Conheça Lucy, uma cadela encantadora e leal, com olhos ternos e uma personalidade cativante. Ela é uma verdadeira amiga de quatro patas, esperando ansiosamente por uma família amorosa que a adote. Lucy é uma cadela doce e afetuosa. Com seu pelo macio e sua expressão gentil, Lucy é uma cadela que conquista corações. Ela adora receber carinhos e retribuir com lambidas cheias de amor. Seus olhos brilhantes transmitem uma gratidão profunda por qualquer atenção e afeto que recebe. Lucy é uma companheira leal e amorosa. Ela adora passear, correr ao seu lado e explorar o mundo ao ar livre. Sua disposição serena e pacífica trará tranquilidade para sua casa, envolvendo você em seu afeto caloroso. No abrigo, Lucy é admirada por sua natureza amável e seu temperamento dócil. No entanto, ela anseia por um lar permanente, onde possa receber todo o amor, cuidado e carinho que merece. Se você está em busca de um animal de estimação amoroso e fiel, Lucy é a escolha perfeita. Ela será uma presença reconfortante em sua vida, trazendo alegria e afeto para cada momento compartilhado. Adote Lucy e descubra a felicidade de ter uma cadela doce e encantadora como parte de sua família. Ela será uma amiga leal e amorosa, iluminando seus dias com sua presença afetuosa e seu amor incondicional."
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
        nivelObediencia: 4,
        historia: "Conheça Denvi, um gatinho adorável e brincalhão, com olhos curiosos e uma personalidade encantadora. Ele é um verdadeiro amigo felino, esperando ansiosamente por uma família amorosa que o adote. Denvi é um gatinho cheio de energia e diversão. Com seu pelo macio e sua aparência cativante, Denvi é um gatinho que atrai atenção por onde passa. Ele adora explorar cada cantinho da casa, investigar objetos intrigantes e se divertir com brinquedos coloridos. Denvi é conhecido por suas travessuras e sua natureza brincalhona, sempre trazendo alegria e risadas. Denvi é um companheiro leal e curioso. Ele adora brincar com bolinhas de lã, perseguir feixes de luz e se aconchegar em lugares confortáveis para tirar suas sonecas. Sua disposição divertida e animada trará energia e entusiasmo para o seu lar, criando momentos cheios de diversão e felicidade. No abrigo, Denvi é amado por sua personalidade encantadora e seu espírito brincalhão. No entanto, ele anseia por um lar onde possa explorar, receber atenção e ser amado para sempre. Se você está em busca de um animal de estimação cheio de vida e brincadeiras, Denvi é a escolha perfeita. Ele será seu companheiro de diversão, sempre pronto para brincar e se envolver em travessuras animadas. Adote Denvi e descubra a alegria de ter um gatinho adorável e brincalhão como parte de sua família. Ele será um amigo fiel e entusiasmado, enchendo seus dias com sua energia contagiante e seu amor incondicional."
      }
    ];
    return donations;
  }
}
