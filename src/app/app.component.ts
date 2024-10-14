
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isHomePage: boolean = false;
  isHeaderVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isHeaderVisible = scrollPosition >= 200;
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url === '/home' || event.url === '/') {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    });
  }

  ngOnInit(): void {}
  
}
