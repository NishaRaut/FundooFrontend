import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteData:any;
  data:any;
  card:any
  constructor(private httpService:ServiceService) { }
  flag=false;
  ngOnInit() {
  }
  @Output() countChange = new EventEmitter(); 
  
arrayOfColors=[
  [
    {color: "rgb(247, 86, 118)",name:"pink"},
    {color:"darkgoldenrod",name:"darkGolden"},
    {color:"darkgreen",name:"darkGreen"},
    {color:"olive",name:"olive"}
  ],
  [
    {color:"slategray",name:"grey"},
    {color: "rgb(10, 51, 60)",name:"green"},
    {color: "rgb(99, 29, 43)",name:"brown"},
    {color:"rgb(131, 70, 82)",name:"pink"}
  ],
  [
    {color:"rgba(35, 24, 192, 0.651)",name:"blue"},
    {color: "rgb(149, 133, 194)",name:"lightPurple"},
    {color:"rgb(88, 194, 120)",name:"lightPurple"},
    {color:" rgb(134, 134, 92)",name:"darkYellow"}
  ]
]

colorsEditon(name) {
  console.log(name, 'color........');
  this.countChange.emit(name);
  }

  archive(){
    console.log("archive is clicked");
    console.log(this.noteData);
    this.data={
      id:this.noteData.id,
      isArchive:true
    }


    console.log("dsd",this.data.id)

    this.httpService.putRequest('archiveNote/'+this.data.id,null).subscribe(
      response=>{
        console.log(response)
        this.flag = ! this.flag;
      }
    );

    
  }
  reminder(){
    console.log("reminder is clicked");
    console.log(this.noteData);
    this.data={
      id:this.noteData.id,
      isArchive:true
    }


    console.log("dsd",this.data.id)

    this.httpService.putRequest('archiveNote/'+this.data.id,null).subscribe(
      response=>{
        console.log(response)
        this.flag = ! this.flag;
      }
    );
  }
  today()
  {
    let curDate=new Date();
    var val=curDate.toString;
    console.log("date......",curDate);
    console.log("trash clicked",this.noteData.id);
    console.log("reminder is clicked");
    console.log(this.noteData);
    this.data={
      id:this.noteData.id,
      reminder:val
    }


    console.log("dsd",this.noteData.id)

    this.httpService.postRequest('notes/'+this.noteData.id,null).subscribe(
      response=>{
        console.log(response)
        this.flag = ! this.flag;
      }
    );
  }
    

  movetotrash(id){
    console.log("movetotrash");
    
  }
  trash(){
    console.log("trash clicked",this.noteData.id);
    console.log("reminder is clicked");
    console.log(this.noteData);
    this.data={
      id:this.noteData.id,
      isTrash:true
    }


    console.log("dsd",this.noteData.id)

    this.httpService.putRequest('trashNote/'+this.noteData.id,null).subscribe(
      response=>{
        console.log(response)
        this.flag = ! this.flag;
      }
    );
  }

}
