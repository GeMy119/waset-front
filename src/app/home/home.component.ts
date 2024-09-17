import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestAccreditationService } from '../request-accreditation/services/request-accreditation.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baptismRequestForm: FormGroup;
  successMessage: string | null = null; // متغير لتخزين رسالة النجاح
  errorMessage: string | null = null; // متغير لتخزين رسالة الخطأ
  loading: boolean = false

  constructor(private authService: AuthService, private fb: FormBuilder, private requestAccreditationService: RequestAccreditationService) {
    this.baptismRequestForm = this.fb.group({
      applicantName: ['', Validators.required],
      whatsAppUser: ['', Validators.required],
      nameOfTheServiceProvider: ['', Validators.required],
      whatsAppServicProvider: ['', Validators.required],
      servicePrice: ['', [Validators.required, Validators.min(0)]], // إضافة الحد الأدنى 0
      agreementDetails: ['', Validators.required],
      theDayTheBaptismEnded: ['', Validators.required],
      baptismPeriod: ['', [Validators.required, Validators.min(1)]],
      agreeTerms: [false, Validators.requiredTrue], // يجب التأكد من قبول الشروط
    });
  }

  ngOnInit(): void {
  }
  resetLoading(): void {
    this.loading = false; // إعادة تعيين حالة التحميل
    this.errorMessage = null
    this.successMessage = null
  }
  onSubmit() {
    if (this.baptismRequestForm.valid) {
      this.loading = true
      this.requestAccreditationService.createBaptism(this.baptismRequestForm.value).subscribe({
        next: (response) => {
          // console.log('Baptism request created successfully', response);
          this.successMessage = 'تم التسجيل بنجاح!'; // تعيين رسالة النجاح
          this.baptismRequestForm.reset(); // إعادة تعيين النموذج
          this.errorMessage = null; // إعادة تعيين رسالة الخطأ
        },
        error: (err) => {
          // console.error('Error creating baptism request:', err);
          if (err.status === 401) {
            this.errorMessage = 'يرجى تسجيل الدخول أولاً'; // رسالة عند عدم التصريح
            // يمكنك هنا إعادة توجيه المستخدم إلى صفحة تسجيل الدخول إذا لزم الأمر
            // this.router.navigate(['/login']); // Uncomment if you have a login route
          } else {
            this.errorMessage = 'حدث خطأ أثناء تسجيل الطلب'; // رسالة خطأ عامة
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
