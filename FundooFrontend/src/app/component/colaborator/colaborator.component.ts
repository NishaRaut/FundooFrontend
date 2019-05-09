import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {
  @Input() noteData:any;
  id:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private httpService:ServiceService,private snackBar: MatSnackBar) { }
 
  ngOnInit() {
  
  }
   
 
   a =localStorage.getItem('email')
  b =localStorage.getItem('userFirstName')
   c =localStorage.getItem('userLastName')


  getId(item)
  {
    this.id=item.id
  }
  
  writeEmail()
{
  //this.flag = false;
  
    const data={
      "email":this.email.value,
      

    }
     console.log(this.email.value)
  
   if(this.email.value==='')
   {
    this.snackBar.open("fields cant be empty"," ", {
      duration: 2000,
    });
        }
        else{
  this.httpService.putRequest('/notes/addcollaborator/',this.id).subscribe(
    response=>{

      console.log(response)
      
        //this.dataService.updateMessage();
        if(response.body.statusCode == 4){
          this.snackBar.open(response.body.statusMessage +' !!', 'End now', {
            duration: 1000,
      });
          }
      } 
   
   );
  
  }
}
}
