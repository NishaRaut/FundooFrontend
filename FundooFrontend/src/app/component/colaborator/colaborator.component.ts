import { Component, OnInit, Input, Inject } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {
  //@Input() noteData:any;
  //data:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  colabData: any;
  
  constructor(private httpService: ServiceService, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getcolaborator();
  }


  a = localStorage.getItem('email')
  b = localStorage.getItem('userFirstName')
  c = localStorage.getItem('userLastName')


  // getId(item)
  // {
  //   this.id=item.id
  // }
  getcolaborator() {

    console.log("Hiiiiiiiii colaborator")
    this.httpService.getRequest('note/list/collab?noteId=' + this.data.id).subscribe(
      response => {
        // console.log("response after label get: ", response);

        this.colabData = response['body']
        console.log(" colab info", this.colabData)

      },
      error => {
        console.log('Error', error);
      }

    )
  }
  removeColab(item)
  {
   console.log("#######",this.data.id);
   console.log("!!!!!!!!",item.email)
   this.httpService.putRequest('notes/removecollaborator/'+this.data.id,item.email).subscribe(
    response=> {
     console.log("ddddddd",response)
    
     if(response.body.statusCode == 4){
       this.snackBar.open("reminder removed successfully", 'End now', {
         duration: 1000,
   });
   //this.dataService.updateMessage();
      }
       
     }
   )
 }
  writeEmail() {
    //this.flag = false;

    const data = {
      "email": this.email.value,


    }
    console.log(data.email)

    if (this.email.value === '') {
      this.snackBar.open("fields cant be empty", " ", {
        duration: 2000,
      });
    }
    else {
      console.log("hello Id", this.data.id)
      console.log("Email", data.email)
      this.httpService.getRequest('notes/removecollaborator/{id}?email=item.email&id=this.data.id').subscribe(
        response => {

          console.log(response)

          //this.dataService.updateMessage();
          if (response.body.statusCode == 4) {
            this.snackBar.open(response.body.statusMessage + ' !!', 'End now', {
              duration: 1000,
            });
          }
        }

      );

    }
  }
}
