import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestAccreditationComponent } from './request-accreditation/request-accreditation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './terms/terms.component';
import { PlatformCommissionComponent } from './platform-commission/platform-commission.component';
import { CancelServiceComponent } from './cancel-service/cancel-service.component';
import { RefundServiceComponent } from './refund-service/refund-service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { WasetParcodePageComponent } from './waset-parcode-page/waset-parcode-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'request-accreditation', component: RequestAccreditationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'platform-commission', component: PlatformCommissionComponent },
  { path: 'cancel-service', component: CancelServiceComponent },
  { path: 'refund-service', component: RefundServiceComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'waset', component: WasetParcodePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
