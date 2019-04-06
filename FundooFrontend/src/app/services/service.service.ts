import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Register } from '../model/register';
import { Forgot } from '../model/forgot';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  [x: string]: any;


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:member-ordering
  data: any;

  private url = 'http://localhost:8080/';
    // tslint:disable-next-line:align
    public register(user: Register): any {
  return this.http.post<Register>(this.url + 'register', user);
    }
      public login(user: Login): any {
    return this.http.post<Login>(this.url + 'login', user);
  }
  public forgot(email:any): any {
    return this.http.post<Forgot>(this.url+email, + 'forgot', );
  }
  

  
}

