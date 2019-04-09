import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Register } from 'src/app/model/register';
import { ServiceService } from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  id: any;

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService,
              private matsnackbar: MatSnackBar, private router: Router) { }

  firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]);
  lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(3)]);
  mobileNumber = new FormControl('', Validators.required);

  ngOnInit() { }
  submit() {
    const user = {
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      email : this.email.value,
      password : this.password.value,
      mobileNumber : this.mobileNumber.value
    };

    console.log(this.firstName.value);
    this.serviceService.register(user).subscribe(
      data => {
        console.log(data);
         // tslint:disable-next-line:triple-equals
        if (data.statusCode == 200) 
        {
          this.matsnackbar.open(' register Successfully ', 'register', {
            duration: 2000,
          });
        
        } else {
          console.log(data);
          this.matsnackbar.open(data.statusMessage, 'ok',{
            duration: 2000
          });
        }
      },

      error => {
        console.log('Error', error);
      }
    );
  }
}