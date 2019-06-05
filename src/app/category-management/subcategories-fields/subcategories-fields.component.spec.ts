import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesFieldsComponent } from './subcategories-fields.component';

describe('SubcategoriesFieldsComponent', () => {
  let component: SubcategoriesFieldsComponent;
  let fixture: ComponentFixture<SubcategoriesFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriesFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
