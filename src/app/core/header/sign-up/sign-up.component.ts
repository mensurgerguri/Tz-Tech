import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { MatDialog } from '@angular/material';


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
  takenUserEmails: string[];
  loggedInUser: TokenPayload;
  responseFromServer;

  // form validation fields
  repeatPassword = '';
  termsAgreement = false;
  warningMassage;
  userAlreadyExist = false;
  formIsValid = false;
  pswMatch = true;


  constructor(private authService: AuthenticationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.authService.getExistingEmail().subscribe((res: string[]) => {
      this.takenUserEmails = res;
    });
  }

  validateRegForm() {
    this.userAlreadyExist = false;
    this.checkIfUserAlreadyExist();

    this.formIsValid = (this.credentials.email !== '') &&
      (this.credentials.password === this.repeatPassword) &&
      (this.credentials.password !== '') &&
      this.termsAgreement &&
      !this.userAlreadyExist;

    this.pswMatch = (this.credentials.password === this.repeatPassword);
  }

  checkIfUserAlreadyExist() {
    this.takenUserEmails.forEach((email) => {
      if (email['email'] === this.credentials.email) {
        this.userAlreadyExist = true;
        return;
      }
    });
  }

  openTermsDialog() {
    this.dialog.open(TermsComponent)
  }

  registerUser() {
    console.log(this.credentials);
    this.authService.registerUser(this.credentials).subscribe(
      (res) => {
        this.responseFromServer = JSON.stringify(res);
        if (JSON.stringify(this.responseFromServer).length < 100) { // is not token
          this.warningMassage = JSON.stringify(res);
        } else {
          this.loggedInUser = this.credentials;
          this.router.navigate(['/']);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
