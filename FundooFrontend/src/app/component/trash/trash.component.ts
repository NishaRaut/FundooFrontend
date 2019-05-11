import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() noteData: any;
  data: any[];
  constructor(private dataService: DataService, private httpService: ServiceService) {
    this.dataService.changemessage(false, true);
  }
  id: any;
  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.data = response['body']
        console.log("trash note", this.data)
      }

    )

  }








  getId(item) {
    this.id = item.id
  }

  DeleteNote() {
    this.httpService.deleteRequest('deleteNote/' + this.id)
      .subscribe(response => {
        console.log(response)
        this.dataService.changemessage(false, true);
      })

  }



  restorNote() {
    console.log("trash clicked", this.id);
    console.log("reminder is clicked");


    console.log("dsd", this.id)

    this.httpService.putRequest('trashNote/' + this.id, null).subscribe(
      response => {
        console.log(response)
        this.dataService.changemessage(false, true);
      }

    );
  }
}



