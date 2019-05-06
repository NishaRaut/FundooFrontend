import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditLabelComponent } from 'src/app/edit-label/edit-label.component';
import { MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';
import { ProfileComponent } from 'src/app/profile/profile.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 // item:any[];
  labels:any;
  data:any[];
  icon:any="view_stream"
  constructor
  (private router:Router,public dialog: MatDialog,private httpService:ServiceService,
    private dataService:DataService) { }

  ngOnInit() {
   // console.log("nisha",this.item);
    this.getLabels();
  }

  logout()
  {
    localStorage.removeItem('login');
this.router.navigate(['login']);


  }
  notes(){
    this.router.navigate(['dashboard','addnote']);
    this.dataService.changeMsg('update');

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



setGridAndListView(){
  if(this.icon ==='view_stream'){
  this.icon='dashboard';
  this.dataService.viewChangeMsg('column wrap')
  }else{
  this.icon ="view_stream";
  this.dataService.viewChangeMsg('row wrap')
  }
  }

getLabels()
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


openDialog1(): void {
  const dialogRef = this.dialog.open(ProfileComponent, {
    width: '350px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

setProfile()
{
  this.httpService.putRequest('user/profileupload',null)
}
}

