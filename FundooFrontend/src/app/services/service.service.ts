import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  data:any;


  constructor(private http:HttpClient) { }

  private url ='http://localhost:7070/'

  // public login(login: Login):any {
  //   return this.http.post(this.url+'login', login,{observe:"response"});
  // }
  public login(data):any {
    return this.http.post(this.url+'login', data);
  }
}
