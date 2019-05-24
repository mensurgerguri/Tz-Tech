import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenPayload } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

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

  email = '';
  sentTo = '';
  sent = false;
  isValid = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.credentials).subscribe();
    this.sentTo = this.credentials.email;
    this.sent = true;
  }

  validateForm() {
    this.isValid = this.credentials.email !== '';
  }

}
