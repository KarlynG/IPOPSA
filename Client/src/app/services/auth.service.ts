import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient,
    private router: Router) { }

  getUsers(){
    return this.http.get<any>(environment.ApiUrl + 'users');
  }

  singUp(_user  : any ){
   return this.http.post<any>(environment.PRIVATE_URL + '/signup', _user);
    //return this.http.post<any>(`${environment.PRIVATE_URL}/signup/${_user}`);
  }

  singIn(_user  : any ){
    return this.http.post<any>(environment.PRIVATE_URL + '/signin', _user);
  }

  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['./signin']);
  }
}
