import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClients() {
    let clients = [
      {
        foto: "https://uploads-ssl.webflow.com/637623069753ec9bc412ff15/63877d564c600e5aab8785bd_image-home-hero%402x.webp",
        nome: "Sofia Andrade Cunha",
        enderecoRua: "Rua Alberto Loriol",
        enderecoNumero: "1129",
        estado: "SP",
        municipio: "São Paulo",
        cep: "03735-330",
        cpf: "305.610.623-07",
        telefone: "(11) 7277-5988",
        nascimento: "8, Novembro 2022",
        idade: "20 anos de idade",
        email: "AndreCunhaAlves@jourrapide.com"
      },
      {
        foto: "https://i.pinimg.com/736x/45/b1/72/45b172b08803cdcbdcda7c31248878bc.jpg",
        nome: "Luciana Mendes Alves",
        enderecoRua: "Rua Alberto Loriol",
        enderecoNumero: "1129",
        estado: "SP",
        municipio: "São Paulo",
        cep: "03735-330",
        cpf: "305.610.623-07",
        telefone: "(11) 7277-5988",
        nascimento: "8, Novembro 2022",
        idade: "20 anos de idade",
        email: "AndreCunhaAlves@jourrapide.com"
      },
      {
        foto: "https://i.pinimg.com/originals/1f/96/cf/1f96cfbe5ebc2e07b99cd807906216bf.jpg",
        nome: "Andy Biersack",
        enderecoRua: "Rua Alberto Loriol",
        enderecoNumero: "1129",
        estado: "SP",
        municipio: "São Paulo",
        cep: "03735-330",
        cpf: "305.610.623-07",
        telefone: "(11) 7277-5988",
        nascimento: "8, Novembro 2022",
        idade: "20 anos de idade",
        email: "AndreCunhaAlves@jourrapide.com"
      },
      {
        foto: "https://img.freepik.com/fotos-premium/mulher-com-cabelo-vermelho-lindo_144962-3978.jpg",
        nome: "Eduarda Andrade Costa",
        enderecoRua: "Rua Alberto Loriol",
        enderecoNumero: "1129",
        estado: "SP",
        municipio: "São Paulo",
        cep: "03735-330",
        cpf: "305.610.623-07",
        telefone: "(11) 7277-5988",
        nascimento: "8, Novembro 2022",
        idade: "20 anos de idade",
        email: "AndreCunhaAlves@jourrapide.com"
      }
    ];
    return clients;
  }
}
