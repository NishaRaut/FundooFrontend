import { Component, OnInit,Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ServiceService } from '../services/service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() noteData:any;
  // data: any;
data1:any
  constructor( private httpService:ServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  id:any;
  title= new FormControl(this.data.title);
  discription= new FormControl(this.data.discription);
  color=this.data.color
  ids=this.data.noteId
  ngOnInit() {
    console.log("data from cards component",this.data);
    
    this.getNotes();
    console.log(this.color)
  
  }
  
  getNotes()
  {

    this.httpService.getRequest('allNotes').subscribe(
      response=>{
        this.data=response['body']
        console.log("info",this.data)
      },
      error => {
        console.log('Error', error);
      }
      
    )
  }


  updateNote(data)
  {
this.data1={

  "title":this.title.value,
  "discription":this.discription.value,
  "color":this.color

}
console.log(this.data1)

    this.httpService.putRequest("/updateNote/"+this.ids,this.data1).subscribe(
      response=>{
        console.log(response)
    }

    )

  }
}
