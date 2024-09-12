import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // تأكد من استيراد AppRoutingModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { LogoSliderComponent } from './logo-slider/logo-slider.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './terms/terms.component';
import { PlatformCommissionComponent } from './platform-commission/platform-commission.component';
import { ServicesComponent } from './services/services.component';
import { CancelServiceComponent } from './cancel-service/cancel-service.component';
import { RefundServiceComponent } from './refund-service/refund-service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RequestAccreditationComponent } from './request-accreditation/request-accreditation.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { WasetParcodePageComponent } from './waset-parcode-page/waset-parcode-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    LogoSliderComponent,
    HomeComponent,
    AboutUsComponent,
    TermsComponent,
    PlatformCommissionComponent,
    ServicesComponent,
    CancelServiceComponent,
    RefundServiceComponent,
    ContactUsComponent,
    LoginComponent,
    RequestAccreditationComponent,
    FooterComponent,
    RegisterComponent,
    WasetParcodePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
