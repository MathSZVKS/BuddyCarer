import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VaccinesService {
  constructor() {}

  getAboutVaccine(vaccineName: string) {
    let aboutVaccine: {
      vaccineName: string;
      about: string;
      cardColor: string
    }[] = [];

    let color =  'rgb(63 97 133)';

    switch (vaccineName) {
      case "Tetragenica":
        aboutVaccine = [
          {
            vaccineName: "Tetragenica",
            cardColor: color,
            about:
              "A vacina tetrágena animal é uma vacina produzida a partir de toxinas de clostrídios, que são bactérias encontradas no solo e no trato intestinal de animais, incluindo bovinos, ovinos e caprinos. Essas toxinas são inativadas ou modificadas quimicamente para que possam ser usadas com segurança como uma vacina. Essa vacina é chamada de tetrágena porque oferece proteção contra quatro tipos de clostrídios: Clostridium chauvoei (causador da carbúnculo sintomático), Clostridium septicum (causador de gangrena gasosa), Clostridium novyi tipo A (causador de edema maligno) e Clostridium perfringens tipo C (causador de enterotoxemia). Essa vacina é administrada em animais, principalmente em bovinos, para prevenir essas doenças graves e potencialmente fatais. A vacina estimula o sistema imunológico do animal a produzir anticorpos contra as toxinas dos clostrídios, para que o animal esteja protegido caso seja exposto a essas bactérias no futuro.",
          },
        ];
        break;
      case "Anti Rábica":
        aboutVaccine = [
          {
            vaccineName: "Anti Rábica",
            cardColor: color,
            about:
              "A vacina antirrábica animal é uma vacina composta por um vírus vivo atenuado ou inativado que fornece proteção contra o vírus da raiva. A raiva é uma doença infecciosa causada por um vírus que pode afetar animais e humanos, sendo transmitida através da saliva de animais infectados, como cães, gatos, morcegos, entre outros. A vacina antirrábica animal é administrada em animais para prevenir a infecção pelo vírus da raiva e reduzir o risco de transmissão da doença para humanos. A vacina estimula o sistema imunológico do animal a produzir anticorpos contra o vírus da raiva, para que o animal esteja protegido caso seja exposto ao vírus no futuro. A vacina antirrábica animal pode ser administrada em diferentes espécies, como cães, gatos, bovinos, equinos, ovinos e caprinos. A vacina é geralmente administrada por injeção subcutânea ou intramuscular e requer uma série de doses para garantir uma proteção adequada contra a raiva. A vacina antirrábica animal é uma ferramenta importante para controlar a disseminação da raiva em animais e prevenir a transmissão da doença para humanos. Além da vacinação de animais, outras medidas de prevenção, como o controle populacional de animais de rua e a educação pública sobre os riscos da raiva, também são fundamentais para reduzir o impacto dessa doença grave.",
          },
        ];
        break;
      case "Cinomose":
        aboutVaccine = [
          {
            vaccineName: "Cinomose",
            cardColor: color,
            about: "A vacina contra cinomose animal é uma vacina composta por um vírus vivo atenuado ou inativado que fornece proteção contra o vírus da cinomose canina. A cinomose é uma doença viral altamente contagiosa que afeta principalmente cães, mas também pode afetar outras espécies de animais. A vacina contra a cinomose animal é administrada em cães para prevenir a infecção pelo vírus da cinomose e reduzir o risco de transmissão da doença para outros animais. A vacina estimula o sistema imunológico do cão a produzir anticorpos contra o vírus da cinomose, para que o animal esteja protegido caso seja exposto ao vírus no futuro. A vacina contra a cinomose animal é geralmente administrada como parte do protocolo de vacinação básico para cães filhotes, e deve ser repetida anualmente ou a cada três anos, dependendo do tipo de vacina utilizada e das recomendações do médico veterinário. A vacina contra a cinomose animal é uma ferramenta importante para prevenir a disseminação da doença entre os cães e reduzir o impacto da cinomose na saúde animal. Além da vacinação, outras medidas de prevenção, como a higiene adequada e o isolamento de animais doentes, também são importantes para controlar a disseminação da doença."
          },
        ];
        break;
      case "Hepatite":
        aboutVaccine = [
          {
            vaccineName: "Hepatite",
            cardColor: color,
            about: "A vacina contra a hepatite animal, também conhecida como vacina contra a hepatite infecciosa canina, é uma vacina composta por um vírus inativado que fornece proteção contra o vírus da hepatite canina. A hepatite canina é uma doença viral que afeta principalmente cães e pode causar danos ao fígado, além de outros sintomas, como febre, vômitos e diarreia. A vacina contra a hepatite animal é administrada em cães para prevenir a infecção pelo vírus da hepatite canina e reduzir o risco de complicações relacionadas à doença. A vacina estimula o sistema imunológico do cão a produzir anticorpos contra o vírus da hepatite canina, para que o animal esteja protegido caso seja exposto ao vírus no futuro. A vacina contra a hepatite animal é geralmente administrada como parte do protocolo de vacinação básico para cães filhotes, e deve ser repetida anualmente ou a cada três anos, dependendo do tipo de vacina utilizada e das recomendações do médico veterinário. A vacina contra a hepatite animal é uma ferramenta importante para prevenir a disseminação da doença entre os cães e reduzir o impacto da hepatite canina na saúde animal. Além da vacinação, outras medidas de prevenção, como a higiene adequada e o controle de populações de cães vadios, também são importantes para controlar a disseminação da doença."
          },
        ];
        break;
    }
    return aboutVaccine["0"];
  }
}
