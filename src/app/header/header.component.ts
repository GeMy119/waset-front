import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // الاشتراك في حالة تسجيل الدخول
    this.authService.isLoggedIn().subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}

