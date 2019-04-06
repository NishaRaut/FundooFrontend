import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private router: Router
    ,private snackbar:MatSnackBar) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }
  submit() {
    console.log(this.email.value);
    const user = {
      email : this.email.value
    };

    this.serviceService.forgot('forgetPassword?email='+this.email.value).subscribe(
      data => {
        console.log(data);-
        console.log("hello",data.code)
        console.log("hello",data.statusCode)
        if (data.statusCode === 200) {
          this.snackbar.open(data.statusMessage, ' Forgot SuccessFully', {
            duration: 3000,
        
          });
          this.router.navigate(['login']);
  
        } else {
          console.log(data);
          this.snackbar.open(data.statusMessage, ' forgot failed');
        }
      },

      error => {
        console.log('Error', error);
      }
    );
  }
}
