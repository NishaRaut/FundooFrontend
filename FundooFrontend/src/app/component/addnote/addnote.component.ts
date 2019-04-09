import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {

  constructor() { }
flag=false;
  ngOnInit() {
    
  }


  showNote() {
  
    this.flag = ! this.flag;
  }

}
