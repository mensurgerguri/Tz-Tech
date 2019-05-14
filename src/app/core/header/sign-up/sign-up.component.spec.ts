import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';

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
    service = fixture.debugElement.injector.get(AuthenticationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the server to save a user', () => {
    const spy = spyOn(service, 'registerUser').and.callFake(() => {
      return Observable.empty();
    });

    component.registerUser();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new user if token is returned from the server', () => {
    
    const spy = spyOn(service, 'registerUser').and.callFake(() => {
      let user = { id: 0};
      return Observable.from([ user ]);
    });

    component.registerUser();

    expect(component.responseFromServer).toBeGreaterThan(100);
  });

  it('should notify if user already exist', () => {
    // let user = { id: 0};
    // const spy = spyOn(service, 'registerUser').and.callFake(() => {
    //   return Observable.from([ user ]);
    // });

    // component.registerUser();

    // expect(component.loggedInUser.id).toBe(0);
    // expect(component.warningMassage)
  });
});
