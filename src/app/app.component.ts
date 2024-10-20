
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isHomePage: boolean = true;
  isHeaderVisible = false;
  @ViewChild('home')
  homeComponent!: HomeComponent;
  @ViewChild('header')
  headerComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    console.log('Home component:', this.homeComponent);
    console.log('Header component:', this.headerComponent);
  }
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
