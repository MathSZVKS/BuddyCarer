import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent {
  constructor(private toastr: ToastrService) {}
  
  @Input() userType = "";
  @Input() userLogged = "";

  @Output() choosePage = new EventEmitter<string>();
  @Output() checkUserLogged = new EventEmitter<string>();
  @Output() moveToLoginPageBeforeAccess = new EventEmitter<string>();

  alterPage(page = ''){
    this.checkUserLogged.emit();

    if(this.userLogged != ''){
      this.choosePage.emit(page);
    }else{
      this.toastr.warning("Necessário efetuar o login para acessar a página");
      this.moveToLoginPageBeforeAccess.emit();
    }
  }
}
