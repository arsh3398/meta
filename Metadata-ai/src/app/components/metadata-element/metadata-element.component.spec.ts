import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataElementComponent } from './metadata-element.component';

describe('MetadataElementComponent', () => {
  let component: MetadataElementComponent;
  let fixture: ComponentFixture<MetadataElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadataElementComponent]
    });
    fixture = TestBed.createComponent(MetadataElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
