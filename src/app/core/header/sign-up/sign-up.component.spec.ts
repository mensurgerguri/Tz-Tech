import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { tick, fakeAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

class RouterStub {
  navigate(params) {
  }
}

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let service: AuthenticationService;

  beforeEach(() => {
    service = new AuthenticationService(null);
    component = new SignUpComponent(service, null, null);

    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        AuthenticationService,
        { provide: Router, useClass: RouterStub }
      ],
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

  it('should add new user if token is returned from the server', (done) => {
    const spy = spyOn(service, 'registerUser').and.callFake(() => {
      const user = { id: 0 };
      let fakeToken = { message: 'e7feAY4x3NNBJsirsZ93xVh5knS5Qbtdob1JYNFr1JyBuiq1JvigjuBzPH5c0OQwTsWZ2rLtGPVIFZjNZHMOCNEvzCvyalCUrIvyN' };
      return Observable.from([fakeToken]);
    });

    new Promise((res, rej) => {
      component.registerUser();
      res();
    })
      .then(() => {
        expect(component.responseFromServer.length).toBeGreaterThan(100);
        done();
      });
  });

  it('should notify if user already exist', (done) => {
    const spy = spyOn(service, 'registerUser').and.callFake(() => {
      const fakeMessage = { message: 'User with this email already exists!' };
      return Observable.from([fakeMessage]);
    });

    new Promise((res, rej) => {
      component.registerUser();
      res();
    })
      .then(() => {
        expect(component.responseFromServer).toContain('email already exists');
        done();
      });
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    const router = TestBed.get(Router);
    let location: Location;
    location = TestBed.get(Location);
    router.navigate(['']);
    tick();
    expect(location.path()).toBe(''); 
  }));

});
