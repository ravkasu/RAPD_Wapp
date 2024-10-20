import { Component } from '@angular/core';
import { FormSubmitService } from '../config/form-submit.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private apiUrl = 'config/mailSend.php';
  contactForm: FormGroup;
  formMessage: string = '';

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

  // Submit form data
  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.apiUrl, this.contactForm.value).subscribe({
        next: (response) => {
          if (response === 'success') {
            // On success, redirect to the thank you page
            this.router.navigate(['/thankyou']);
          } else {
            console.error(response);
          }
          this.formMessage = 'Your message has been sent!';
          this.contactForm.reset();  // Reset the form after successful submission
        },
        error: (error) => {
          this.formMessage = 'There was an error sending your message. Please try again.';
        }
      });
    } else {
      this.formMessage = 'Please fill out all required fields.';
    }
  }
  // onSubmit(formData: any) {
  //   if (this.contactForm.valid) {
  //     this.formSubmitService.submitForm(formData).subscribe({
  //       next: (response) => {
  //         if (response.status === 'success') {
  //           // On success, redirect to the thank you page
  //           this.router.navigate(['/thankyou']);
  //         } else {
  //           console.error(response.message);
  //         }
  //       },
  //       error: (error) => {
  //         console.error('There was an error!', error);
  //       }
  //     });
  //   } else {
  //     this.formMessage = 'Please fill out all required fields.';
  //   }
  // }
}