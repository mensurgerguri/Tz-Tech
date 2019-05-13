import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profileImage: '',
    roleId: 3
  };

  repeatPassword = '';
  termsAgreement = false;
  allowRegister = true; //false;


  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  valuechange() {
    this.allowRegister = (this.credentials.password === this.repeatPassword) && this.termsAgreement;
  }

  registerUser() {
    console.log(this.credentials);
    this.authService.registerUser(this.credentials).subscribe(
      (res) => {
        if (JSON.stringify(res).length < 100) { // is not token
          // 1 redirect to profile
        } else {
            // something else
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
