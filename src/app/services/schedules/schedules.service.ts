import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SchedulesService {
  constructor() {}

  getScheduleds() {
    let scheduleds = [
      { title: "Tosa do Barnei", date: "2023-05-10" },
      { title: "Tosa do Barnei", date: "2023-05-11" },
      { title: "Tosa do Barnei", date: "2023-05-13" },
      { title: "Tosa do Barnei", date: "2023-05-15" },
      { title: "Tosa do Barnei", date: "2023-05-16" },
      { title: "Tosa do Barnei", date: "2023-05-18" },
      { title: "Tosa do Barnei", date: "2023-05-19" },
      { title: "Tosa do Barnei", date: "2023-05-20" },
      { title: "Tosa do Barnei", date: "2023-05-21" },
      { title: "Tosa do Barnei", date: "2023-05-22" },
      { title: "Tosa do Barnei", date: "2023-05-23" },
      { title: "Tosa do Barnei", date: "2023-05-24" },
      { title: "Tosa do Barnei", date: "2023-05-26" },
      { title: "Tosa do Barnei", date: "2023-05-29" },
      { title: "Tosa do Barnei", date: "2023-06-01" },
      { title: "Tosa do Barnei", date: "2023-06-02" },
      { title: "Tosa do Barnei", date: "2023-06-03" },
      { title: "Tosa do Barnei", date: "2023-06-05" },
      { title: "Tosa do Barnei", date: "2023-06-06" },
      { title: "Tosa do Barnei", date: "2023-06-10" },
      { title: "Tosa do Barnei", date: "2023-06-11" },
      { title: "Tosa do Barnei", date: "2023-06-13" },
      { title: "Tosa do Barnei", date: "2023-06-14" },
      { title: "Tosa do Barnei", date: "2023-06-15" },
      { title: "Tosa do Barnei", date: "2023-06-16" },
      { title: "Tosa do Barnei", date: "2023-06-17" },
      { title: "Tosa do Barnei", date: "2023-06-20" },
      { title: "Tosa do Barnei", date: "2023-06-22" },
      { title: "Tosa do Barnei", date: "2023-06-23" },
      { title: "Tosa do Barnei", date: "2023-06-27" },
    ];

    return scheduleds;
  }
}
