import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCashComponent } from './get-cash.component';

describe('GetCashComponent', () => {
  let component: GetCashComponent;
  let fixture: ComponentFixture<GetCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
