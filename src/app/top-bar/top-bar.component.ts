import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() loginEvent = new EventEmitter<boolean>();
  
  logged = false;

  verifyLogin(){
    this.logged = true;
    this.loginEvent.emit(this.logged);
  }

}
