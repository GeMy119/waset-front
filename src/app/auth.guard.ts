import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // افتراضًا نستخدم الـ token للتحقق
    if (token) {
      return true; // المستخدم مسجل الدخول
    } else {
      // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلًا
      this.router.navigate(['/login']);
      return false;
    }
  }
}


