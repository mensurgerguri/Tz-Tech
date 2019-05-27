import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSignUpDialog(){
    this.dialog.open(SignUpComponent)
      // .afterClosed()
      // .subscribe(
      //   result => console.log(result)
      // )
  }

  openSignInDialog(){
    this.dialog.open(SignInComponent)
      // .afterClosed()
      // .subscribe(
      //   result => console.log(result)
      // )
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
