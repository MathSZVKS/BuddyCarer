import { Component, EventEmitter, Output } from "@angular/core";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  @Output() adjustScreen = new EventEmitter<string>();
  @Output() alterTheme = new EventEmitter<string>();
  

  faExpand = faExpand;
  faCircleHalfStroke = faCircleHalfStroke;

  maximizeScreen(){
    this.adjustScreen.emit();
  }

  chooseTheme(){
    this.alterTheme.emit();
  }
}
