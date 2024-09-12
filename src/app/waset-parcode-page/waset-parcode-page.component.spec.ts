import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasetParcodePageComponent } from './waset-parcode-page.component';

describe('WasetParcodePageComponent', () => {
  let component: WasetParcodePageComponent;
  let fixture: ComponentFixture<WasetParcodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasetParcodePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasetParcodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
