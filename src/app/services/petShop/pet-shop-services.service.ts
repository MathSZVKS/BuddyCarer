import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetShopServicesService {

  constructor() { }

  getServicesVaccines() {
    let services = [
      {
        nome: "Tetravalente",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(212,106,74,1) 24%, rgba(235,120,133,1) 100%)"
      },
      {
        nome: "Anti-Rábica",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(74,144,212,1) 24%, rgba(120,232,235,1) 100%)",
      },
      {
        nome: "Anti-Carrapato",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(95,74,212,1) 24%, rgba(156,120,235,1) 100%)",
      },
      {
        nome: "Raiva",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(212,74,123,1) 24%, rgba(155,109,162,1) 100%)",
      }
    ];
    return services;
  }

  getServicesCare() {
    let services = [
      {
        nome: "Banho e tosa",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(219,142,25,1) 24%, rgba(162,150,109,1) 100%)"
      },
      {
        nome: "Banho anti-estresse",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(161,209,82,1) 24%, rgba(125,162,109,1) 100%)",
      },
      {
        nome: "Tosa higiênica",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(82,166,209,1) 24%, rgba(125,162,109,1) 100%)",
      },
      {
        nome: "Remoção de carrapatos",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      },
      {
        nome: "Estética animal",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(142,58,180,1) 0%, rgba(252,176,69,1) 100%)",
      }
    ];
    return services;
  }
}
