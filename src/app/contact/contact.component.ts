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
  
}