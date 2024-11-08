import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RequestAccreditationService {
  private apiUrl = environment.apiUrl; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // User registration method
  createBaptism(data: any): Observable<any> {
    // الحصول على التوكن من localStorage
    const token = localStorage.getItem('token');

    // إرسال الطلب مع أو بدون هيدرز بناءً على وجود التوكن
    return this.http.post(
      `${this.apiUrl}/createBaptism`,
      data,
      {
        headers: token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined
      }
    );
  }
}

