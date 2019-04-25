import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-trashicon',
  templateUrl: './trashicon.component.html',
  styleUrls: ['./trashicon.component.scss']
})
export class TrashiconComponent implements OnInit {

  @Input() noteData:any;

  //data:any[];
  constructor(private httpService:ServiceService) { }
  id:any;
  ngOnInit() {

  }
  DeleteNote()
  {

  // this.data= localStorage.getItem(this.noteData.id);
   //console.log("iddd",this.data)


    console.log("id",this.noteData.id)
    this.httpService.deleteRequest('deleteNote/'+this.noteData.id)
    .subscribe(response=>{
      console.log(response)
    })
  }
}
