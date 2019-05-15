import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  // @Input() noteData:any;
  data: any[];
  //@Input() noteID:any;
  constructor(private dataService: DataService, private httpService: ServiceService) {
    this.dataService.changemessage(true, false);
  }
  id: any;
  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.data = response['body']
        console.log("archive note", this.data)
      }

    )

  }

  getId(item) {
    this.id = item.id
  }

}