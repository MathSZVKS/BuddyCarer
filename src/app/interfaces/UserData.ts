import { Authority } from "../../app/interfaces/Authority";
import { Token } from "../../app/interfaces/Token";
import { Phone } from "../../app/interfaces/Phone";
import { Address } from "../../app/interfaces/Address";

export interface UserData {
    image: string,
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    address: Address | null;
    email: string;
    receiveNews: boolean | null;
    birthDay: string;
    phone: Phone | null;
    cpf: string;
    personType: string | null;
    cardNumber: number;
    cardName: string;
    flag: string;
    securityCode: string | null;
    age: number;
    authorities: Authority[] | null;
    tokens: Token[] | null;
    role: String;
  }