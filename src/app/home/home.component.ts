import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormSubmitService } from '../config/form-submit.service';
import { HttpClient } from '@angular/common/http';

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
 open = false;
 isOn = false;
 isHeaderVisible = false;
 contactForm: FormGroup;
  formMessage: string = '';
dis_none = false;
  menuOpen = false;
  subMenuOpen: { [key: string]: boolean } = {};


  constructor(
    private fb: FormBuilder,
    private formSubmitService: FormSubmitService,
    private http: HttpClient,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      company: ['', Validators.required],
      companyWebsite: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.subMenuOpen = {}; // Close all submenus when main menu is toggled
  }

  toggleSubmenu(event: Event, submenu: string) {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Prevents triggering other click events
    this.subMenuOpen[submenu] = !this.subMenuOpen[submenu];
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.formSubmitService.sendEmail(formData).subscribe(
        response => {
          if (response.status === 'success') {
            this.formMessage = 'Email sent successfully!';
            this.router.navigate(['/thankyou']);
          } else {
            this.formMessage = response.message || 'Failed to send email.';
          }
        },
        error => {
          this.formMessage = 'An error occurred. Please try again.';
        }
      );
    } else {
      this.formMessage = 'Please fill in all required fields.';
    }
  }

 // Method to navigate to the 'about' route
 goToAbout() {
   this.router.navigate(['/about']).then(() => {
    // Scroll to the top of the page after navigation
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 }
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
