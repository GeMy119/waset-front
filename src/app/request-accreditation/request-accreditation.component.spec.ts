import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccreditationComponent } from './request-accreditation.component';

describe('RequestAccreditationComponent', () => {
  let component: RequestAccreditationComponent;
  let fixture: ComponentFixture<RequestAccreditationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAccreditationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAccreditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
