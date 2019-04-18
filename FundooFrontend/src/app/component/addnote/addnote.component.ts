import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Validators, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { log } from 'util';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  data:any
  title = new FormControl('', [Validators.required,Validators.minLength(2)]);
  description = new FormControl('', [Validators.required,Validators.minLength(2)]);
  constructor(private httpService:ServiceService,private snackBar: MatSnackBar) { }
flag=false;
  ngOnInit() {
    
  }


  showNote() {
  
    this.flag = ! this.flag;
  }



  createNote()
  {
    this.flag = false;
  
    const data={
      "title":this.title.value,
      "discription":this.description.value

    }
    if(this.title.value === ""|| this.description.value === ""){}
else {
    
    this.httpService.postRequest('createNote',data).subscribe(
      response=>{
        console.log(response)
        this.flag = ! this.flag;
      }
    );

  }
}




}
