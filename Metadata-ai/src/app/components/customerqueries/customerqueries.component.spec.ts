import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerqueriesComponent } from './customerqueries.component';

describe('CustomerqueriesComponent', () => {
  let component: CustomerqueriesComponent;
  let fixture: ComponentFixture<CustomerqueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerqueriesComponent]
    });
    fixture = TestBed.createComponent(CustomerqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
