import { AuthenticationService } from './../shared/services/authentication.service';

import { UserDetails } from './../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserData } from './../core/dummy-component/dummy-component.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor(private auth: AuthenticationService, private HttpClient: HttpClient) { }

  UserDetails: any;

  user: any;

  ngOnInit() {

    this.address();
  }

  public address() {

    this.auth.address().subscribe((res: any) => {
      console.log(res[0]);
      this.user = res[0];
  });
}
}

