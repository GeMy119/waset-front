import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // الحالة الافتراضية غير مسجل

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable(); // إرجاع الحالة كمراقب
  }

  login(): void {
    // محاكاة عملية تسجيل الدخول
    this.loggedIn.next(true); // تغيير الحالة إلى مسجل
  }

  logout(): void {
    localStorage.removeItem("token")
    this.loggedIn.next(false); // تغيير الحالة إلى غير مسجل
  }
}
