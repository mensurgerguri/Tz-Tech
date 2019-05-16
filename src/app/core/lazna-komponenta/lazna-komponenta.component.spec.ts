import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaznaKomponentaComponent } from './lazna-komponenta.component';

describe('LaznaKomponentaComponent', () => {
  let component: LaznaKomponentaComponent;
  let fixture: ComponentFixture<LaznaKomponentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaznaKomponentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaznaKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
