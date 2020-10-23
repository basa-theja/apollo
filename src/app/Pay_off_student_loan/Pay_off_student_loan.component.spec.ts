import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay_off_student_loanComponent } from './Pay_off_student_loan.component';

describe('Pay_off_student_loanComponent', () => {
  let component: Pay_off_student_loanComponent;
  let fixture: ComponentFixture<Pay_off_student_loanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay_off_student_loanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay_off_student_loanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
