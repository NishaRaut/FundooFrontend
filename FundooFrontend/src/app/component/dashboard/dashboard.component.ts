import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  item:any[];
  constructor
  (private router:Router) { }

  ngOnInit() {
    console.log("nisha",this.item);
    
  }

  logout()
  {
    localStorage.removeItem('login');
this.router.navigate(['login']);


  }
  notes(){
    this.router.navigate(['dashboard','addnote']);
  }
  archive(){
    this.router.navigate(['dashboard','archive']);
  }
  reminder(){
    this.router.navigate(['dashboard','reminder']);
  }

}
