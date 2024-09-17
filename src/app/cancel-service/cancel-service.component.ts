import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CancelServiceService } from './services/cancel-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-service',
  templateUrl: './cancel-service.component.html',
  styleUrls: ['./cancel-service.component.css']
})
export class CancelServiceComponent {
  cancleBaptismForm: FormGroup;
  successMessage: string | null = null; // متغير لتخزين رسالة النجاح
  errorMessage: string | null = null; // متغير لتخزين رسالة الخطأ
  cancellationReason: string = ''; // Declare the cancellationReason property
  baptismNumber: string = ''; // Declare the cancellationReason property
  agreeTerms: boolean = false; // Declare the cancellationReason property
  loading: boolean = false

  constructor(private fb: FormBuilder, private CancelServiceService: CancelServiceService, private router: Router) {
    this.cancleBaptismForm = this.fb.group({
      cancellationReason: ['', Validators.required],
      baptismNumber: ['', [Validators.required]],
      agreeTerms: [false, Validators.requiredTrue], // يجب التأكد من قبول الشروط
    });
  }

  ngOnInit(): void { }
  resetLoading(): void {
    this.loading = false; // إعادة تعيين حالة التحميل
    this.errorMessage = null
    this.successMessage = null
  }
  onSubmit() {
    if (this.cancleBaptismForm.valid) {
      this.loading = true
      this.CancelServiceService.cancleBaptism(this.cancleBaptismForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'تم الإلغاء بنجاح!'; // تعيين رسالة النجاح
          this.cancleBaptismForm.reset(); // إعادة تعيين النموذج
          this.errorMessage = null; // إعادة تعيين رسالة الخطأ
          window.alert('تم الإلغاء بنجاح!')
          this.router.navigate(['']); // Uncomment if you have a login route

        },
        error: (err) => {
          if (err.status === 401) {
            this.errorMessage = 'يرجى تسجيل الدخول أولاً'; // رسالة عند عدم التصريح
          } else {
            this.errorMessage = 'حدث خطأ أثناء الغاء الطلب'; // رسالة خطأ عامة
          }
        },
        complete: () => {
          this.loading = false
        }
      });
    } else {
      this.errorMessage = 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.'; // رسالة الخطأ عند عدم صحة النموذج
    }
  }
}
