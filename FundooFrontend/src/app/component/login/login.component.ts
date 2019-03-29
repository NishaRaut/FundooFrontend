import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // user: Login = new Login();

  loginForm: FormGroup;
  matsnackbar: any;

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private router: Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  ngOnInit() {
  }
  submit() {
    console.log(this.email.value);
    const user = {
      email : this.email.value,
      password : this.password.value
    };

    this.serviceService.login(user).subscribe(
      data => {
        if (data.code === 200) {
          this.matsnackbar.open(' Login Successfully ', 'LogIn', {
            duration: 2000,
          });
        } else {
          console.log(data);
          this.matsnackbar.open(data.statusMessage, 'Login Failed');
        }
      },

      error => {
        console.log('Error', error);
      }
    );
  }

}
