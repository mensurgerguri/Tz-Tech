import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserDetails, TokenPayload, TokenResponse } from '../models/user.model';
import { getToken } from '@angular/router/src/utils/preactivation';


@Injectable()
export class AuthenticationService {

  private token = '';
  private rememberMeToken = '';

  constructor(private http: HttpClient) { }

  public registerUser(user: TokenPayload): Observable<any> {
    return this.http.post(`http://localhost:8080/users/register`, user);
  }
  public getExistingEmail() {
    return this.http.get('http://localhost:8080/users/getEmails');
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post('http://localhost:8080/users/login', user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token);
    this.token = token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  getUserDetailsFromRememberMe(): UserDetails {
    const token = this.getRememberMeToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token;
  }

  private getRememberMeToken(): string {
    if (!this.rememberMeToken) {
      this.rememberMeToken = localStorage.getItem('rememberMe');
    }
    return this.rememberMeToken;
  }

  resetPassword(user: TokenPayload): Observable<any> {
    return this.http.post(`http://localhost:8080/users/resetPassword`, user);
  }

  rememberMe() {
    const token = this.getToken();
    localStorage.setItem('rememberMe', token);
  }

  removeRememberMe() {
    this.rememberMeToken = '';
    window.localStorage.removeItem('rememberMe');
  }


  // public isLoggedIn(): boolean {
  //   const user = this.getUserDetails();
  //   if (user) {
  //     return user.exp > Date.now() / 1000;
  //   } else {
  //     return false;
  //   }
  // }


  // public logout(): void {
  //   this.token = '';
  //   window.localStorage.removeItem('usertoken');
  //   this.router.navigateByUrl('/');
  // }
}
