import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetShopServicesService {

  constructor() { }

  getServices() {
    let services = [
      {
        nome: "Banho e tosa",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(212,106,74,1) 24%, rgba(235,120,133,1) 100%)"
      },
      {
        nome: "Castração",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(74,144,212,1) 24%, rgba(120,232,235,1) 100%)",
      },
      {
        nome: "Tosa higiênica",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(95,74,212,1) 24%, rgba(156,120,235,1) 100%)",
      },
      {
        nome: "Banho anti-estresse",
        descricao: "Descrição",
        cardColor: "linear-gradient(90deg, rgba(212,74,123,1) 24%, rgba(155,109,162,1) 100%)",
      }
    ];
    return services;
  }
}
