import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryFieldsComponent } from './add-category-fields.component';

describe('AddSubcategoryFieldsComponent', () => {
  let component: AddCategoryFieldsComponent;
  let fixture: ComponentFixture<AddCategoryFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
