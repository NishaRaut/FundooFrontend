import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  @Input() noteData:any;
  data:any[];
  constructor(private httpService:ServiceService) { }

  ngOnInit() {
    console.log("getting",this.data);
    
    this.getNotes();
  }
  getNotes() {
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
