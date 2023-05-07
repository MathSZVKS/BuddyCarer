import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor() { }

  getScheduleds() {
    let scheduleds = [{ title: "Tosa do Barnei", date: "2023-05-10" }, { title: "Tosa do Barnei", date: "2023-05-11" },];

    return scheduleds;
  }
}
