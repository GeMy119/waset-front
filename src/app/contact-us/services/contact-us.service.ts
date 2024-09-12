import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = environment.apiUrl; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // User registration method
  sendContact(data: any): Observable<any> {

    return this.http.post(`${this.apiUrl}/sendContact`, data);
  }
}
