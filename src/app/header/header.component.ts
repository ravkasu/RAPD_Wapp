import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isContentVisible = false;

  // Function to toggle content visibility
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
