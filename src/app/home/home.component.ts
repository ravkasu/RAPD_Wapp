import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 // States for toggling visibility
 isParagraphHidden = true;
 isScrollTopVisible = false;
 isContentVisible = false;
 isSubMenuVisible = false;
 timeoutId: any = null;

 isHeaderVisible = false;

 // Function to hide the top section
 hideDiv() {
   const topSection = document.getElementById("topSection");
   if (topSection) {
     topSection.style.display = 'none';
   }
 }

 // Function to toggle paragraph visibility
 toggleParagraph() {
   this.isParagraphHidden = !this.isParagraphHidden;
 }

 // Function to scroll to top
 scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 }

 // Function to toggle content visibility
 toggleContent() {
   this.isContentVisible = !this.isContentVisible;
 }

 // Function to toggle submenu visibility
 toggleSubMenu() {
   this.isSubMenuVisible = !this.isSubMenuVisible;

   // Optional: Timeout to hide the submenu after 5 seconds
   if (this.isSubMenuVisible) {
     if (this.timeoutId) {
       clearTimeout(this.timeoutId);
     }
     this.timeoutId = setTimeout(() => {
       this.isSubMenuVisible = false;
     }, 5000); // Adjust the timeout duration as needed
   }
 }

 // Listen to scroll events to toggle 'scroll-to-top' button visibility
//  @HostListener('window:scroll', [])
//  onWindowScroll() {
//    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    this.isScrollTopVisible = scrollTop > 100;
//  }

 @HostListener('window:scroll', [])
 onWindowScroll() {
   const scrollPosition = window.scrollY;
   this.isHeaderVisible = scrollPosition >= 200;
 }

}
