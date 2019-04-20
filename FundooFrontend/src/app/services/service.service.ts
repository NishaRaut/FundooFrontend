import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login';
import { Register } from '../model/register';
import { Forgot } from '../model/forgot';
import { EmailValidator } from '@angular/forms';
import { Reset } from '../model/Reset';

import { Observable } from 'rxjs';
import { NoteDTO } from '../model/note';
//import { NoteDTO } from '../model/noteDTO';

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
  public reset(setp:Reset,token:string): any{
    console.log(setp)
    return this.http.put(this.url+'resetpassword/'+token,setp);
  }
  getRequest(url): any {
    return this.http.get(this.url+url,{
      headers:new HttpHeaders().set("jwt_Token",localStorage.getItem("login")), 
    observe:'response'});
  }
  postRequest(url,noteDto:NoteDTO): any {
    return this.http.post(this.url+url,noteDto,{
      headers:new HttpHeaders().set("jwt_Token",localStorage.getItem("login")), 
    observe:'response'});
  }


  putRequest(url,noteDto:NoteDTO): any {
    return this.http.put(this.url+url,noteDto,{
      headers:new HttpHeaders().set("jwt_Token",localStorage.getItem("login")), 
    observe:'response'});
  }



  deleteRequest(url): any {
    return this.http.delete(this.url+url,{
      headers:new HttpHeaders().set("jwt_Token",localStorage.getItem("login")), 
    observe:'response'});
  }
  
  
}

