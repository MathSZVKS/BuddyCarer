import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {
  @Input() userType = "";

  @Output() choosePage = new EventEmitter<string>();

  alterPage(page = ''){
    this.choosePage.emit(page);
  }
}
