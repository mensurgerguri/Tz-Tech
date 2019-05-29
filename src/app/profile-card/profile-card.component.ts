import { UserDetails } from './../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserData } from './../core/dummy-component/dummy-component.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  UserDetails: any;

  constructor(private auth: AuthenticationService, private HttpClient: HttpClient) { }

  user: UserDetails;

  ngOnInit() {
  this.user = this.auth.getUserDetails();

 }
  }

