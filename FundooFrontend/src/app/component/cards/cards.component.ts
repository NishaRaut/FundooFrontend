import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data:any[];
  constructor( private httpService:ServiceService,public dialog: MatDialog) { }

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
  openDialog(item): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      
     height:'200px',
      // data: {name:'info'}
    
      data: {
       // id: item.userid,
        title: item.title,
        discription:item.discription,
        color:item.color,
        noteId:item.id,
        reminder:item.reminder,
      //  label:item.label,
      //  collabuser:data.collabuser
       
  
        
          
  
    }
    });
   


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  
}
