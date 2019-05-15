import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  @Input() noteData: any;
  data: any[];
  constructor( private dataService: DataService, private httpService: ServiceService) {
    this.dataService.changemessage(false, true);
  }
  id: any;
  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.data = response['body']
        console.log("pinned note", this.data)
      }

    )

  }
  getId(item) {
    this.id = item.id
  }

  pinNote() {
    this.httpService.putRequest('pinNote/',this.id)
      .subscribe(response => {
        console.log(response)
        this.dataService.changemessage(false, true);
      })

  }

}
