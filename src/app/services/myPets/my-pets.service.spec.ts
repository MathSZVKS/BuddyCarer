import { TestBed } from "@angular/core/testing";

import { MyPetsService } from "./my-pets.service";

describe("MyPetsService", () => {
  let service: MyPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPetsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
