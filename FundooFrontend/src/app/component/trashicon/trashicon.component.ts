import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trashicon',
  templateUrl: './trashicon.component.html',
  styleUrls: ['./trashicon.component.scss']
})
export class TrashiconComponent implements OnInit {
@Input() card:any;
  noteData:any
  //data:any[];
  constructor(private httpService:ServiceService,private dataService:DataService) { }
  id:any;
  ngOnInit() {

console.log("Card id in Trash"+this.card.id);
  }


getId()
{

}

  DeleteNote()
  {

  // this.data= localStorage.getItem(this.noteData.id);
   //console.log("iddd",this.data)


   //console.log("id",this.noteData.id)
    this.httpService.deleteRequest('deleteNote/'+this.card.id)
    .subscribe(response=>{
      console.log(response)
      this.dataService.updateMessage();
    })

  }
}
