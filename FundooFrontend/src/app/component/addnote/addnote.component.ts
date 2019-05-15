import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { log } from 'util';
import { CardsComponent } from '../cards/cards.component';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  @ViewChild(CardsComponent) child: { getNotes: () => void; };
  data: any[];
  message: any;
  title = new FormControl('', [Validators.required, Validators.minLength(2)]);
  description = new FormControl('', [Validators.required, Validators.minLength(2)]);
  setColor: any;
  constructor(private httpService: ServiceService, private snackBar: MatSnackBar, private dataService: DataService,  private snackbar: MatSnackBar) { }
  flag = false;

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.message = message['body'];
      console.log(this.message)
    }

    )

  }
  receiveColorEvent($event) {
    // console.log("event at add note: ",$event);
    this.setColor = $event;
    // console.log(this.setColor);

  }

  showNote() {

    this.flag = !this.flag;
  }



  createNote() {
    this.flag = false;

    const data = {
      "title": this.title.value,
      "discription": this.description.value,
      "color": this.setColor
    }

    if (this.title.value === "" || this.description.value === "") {
      this.snackBar.open("fields cant be empty", " ", {
        duration: 2000,
      });
    }
    else {

      this.httpService.postRequest('createNote', data).subscribe(
        response => {

          console.log(response)
          this.flag = !this.flag;
          // this.dataService.updateMessage();
          this.child.getNotes();
          if (response.body.statusCode == 900) {
            this.snackbar.open(response.body.statusMessage + ' !!', 'End now', {
              duration: 1000,
            });
           // this.dataService.updateMessage();
          }

      error => {
        console.log('Error', error);
      }
        }
      );

      // this.title=null;
      // this.description=null;
      this.flag= true;
    }

  }




}
