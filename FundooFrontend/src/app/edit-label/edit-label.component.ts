import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  
  constructor(private httpService:ServiceService,
  public dialogRef: MatDialogRef<EditLabelComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) 
  {

  }

  ngOnInit() {
    this.getNotes();
  }
labels:any;


 

getNotes()
{

  console.log("Hiiiiiiiii")
  this.httpService.getRequest('allLabels').subscribe(
    response=>{
      this.data=response['body']
      console.log("info",this.data)
    },
    error => {
      console.log('Error', error);
    }
    
  )
}
}
