import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundServiceComponent } from './refund-service.component';

describe('RefundServiceComponent', () => {
  let component: RefundServiceComponent;
  let fixture: ComponentFixture<RefundServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
