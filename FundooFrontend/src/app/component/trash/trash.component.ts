import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() noteData:any;
  data:any[];
  archived: boolean=false;
  trashed: boolean=true;
 @Input() noteID:any;
  constructor( private dataService:DataService,private httpService:ServiceService) { }
id:any;
  ngOnInit() {
    console.log("getting",this.data);
    
    this.getNotes();

  }

getId(item)
{
this.noteID  =item.id;
console.log(this.noteID)
}
  // getNotes()
  // {
  //   this.httpService.getRequest('allNotes').subscribe(
  //     response=>{
  //       this.data=response['body']
  //       console.log("info",this.data)
  //     },
  //     error => {
  //       console.log('Error', error);
  //     }
      
  //   )
  // }

  getNotes()
  {
    this.httpService.getRequestNote('allNotes',this.archived,this.trashed).subscribe(
      (response:any)=>{
        this.data=response.body
        console.log("info",response.body)
      
      },
      error => {
        console.log('Error', error);
      }
      
    
    )
  }

  
  
}

