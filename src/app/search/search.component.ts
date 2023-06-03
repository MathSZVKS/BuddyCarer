import { Component, EventEmitter, Output } from "@angular/core";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  @Output() adjustScreen = new EventEmitter<string>();

  faExpand = faExpand;

  maximizeScreen(){
    this.adjustScreen.emit();
  }
}
