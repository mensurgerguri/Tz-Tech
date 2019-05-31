import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryFieldsComponent } from './add-subcategory-fields.component';

describe('AddSubcategoryFieldsComponent', () => {
  let component: AddSubcategoryFieldsComponent;
  let fixture: ComponentFixture<AddSubcategoryFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcategoryFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcategoryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
