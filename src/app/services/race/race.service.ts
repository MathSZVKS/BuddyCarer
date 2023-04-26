import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RaceService {
  constructor() {}

  getRace(race: string) {
    let petRace: any;

    switch (race) {
      case "Shih tzu":
        petRace = {
          descricao: "O Shih Tzu é uma raça de cão pequeno, originária do Tibete, e é considerada uma das raças mais antigas do mundo. Esses cães foram criados para serem companheiros e guardiões dos monastérios budistas. O Shih Tzu tem um corpo compacto e bem proporcionado, com uma pelagem longa e sedosa que pode ser de diversas cores, incluindo preto, branco, marrom e dourado. Seu rosto é achatado e tem olhos grandes e expressivos, com uma aparência distintiva e adorável. Eles são cães muito carinhosos, inteligentes e leais, e gostam de ficar perto de seus donos o tempo todo. Por serem uma raça pequena, são ideais para apartamentos ou casas menores, mas precisam de exercícios regulares e cuidados com a pelagem. Os Shih Tzus são animais de estimação adoráveis e populares em todo o mundo, especialmente entre aqueles que procuram um cão de companhia amigável e carinhoso.",
        };
        break;
      case "Poodle":
        petRace = {
          descricao: "O Poodle é uma raça canina que se destaca por seu elegante e distintivo aspecto, bem como por sua inteligência e habilidade em diferentes atividades. Eles vêm em três tamanhos diferentes: o Poodle padrão, o Miniatura e o Toy. O Poodle tem uma pelagem densa e encaracolada que não solta muito pelo, tornando-os uma boa escolha para pessoas com alergias. A pelagem pode ser encontrada em várias cores, incluindo branco, preto, marrom, cinza e vermelho. Além da aparência, os Poodles são conhecidos por sua personalidade amigável e ativa. Eles são altamente treináveis e gostam de aprender truques e comandos, tornando-os excelentes cães de companhia e de desempenho. Eles também são conhecidos por sua habilidade em diferentes atividades, incluindo obediência, agilidade e caça. Embora muitas vezes sejam associados a um estilo de vida de luxo, os Poodles são na verdade cães muito versáteis e adaptáveis que podem se ajustar facilmente a diferentes ambientes e estilos de vida. Eles são conhecidos por sua lealdade e afeição por suas famílias, tornando-os excelentes companheiros de vida.",
        };
        break;
      case "Vira-Lata":
        petRace = {
          descricao: "O Vira-Lata é um cão sem raça definida, que geralmente é resultado de cruzamentos entre diversas raças. Por ser um cão sem raça definida, eles apresentam uma grande variedade de características físicas e comportamentais, o que significa que cada Vira-Lata é único. Em geral, os Vira-Latas são cães de porte médio a grande, com pelagem curta ou média. Sua aparência pode variar bastante, incluindo uma grande variedade de cores e padrões. O temperamento dos Vira-Latas também é muito variável, mas muitos são conhecidos por serem amigáveis, inteligentes e muito leais a suas famílias. Como resultado de sua natureza adaptável, eles são geralmente excelentes cães de companhia e podem ser bem-sucedidos em várias atividades, incluindo esportes caninos e terapia assistida por animais. Outra característica importante dos Vira-Latas é sua boa saúde e longevidade. Devido à sua ampla diversidade genética, eles tendem a ter menos problemas de saúde hereditários do que muitas raças de cães puras. Embora os Vira-Latas sejam frequentemente associados a cães de rua e abandonados, muitos desses cães são resgatados e adotados como animais de estimação. Eles são conhecidos por serem cães incrivelmente gratos e amorosos, tornando-se excelentes companheiros para aqueles que estão dispostos a dar-lhes uma chance.",
        };
        break;
      case "Angorá":
        petRace = {
          descricao: "O Angorá é uma raça de gato conhecida por sua pelagem longa e sedosa. A raça Angorá é originária da Turquia, onde eles eram criados para serem excelentes caçadores de roedores. Os Angorás têm um corpo elegante e esguio, com uma pelagem densa e suave que pode ser de várias cores, incluindo branco, preto, azul, creme e vermelho. Eles têm olhos grandes e expressivos que podem ser de várias cores, incluindo azul, verde, dourado e cobre. Embora sejam conhecidos por sua pelagem longa e sedosa, a manutenção da pelagem do Angorá requer cuidados regulares, como escovação e penteados frequentes, para evitar que se emaranhe e forme nós. Os Angorás são conhecidos por sua personalidade afetuosa e amigável, tornando-os excelentes animais de estimação. Eles são geralmente muito brincalhões e ativos, mas também podem ser bastante independentes. Eles tendem a se dar bem com crianças e outros animais de estimação, mas também podem ser felizes como o único gato da casa. Os Angorás são animais inteligentes e curiosos que gostam de se manter ocupados. Eles são animais de estimação muito gratificantes, mas exigem atenção e interação diárias para manterem-se felizes e saudáveis.",
        };
        break;
    }
    return petRace;
  }
}
