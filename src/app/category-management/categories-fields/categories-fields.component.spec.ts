import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFieldsComponent } from './categories-fields.component';

describe('CategoriesFieldsComponent', () => {
  let component: CategoriesFieldsComponent;
  let fixture: ComponentFixture<CategoriesFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
