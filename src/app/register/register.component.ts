import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false; // To show loading state
  errorMessage: string | null = null; // To handle error messages
  successMessage: string | null = null; // To handle success messages

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]], // Username must be more than 3 characters
      email: ['', [Validators.required, Validators.email]],
      phoneN: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  resetLoading(): void {
    this.loading = false; // إعادة تعيين حالة التحميل
    this.errorMessage = null
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true; // Start loading
      this.registerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'تم التسجيل بنجاح!'; // Show success message
          this.errorMessage = null; // Clear any previous error messages
          this.router.navigate(['/login']); // Redirect to login or another page
        },
        error: (err) => {
          // Handle error coming from the database
          if (err.error && err.error.message) {
            this.errorMessage = err.error.message; // Show the error message from the backend
          } else {
            this.errorMessage = 'حدث خطأ أثناء التسجيل'; // Default error message
          }
          this.successMessage = null; // Clear any previous success messages
        },
        complete: () => {
          this.loading = false; // End loading
        }
      });
    } else {
      // If the form is invalid, set an error message
      this.errorMessage = 'يجب إدخال جميع الحقول بشكل صحيح'; // Show a general form error
      this.successMessage = null; // Clear success message if there's an error
    }
  }
}
