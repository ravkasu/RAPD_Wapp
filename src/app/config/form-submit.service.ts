import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FormSubmitService {
    private apiUrl = 'https://www.rapdservice.co.uk/API/sendMail.php';

    constructor(private http: HttpClient) { }
    sendEmail(formData: any): Observable<any> {
        // Set headers to indicate JSON content
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        // Send HTTP POST request to PHP backend
        return this.http.post<any>(this.apiUrl, JSON.stringify(formData), { headers });
    }
}