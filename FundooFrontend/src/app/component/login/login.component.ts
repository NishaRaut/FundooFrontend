import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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


  user: Login = new Login();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService,private router: Router,
     private matsnackbar: MatSnackBar,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'emailId': [this.user.email,[ Validators.required,Validators.email]],
      'password': [this.user.password, [Validators.required, Validators.minLength(5)]]
    });
  }
  
  onLoginSubmit() 
  {
    
    console.log(this.user.email);

    this.serviceService.login(this.user).subscribe(
      data => {
        if (data.body.code == 200) {
          this.matsnackbar.open(' Login Successfully ', 'LogIn', {
            duration: 2000,
          });
          localStorage.setItem('Authorization', data.headers.get('Authorization'));
          // this.router.navigate(['./home']);
        }
        else {
          console.log(data);
          this.matsnackbar.open(data.statusMessage, "Login Fails")
        }
      },

      error => {
        console.log("Error", error);
      }
    );
  }

  navigateToRegistration(): void {
    this.router.navigate(["/register"]);
  }

}
