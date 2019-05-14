import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokusComponent } from './pokus.component';

describe('PokusComponent', () => {
  let component: PokusComponent;
  let fixture: ComponentFixture<PokusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
