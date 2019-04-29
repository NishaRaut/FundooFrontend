import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  
  data:any[];
  reminders:any
 // alldata: any[];
  constructor(private httpService:ServiceService, private dataService:DataService,
    private matsnackbar: MatSnackBar) { 
    this.dataService.changemessage(true,false)
  }
  id:any;
  ngOnInit() {
    // this.dataService.currentMessage.subscribe(
    //   (response:any)=>{
    //     this.data=response['body']
    //     console.log(this.data)
    //     this.reminders=this.data.filter(item=> item.reminder)
    //     console.log("reminder",this.reminders)

    //   }
    // )
    this.getNotes();
      }


      getNotes() {
        this.httpService.getRequestNote('allNotes',false,false).subscribe(
          response=>{
            this.data=response['body']
            this.reminders=this.data.filter(item=> item.reminder)
            console.log("info",this.data)
            console.log("reminder",this.reminders)

          },
          error => {
            console.log('Error', error);
          }
          
        )
      }
    }
       // this.alldata=this.data.filter(item => item.reminder);
       // console.log("e note",this.data)
      //  if(response.statuscode===1){
      //   this.matsnackbar.open(response.body.statusMessage +' !!', 'End now', {
      //   duration: 1000,
      //   });
        
      //   }
      //   },
      //   (error) => {console.log("error",error);}
      //   );
      //   }
      // }
    


//   getId(item)
// {
//   this.id=item.id
// }
//   }


//}
