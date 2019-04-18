import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data:any[];
  constructor( private httpService:ServiceService) { }

  ngOnInit() {
    console.log("getting",this.data);
    
    this.getNotes();
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
  
}