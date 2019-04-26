import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Validators, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { log } from 'util';
import { CardsComponent } from '../cards/cards.component';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  data:any[];
  message:any;
  title = new FormControl('', [Validators.required,Validators.minLength(2)]);
  description = new FormControl('', [Validators.required,Validators.minLength(2)]);
  constructor(private httpService:ServiceService,private snackBar: MatSnackBar,private dataService:DataService) { }
flag=false;




  ngOnInit() {
    this.dataService.currentMessage.subscribe(message =>
      {
        this.message = message['body'];
        console.log(this.message)
      }

    )

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
   
    if(this.title.value === ""|| this.description.value === ""){
this.snackBar.open("fields cant be empty"," ", {
  duration: 2000,
});
    }
else {
    
    this.httpService.postRequest('createNote',data).subscribe(
      response=>{

        console.log(response)
        this.flag = ! this.flag;
          this.dataService.updateMessage();
      }
    );


  }

}




}
