import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data: any[];
  archived: boolean = false
  trashed: boolean = false
  message: any;
  get: any
  reminderValue: any;
  dateNow : Date = new Date();
  constructor(private httpService: ServiceService, public dialog: MatDialog,
    private dataService: DataService) {

  }

  ngOnInit() {

    this.getNotes();

    this.gridView();
    this.dataService.update.subscribe(
      message => {
        this.get = message
        this.getNotes();
        console.log("data in ngonit", this.data, "here");
      }
    )
  }


  gridView() {
    this.dataService.currentMessageGrid.subscribe(
      response => {
        console.log("hiiii")
        console.log("list...................", response)
        this.message = response;
        console.log("list...", this.message)
      }
    );
  }

  // getNotes() {

  //   this.dataService.currentMessage.subscribe(
  //     data => {
  //       this.data = (data as any);
  //       console.log("data at card: ", this.data);
  //       // this.dataService.updateMessage()


  //     },
  //     error => {
  //       console.log("error at card component");
  //     }
  //   );

  // }
  getNotes()
  {
    this.httpService.getRequestNote('allNotes',this.archived,this.trashed).subscribe(
      response=>{
        this.data=response['body']
        console.log("info",this.data)

      },
      error => {
        console.log('Error', error);
      }
    )
  }
  openDialog(item): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '200px',
    

      data: {
      
        title: item.title,
        discription: item.discription,
        color: item.color,
        noteId: item.id,
        reminder: item.reminder,
       }
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  removeReminder(item)
  {
    
    console.log("curremt time",this.dateNow)
     this.reminderValue= this.dateNow.toISOString();
    
     console.log(this.reminderValue);
    //   this.reminderValue=JSON.stringify(this.date.value);
       console.log("Reminder Value",this.reminderValue)
      
      //  console.log(this.reminder)
      //  console.log(note.title)
       
       this.httpService.postReminder('/notes/remove/',item.noteId).subscribe(
         response=>{
          // this.updateService.updateMessage();
           console.log(response);
         }
       )
       //console.log(note.reminder);

  }

}
