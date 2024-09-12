import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false; // To show loading state
  errorMessage: string | null = null; // To handle error messages
  successMessage: string | null = null; // To handle success messages

  constructor(private fb: FormBuilder, private LoginService: LoginService, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true; // Start loading
      this.LoginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // console.log('login successful', response);
          this.authService.login();
          localStorage.setItem('token', response.token); // افترض أن API يعيد توكن تحت مفتاح 'token'
          this.successMessage = 'تم التسجيل بنجاح!'; // Show success message
          this.errorMessage = null; // Clear any previous error messages
          this.router.navigate(['/']); // Redirect to login or another page
        },
        error: (err) => {
          // console.error('Error during login:', err);
          this.errorMessage = err.error.message || 'حدث خطأ أثناء التسجيل'; // Show error message
          this.successMessage = null; // Clear any previous success messages
        },
        complete: () => {
          this.loading = false; // End loading
        }
      });
    }
  }

}
