import { Component } from '@angular/core';

@Component({
  selector: 'app-refund-service',
  templateUrl: './refund-service.component.html',
  styleUrls: ['./refund-service.component.css']
})
export class RefundServiceComponent {
  applicantName: string = '';
  applicantId: string = '';
  providerName: string = '';
  providerId: string = '';
  cancellationReason: string = '';
  serviceNumber: string = '';
  completionDate: string = '';
  serviceAmount: number | null = null;
  paymentMethod: string = '';
  termsAccepted: boolean = false;

  onSubmit() {
    if (this.termsAccepted) {
      const formData = {
        applicantName: this.applicantName,
        applicantId: this.applicantId,
        providerName: this.providerName,
        providerId: this.providerId,
        cancellationReason: this.cancellationReason,
        serviceNumber: this.serviceNumber,
        completionDate: this.completionDate,
        serviceAmount: this.serviceAmount,
        paymentMethod: this.paymentMethod,
      };
      
      console.log('Form Data:', formData);
      // يمكنك هنا إضافة الكود اللازم لإرسال البيانات إلى السيرفر
    } else {
      alert('يجب الموافقة على الشروط والأحكام قبل تقديم الطلب');
    }
  }
}
