import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoginOpen: boolean = false;

  openLogin() {
    this.isLoginOpen = true;
  }

  closeLogin() {
    this.isLoginOpen = false;
  }
}
