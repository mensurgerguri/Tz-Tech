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

<<<<<<< HEAD
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
  allowRegister = false;
  loggedInUser;
  warningMassage;
  responseFromServer;


  constructor(private authService: AuthenticationService, private router: Router, private dialog: MatDialog) { }

=======
export class SignUpComponent implements OnInit {
 
  constructor() { }
>>>>>>> 19e66317bf982c04b55c28f529bd025649a5b5df
  ngOnInit() {
    
  }

  valuechange() {
    this.allowRegister = (this.credentials.password === this.repeatPassword) && this.termsAgreement;
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

