// register.component.ts
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
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneN: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true; // Start loading
      this.registerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // console.log('Registration successful', response);
          this.successMessage = 'تم التسجيل بنجاح!'; // Show success message
          this.errorMessage = null; // Clear any previous error messages
          this.router.navigate(['/login']); // Redirect to login or another page
        },
        error: (err) => {
          // console.error('Error during registration:', err);
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
