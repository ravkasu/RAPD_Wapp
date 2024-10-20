import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormSubmitService {
  private apiUrl = 'config/sendMail.php'; // Your PHP backend endpoint

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}