import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from './services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private contactUsService: ContactUsService) {
    // Define the form controls and validation
    this.contactForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneN: ['', Validators.required],
      subject: ['', Validators.required],
      subscribe: [false]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactUsService.sendContact(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Request sent successfully', response);
          this.successMessage = 'تم إرسال الطلب بنجاح. سنتواصل معك قريباً.'; // Set the success message
          this.errorMessage = ''; // Clear any previous error messages
          this.contactForm.reset(); // Reset form after submission
        },
        error: (error) => {
          console.error('Error sending request', error);
          this.errorMessage = 'فشل إرسال الطلب. حاول مرة أخرى.';
          this.successMessage = ''; // Clear success message if error occurs
        }
      });
    } else {
      this.errorMessage = 'يرجى ملء جميع الحقول بشكل صحيح.';
    }
  }
}
