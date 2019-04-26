import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditLabelComponent } from 'src/app/edit-label/edit-label.component';
import { MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 // item:any[];
  labels:any;
  data:any[];
  constructor
  (private router:Router,public dialog: MatDialog,private httpService:ServiceService) { }

  ngOnInit() {
   // console.log("nisha",this.item);
    this.getNotes();
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
  trash(){
    this.router.navigate(['dashboard','trash']);
  }
  reminder(){
    this.router.navigate(['dashboard','reminder']);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditLabelComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

getNotes()
{

  console.log("Hiiiiiiiii")
  this.httpService.getRequest('allLabels').subscribe(
    (response:any)=>{
      this.data=response['body'];
      console.log("info......",this.data)
    },
    error => {
      console.log('Error', error);
    }
    
  )
}

}

