import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Reset } from 'src/app/model/Reset';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  token: string;
  reset:Reset=new Reset();

  constructor(
    private formBuilder: FormBuilder, 
    private serviceService: ServiceService, 
    private route: ActivatedRoute,
    private router: Router,
    private snackbar:MatSnackBar) 
    { }
  password = new FormControl('', [Validators.required, Validators.min(3)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.min(3)]);
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
  }
  submit(){
    console.log(Reset)
    if(this.password.value==this.confirmPassword.value){
      this.reset.password=this.password.value;
      this.reset.confirmPassword=this.confirmPassword.value;

      this.serviceService.reset(this.reset,this.token).subscribe(

  
  data => {
    console.log(data);
    console.log("$$$$$$$$$$$$$$$$$$$$ hello",data.statusCode)
    if (data.statusCode === 200) {
      this.snackbar.open(data.statusMessage, ' reset successfully', {
        duration: 2000,
    
      });
      this.router.navigate(['login']);

    } else {
      console.log(data);
      this.snackbar.open(data.statusMessage, ' reset failed');
    }
  },

  error => {
    console.log('Error', error);
  }
);
 }
  }
}
