import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditLabelComponent } from 'src/app/edit-label/edit-label.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // item:any[];
  labels: any;
  search:string;
  titlename:string;
  data: any[];
  profilePic: any;
  icon: any = "view_stream"
  constructor
    (private router: Router, public dialog: MatDialog, private httpService: ServiceService,
      private dataService: DataService,private searchService:SearchService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    // console.log("nisha",this.item);
    this.getLabels();
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }

  notes() {
    this.router.navigate(['dashboard', 'addnote']);
    this.dataService.changeMsg('update');
  }

  archive() {
    this.router.navigate(['dashboard', 'archive']);
  }
  trash() {
    this.router.navigate(['dashboard', 'trash']);
  }
  reminder() {
    
      this.titlename="Reminder"
      this.router.navigateByUrl('/dashboard/reminder');
      // this.snackBar.open('Clicked Reminder', '', {
      // duration: 2000,
      // });
      }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditLabelComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  setGridAndListView() {
    if (this.icon === 'view_stream') {
      this.icon = 'dashboard';
      console.log("hiiii....", this.icon)
      this.dataService.viewChangeMsg('column wrap')
    } else {
      this.icon = "view_stream";
      console.log("ghhjj", this.icon)
      this.dataService.viewChangeMsg('row wrap')
    }
  }


  getImage() {
    this.profilePic = localStorage.getItem("login");

    console.log("4444444444" + this.profilePic);
  }

  getLabels() {

    console.log("Hiiiiiiiii")
    this.httpService.getRequest('allLabels').subscribe(
      (response: any) => {
        this.data = response['body'];
        console.log("info......", this.data)
      },
      error => {
        console.log('Error', error);
      }

    )
  }


  // openDialog1(): void {
  //   const dialogRef = this.dialog.open(ProfileComponent, {
  //     width: '350px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  setProfile() {
    this.httpService.putRequest('user/profileupload', null)
  }

  lookup(){
    this.searchService.changeMessageSearch(this.search);
    }



  openDialog1() {
    const dialogRef = this.dialog.open(ProfileComponent,
      {
        width: '400px',
        height: '500px'
      });

    dialogRef.afterClosed().subscribe(
      (x: any) => {
        if (x != null) {
          console.log("hjkjhkjh", x.file)
          this.httpService.uploadProfileImage('user/profileupload', x.file).subscribe(
            value => {
              console.log(value);
            }
          );
        }
      })
  }

  
}

