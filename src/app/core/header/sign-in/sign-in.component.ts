import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenPayload } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profileImage: '',
    roleId: 0
  };
  loggedInUser: TokenPayload;
  warning: string;
  showWarning = false;

  formIsValid = false;

  constructor(private authService: AuthenticationService, private dialogRef: MatDialogRef<SignInComponent>) { }

  ngOnInit() {
  }

  validateRegForm() {
    this.formIsValid = (this.credentials.email !== '') &&
      (this.credentials.password !== '');
  }

  login() {
    this.authService.login(this.credentials).subscribe((res) => {

        if (res.token) {
          this.dialogRef.close();
          this.loggedInUser = this.authService.getUserDetails();
          console.log(this.loggedInUser.email + ' is logged in app');
        }

        // this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)

        const errorMessage = err['error']['text'];

        if (errorMessage) {
          this.warning = errorMessage;
          this.showWarning = true;
        }
      }
    );
  }

}
