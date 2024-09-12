import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  logos = [
    { image: '../../assets/images.png' },
    { image: '../../assets/Adl.png' },
    { image: '../../assets/gaw.png' },
    { image: '../../assets/est.png' },
    { image: '../../assets/logo.jpeg' },
    
    // أضف المزيد من الشعارات هنا
  ];

  logoChunks: any[] = [];
  logosPerSlide = 3; // عدد الشعارات في كل شريحة
  currentLogoSlide = 0;

  ngOnInit() {
    this.logoChunks = this.chunkArray(this.logos, this.logosPerSlide);
  }

  chunkArray(arr: any[], size: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  prevLogoSlide() {
    this.currentLogoSlide = (this.currentLogoSlide > 0) ? this.currentLogoSlide - 1 : this.logoChunks.length - 1;
  }

  nextLogoSlide() {
    this.currentLogoSlide = (this.currentLogoSlide < this.logoChunks.length - 1) ? this.currentLogoSlide + 1 : 0;
  }

  setLogoSlide(index: number) {
    this.currentLogoSlide = index;
  }
}

