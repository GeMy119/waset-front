import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCommissionComponent } from './platform-commission.component';

describe('PlatformCommissionComponent', () => {
  let component: PlatformCommissionComponent;
  let fixture: ComponentFixture<PlatformCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
