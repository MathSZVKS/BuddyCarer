import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DonationsService {
  constructor() {}

  getTermsDonation() {
    return (
      "Eu, doravante referido como Adotante, declaro que estou ciente das responsabilidades e compromissos envolvidos na adoção de um pet e, por meio deste documento, assumo total responsabilidade pela saúde, bem-estar e cuidados adequados do animal adotado." +
      " 1. Compromisso de Cuidados:" +
      " 1.1. Comprometo-me a oferecer alimentação adequada e de qualidade, respeitando as necessidades nutricionais do pet." +
      " 1.2. Comprometo-me a fornecer água limpa e fresca diariamente." +
      " 1.3. Comprometo-me a prover abrigo adequado, confortável e seguro para o pet, proporcionando um ambiente adequado às suas necessidades." +
      " 1.4. Comprometo-me a garantir atendimento médico-veterinário regular, incluindo vacinação, desparasitação e consultas de rotina." +
      " 1.5. Comprometo-me a zelar pela higiene do pet, mantendo-o limpo e cuidando de sua pelagem, unhas e dentes." +
      " 1.6. Comprometo-me a oferecer atividades físicas e mentais adequadas ao pet, estimulando-o e proporcionando um ambiente enriquecedor." +
      " 1.7. Comprometo-me a dar atenção e afeto ao pet, proporcionando-lhe interação social e estando presente em sua vida." +
      " 2. Bem-Estar e Segurança:" +
      " 2.1. Comprometo-me a manter o pet em um ambiente seguro, livre de perigos e riscos." +
      " 2.2. Comprometo-me a mantê-lo identificado com plaquinha de identificação contendo meu nome e telefone para contato." +
      " 2.3. Comprometo-me a não submeter o pet a maus-tratos, abuso físico ou emocional, garantindo seu bem-estar e respeitando sua integridade." +
      " 3. Esterilização:" +
      " 3.1. Comprometo-me a esterilizar o pet, a menos que haja recomendação médica-veterinária específica contrária, com o objetivo de evitar a reprodução descontrolada e contribuir para o controle populacional." +
      " 4. Compromisso de Permanência:" +
      " 4.1. Comprometo-me a não abandonar o pet sob nenhuma circunstância." +
      " 4.2. Em caso de impossibilidade de continuar cuidando do pet, comprometo-me a buscar uma nova família responsável por meio de um processo de adoção seguro e adequado." +
      " 5. Conscientização:" +
      " 5.1. Comprometo-me a educar-me sobre as necessidades específicas da espécie e raça do pet adotado, buscando informações e orientações de profissionais qualificados." +
      " 5.2. Comprometo-me a agir de acordo com a legislação e regulamentos aplicáveis relacionados à posse responsável de animais de estimação." +
      "Ao assinar este Termo de Responsabilidade, declaro que estou ciente e comprometido(a) com todas as disposições mencionadas acima. Reconheço que o não cumprimento dessas responsabilidades pode resultar em consequências legais e na perda da guarda do pet."
    );
  }

  getAllDonations() {
    let donations = [
      {
        nome: "Josephine e Snuff",
        imagem:
          "https://www.br.equilibrio-petfood.com/wp-content/uploads/2022/02/Group-3733.png",
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
        historia:
          "Conheça Josephine, uma gata doce e tranquila, e Snuff, um gatinho brincalhão e cheio de energia. Esses dois amigos inseparáveis estão esperando ansiosamente por uma família amorosa que os adote. Com Josephine e Snuff, você terá o equilíbrio perfeito entre doçura e diversão. Eles trarão alegria e amor para sua casa. Adote Josephine e Snuff e descubra a felicidade de ter dois amigos peludos e leais ao seu lado para sempre.",
        imagem1:
          "https://t2.ea.ltmcdn.com/pt/posts/1/5/4/6_gato_exotico_23451_5_600.jpg",
        imagem2:
          "https://p1.pxfuel.com/preview/872/84/981/cat-red-cute-mackerel.jpg",
        imagem3:
          "https://www.petz.com.br/blog/wp-content/uploads/2022/01/cruzamento-de-gato-persa-com-angora-interna.jpg",
        imagem4:
          "https://casaeconstrucao.org/wp-content/uploads/2020/07/gato-persa-laranja.jpg",
        imagem5:
          "https://i0.statig.com.br/bancodeimagens/f5/2h/j2/f52hj23zurm8xdw4kzubyvbqn.jpg",
        imagem6:
          "https://image.cachorrogato.com.br/thumb/800/600/1/imagens/original/imagem115.jpg",
        imagem7:
          "https://t2.ea.ltmcdn.com/pt/posts/5/2/3/o_que_e_um_gato_vira_lata_21325_0_600.jpg",
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
        historia:
          "Conheça Duda, uma arara radiante e colorida, com penas que brilham como um arco-íris. Ela é uma beleza exótica que está à espera de uma família especial que a adote. Duda é uma arara cheia de personalidade e encanto. Com suas penas vibrantes e plumagem exuberante, Duda é uma verdadeira joia tropical. Ela chama a atenção por onde passa, encantando a todos com sua natureza graciosa e sociável. Duda adora interagir com as pessoas, e sua capacidade de imitar sons e palavras é simplesmente fascinante. No abrigo, Duda é conhecida por sua habilidade em criar um ambiente animado e alegre. Ela é uma verdadeira artista, soltando suas vocalizações musicais e exibindo seu talento em acrobacias impressionantes. Duda é uma companheira divertida e curiosa, sempre pronta para explorar e aprender coisas novas. Se você está em busca de um animal de estimação exótico e cheio de vida, Duda é a escolha perfeita. Ela trará cor e alegria à sua casa, enchendo-a com suas melodias tropicais e suas expressões carinhosas. Adote Duda e descubra a maravilha de ter uma arara encantadora como parte da sua família. Ela será uma companheira vibrante e cativante, trazendo um toque de natureza selvagem para o seu lar.",
        imagem1:
          "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg",
        imagem2:
          "https://euamomeusanimais.com.br/wp-content/uploads/2022/08/Arara-azul.jpg",
        imagem3: "https://fotos.web.sapo.io/i/B7204117b/19455966_R0ElR.jpeg",
        imagem4:
          "https://euamomeusanimais.com.br/wp-content/uploads/2013/02/hyacinth-macaw-g3fa724bcb_1280-800x500.jpg",
        imagem5:
          "https://live.staticflickr.com/3330/3328789272_d047e59ed4_c.jpg",
        imagem6:
          "https://www.publicdomainpictures.net/pictures/480000/nahled/hyacinth-macaw-parrot.jpg",
        imagem7:
          "https://live.staticflickr.com/2111/2446232529_4036ef782f_b.jpg",
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
        historia:
          "Conheça Bartolomeu, um papagaio charmoso e cativante, com penas coloridas e uma personalidade divertida. Ele é um papagaio extraordinário, esperando ansiosamente por uma família amorosa que o adote. Bartolomeu é um verdadeiro tesouro emplumado. Com suas penas vibrantes e seu bico curvo, Bartolomeu é uma figura impressionante. Ele é conhecido por suas habilidades de imitação, sendo capaz de reproduzir vozes, toques de telefone e até mesmo músicas populares. Sua inteligência e capacidade de aprendizado são fascinantes. Bartolomeu é um papagaio enérgico e brincalhão. Ele adora interagir com as pessoas, soltando suas risadas contagiantes e realizando acrobacias surpreendentes. Ele é um verdadeiro showman, sempre pronto para entreter e encantar seus espectadores. No abrigo, Bartolomeu é uma sensação. Sua personalidade carismática e suas habilidades impressionantes atraem a atenção de todos. No entanto, ele está em busca de uma família que possa oferecer a ele amor, atenção e um ambiente estimulante. Se você está em busca de um animal de estimação que traga risadas e alegria para sua casa, Bartolomeu é a escolha perfeita. Ele será um companheiro divertido e cheio de vida, enchendo seu lar com suas imitações engraçadas e sua natureza extrovertida. Adote Bartolomeu e descubra a maravilha de ter um papagaio encantador como parte de sua família. Ele será um amigo leal e colorido, iluminando seus dias com suas travessuras e conversas animadas.",
        imagem1:
          "https://live.staticflickr.com/3292/2661273609_cd4d4db76d_b.jpg",
        imagem2:
          "https://i0.statig.com.br/bancodeimagens/c6/5h/r4/c65hr4xagrk2u5mu4he60blea.jpg",
        imagem3:
          "https://meusanimais.com.br/wp-content/uploads/2020/05/arara-arco-iris-especies-natureza.jpg",
        imagem4:
          "https://www.criadouroiguacuano.com.br/portal/wp-content/uploads/2020/02/arara-caninde-1.jpg",
        imagem5:
          "https://www.estimacao.com.br/y/5588/arara-brasileira-e1599062379610.jpg",
        imagem6:
          "https://static.wixstatic.com/media/83b9ac_e21c10543763470787e82d69f9154321~mv2.jpg/v1/fill/w_611,h_413,al_c,lg_1,q_80,enc_auto/arara-canind%C3%A9.jpg",
        imagem7:
          "https://badoca.com/wp-content/uploads/badoca-720x424-arara-azul2.jpg",
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
        historia:
          "Conheça Emily, uma gatinha adorável e meiga, com olhos expressivos e uma personalidade encantadora. Ela é uma verdadeira joia felina, esperando ansiosamente por uma família amorosa que a adote. Emily é a definição de doçura. Com sua pelagem macia e seus movimentos elegantes, Emily é uma gatinha que chama a atenção por sua delicadeza. Ela adora receber carinhos e ronronar suavemente no colo de seus humanos. Seus olhos brilhantes refletem sua ternura e sua disposição afetuosa. Emily é uma companheira leal e carinhosa. Ela adora brincar com bolinhas de lã, perseguir feixes de luz e se aconchegar em um cantinho aconchegante para tirar suas sonecas. Ela trará tranquilidade e serenidade para o seu lar, envolvendo você em seu amor felino. No abrigo, Emily conquistou a todos com sua natureza amável e sua personalidade dócil. No entanto, ela anseia por um lar permanente, onde possa receber todo o carinho e atenção que merece. Se você está em busca de um animal de estimação gentil e amoroso, Emily é a escolha perfeita. Ela será uma presença reconfortante em sua vida, trazendo calma e alegria para cada momento compartilhado. Adote Emily e descubra a felicidade de ter uma gatinha doce e encantadora como parte de sua família. Ela será uma amiga fiel e amorosa, iluminando seus dias com sua presença cativante.",
        imagem1:
          "https://i.pinimg.com/736x/a1/8c/8f/a18c8fbadbb3efdd4a8d478bb8290878.jpg ",
        imagem2:
          "https://i0.statig.com.br/bancodeimagens/f5/2h/j2/f52hj23zurm8xdw4kzubyvbqn.jpg",
        imagem3:
          "https://static1.patasdacasa.com.br/articles/2/10/62/@/15705-o-rajado-e-um-tipo-de-gato-cinza-com-bra-articles_media_slider_mobile-1.jpg",
        imagem4:
          "https://i0.statig.com.br/bancodeimagens/0g/nr/q8/0gnrq8hzt56a6ejbwhvflgb1a.jpg",
        imagem5:
          "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2020/08/18/o-que-a-cor-do-seu-gato-diz-sobre-ele-15737.jpeg",
        imagem6:
          "https://blog.casadoprodutor.com.br/wp-content/uploads/2018/10/cores1.jpg",
        imagem7:
          "https://cdn.astrocentro.com.br/blog/wp-content/uploads/2017/04/06120022/astrologia-astrocentro_829.jpg",
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
        historia:
          "Conheça Victor, um adorável cachorrinho corajoso e brincalhão, com um espírito aventureiro. Ele é um verdadeiro companheiro canino, esperando ansiosamente por uma família que o adote. Victor é um cachorro destemido e cheio de energia. Com seu pelo macio e olhos cheios de curiosidade, Victor é um cachorrinho que chama a atenção por sua aparência encantadora. Ele adora explorar e descobrir novos lugares em busca de diversão e emoção. Victor é conhecido por sua coragem e disposição para brincar, sempre trazendo sorrisos e risadas por onde passa. Victor é um companheiro leal e enérgico. Ele adora brincar de buscar a bola, correr pelo parque e aprender novos truques. Sua disposição alegre e contagiante trará uma atmosfera animada e alegre para sua casa, sempre proporcionando momentos de diversão e felicidade. No abrigo, Victor é admirado por sua personalidade cativante e espírito aventureiro. No entanto, ele anseia por um lar onde possa explorar e receber todo o amor e carinho que merece. Se você está em busca de um animal de estimação cheio de energia e diversão, Victor é a escolha perfeita. Ele será seu companheiro de aventuras, pronto para acompanhá-lo em caminhadas, trilhas e em todas as suas atividades ao ar livre. Adote Victor e descubra a alegria de ter um cachorrinho aventureiro e brincalhão como parte de sua família. Ele será um amigo fiel e enérgico, trazendo diversão e alegria para cada momento compartilhado.",
        imagem1:
          "https://www.zooplus.pt/magazine/wp-content/uploads/2019/06/gelb-chow-chow-768x510.jpg",
        imagem2:
          "https://www.petz.com.br/blog/wp-content/uploads/2021/08/cachorro-chow-chow-e-bravo-3.jpg",
        imagem3:
          "https://love.doghero.com.br/wp-content/uploads/2017/01/Galeria-4-Chow-Chow.jpg",
        imagem4:
          "https://fofuxo.com.br/_upload/galleries/2013/03/30/chow-chow-515738d93707e.jpg",
        imagem5:
          "https://www.patasdacasa.com.br/sites/patasdacasa/files/noticias/2021/09/chow-chow-caracteristicas-cuidados-temperamento-e-mais-saiba-tudo-sobre-a-raca.jpg",
        imagem6:
          "https://www.petz.com.br/blog/wp-content/uploads/2021/08/cachorro-chow-chow-e-bravo.jpg",
        imagem7:
          "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2020/01/portait-do-cachorro-chow-chow_100493-247.jpg",
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
        historia:
          "Conheça Lucy, uma cadela encantadora e leal, com olhos ternos e uma personalidade cativante. Ela é uma verdadeira amiga de quatro patas, esperando ansiosamente por uma família amorosa que a adote. Lucy é uma cadela doce e afetuosa. Com seu pelo macio e sua expressão gentil, Lucy é uma cadela que conquista corações. Ela adora receber carinhos e retribuir com lambidas cheias de amor. Seus olhos brilhantes transmitem uma gratidão profunda por qualquer atenção e afeto que recebe. Lucy é uma companheira leal e amorosa. Ela adora passear, correr ao seu lado e explorar o mundo ao ar livre. Sua disposição serena e pacífica trará tranquilidade para sua casa, envolvendo você em seu afeto caloroso. No abrigo, Lucy é admirada por sua natureza amável e seu temperamento dócil. No entanto, ela anseia por um lar permanente, onde possa receber todo o amor, cuidado e carinho que merece. Se você está em busca de um animal de estimação amoroso e fiel, Lucy é a escolha perfeita. Ela será uma presença reconfortante em sua vida, trazendo alegria e afeto para cada momento compartilhado. Adote Lucy e descubra a felicidade de ter uma cadela doce e encantadora como parte de sua família. Ela será uma amiga leal e amorosa, iluminando seus dias com sua presença afetuosa e seu amor incondicional.",
        imagem1:
          "https://www.adoropets.com.br/wp-content/uploads/2021/06/pastor-australiano-marrom-e-branco-scaled.jpg",
        imagem2:
          "https://meuamigopet.com.br/wp-content/uploads/2019/11/dog-2090313_960_720.jpg",
        imagem3:
          "https://i0.statig.com.br/bancodeimagens/imgalta/c6/p7/v1/c6p7v123vv2dckbu8lcxcxfs4.jpg",
        imagem4:
          "https://img.freepik.com/fotos-premium/retrato-de-um-lindo-cao-pastor-australiano-domestico-marrom-e-branco-olhando-para-o-espectador_181624-60375.jpg",
        imagem5:
          "https://cdn.pixabay.com/photo/2017/04/05/21/44/odin-2206430_640.jpg",
        imagem6: "",
        imagem7: "",
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
        historia:
          "Conheça Denvi, um gatinho adorável e brincalhão, com olhos curiosos e uma personalidade encantadora. Ele é um verdadeiro amigo felino, esperando ansiosamente por uma família amorosa que o adote. Denvi é um gatinho cheio de energia e diversão. Com seu pelo macio e sua aparência cativante, Denvi é um gatinho que atrai atenção por onde passa. Ele adora explorar cada cantinho da casa, investigar objetos intrigantes e se divertir com brinquedos coloridos. Denvi é conhecido por suas travessuras e sua natureza brincalhona, sempre trazendo alegria e risadas. Denvi é um companheiro leal e curioso. Ele adora brincar com bolinhas de lã, perseguir feixes de luz e se aconchegar em lugares confortáveis para tirar suas sonecas. Sua disposição divertida e animada trará energia e entusiasmo para o seu lar, criando momentos cheios de diversão e felicidade. No abrigo, Denvi é amado por sua personalidade encantadora e seu espírito brincalhão. No entanto, ele anseia por um lar onde possa explorar, receber atenção e ser amado para sempre. Se você está em busca de um animal de estimação cheio de vida e brincadeiras, Denvi é a escolha perfeita. Ele será seu companheiro de diversão, sempre pronto para brincar e se envolver em travessuras animadas. Adote Denvi e descubra a alegria de ter um gatinho adorável e brincalhão como parte de sua família. Ele será um amigo fiel e entusiasmado, enchendo seus dias com sua energia contagiante e seu amor incondicional.",
        imagem1:
          "https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul-1280x720.jpg",
        imagem2:
          "https://cdn.pixabay.com/photo/2013/10/28/11/15/cat-201767_1280.jpg",
        imagem3:
          "https://cdn.pixabay.com/photo/2020/01/05/14/49/white-cat-4743349_1280.jpg",
        imagem4:
          "https://www.libras.com.br/ct__images/artigos/audicao-dos-animais/gata-branca-olhos-azuis.png",
        imagem5:
          "https://www.publicdomainpictures.net/pictures/110000/nahled/italiain-white-cat.jpg",
        imagem6:
          "https://i.pinimg.com/736x/e0/2c/c4/e02cc4b4beb2bdb234c5923fafc2ab7b.jpg",
        imagem7:
          "https://www.petz.com.br/blog/wp-content/uploads/2021/05/raca-de-gato-peludo.jpg",
      },
    ];
    return donations;
  }
}
