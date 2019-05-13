import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let service: AuthenticationService;



  beforeEach(() => {

    service = new AuthenticationService(null);
    component = new SignUpComponent(service);

    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [AuthenticationService]
    });

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the server to save a user', () => {
    const spy = spyOn(service, 'registerUser').and.callFake(t => {
      return Observable.empty();
    });

    component.registerUser();

    expect(spy).toHaveBeenCalled();
  });

});
