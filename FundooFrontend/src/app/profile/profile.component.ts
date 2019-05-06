import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
 
data:any;
imageChangedEvent: any = '';
croppedImage;
constructor(private httpService:DataService,

  public dialogRef: MatDialogRef<ProfileComponent>) { }

ngOnInit() {

}

fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;
}

imageCropped(event:any) {
console.log(event);
this.croppedImage = event;
}
 
setProfile()
{
  if(this.croppedImage!=null)
  {
    this.dialogRef.close(this.croppedImage);
  }
}

}
