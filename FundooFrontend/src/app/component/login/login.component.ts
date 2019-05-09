import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { Login } from 'src/app/model/login';
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


  constructor(private matsnackbar :MatSnackBar,private formBuilder: FormBuilder, private serviceService: ServiceService, private router: Router) { }
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
      
       console.log(data)
        if (data.statuscode == 200) {
          this.matsnackbar.open(' Login Successfully ', 'LogIn', {
            duration: 2000
          });
          console.log("info nishaaaa",data.userDto.firstName);
          this.router.navigate(['dashboard']);
      
         
          //localStorage.removeItem("login");
          localStorage.setItem("login",data.token);
          localStorage.setItem("email",user.email);
          localStorage.setItem("userFirstName",data.userDto.firstName);
          localStorage.setItem("userLastName",data.userDto.lastName);
          // console.log("info",data);
          
        } else {
          this.matsnackbar.open("Enter valid data", 'Login Failed',{
            duration: 2000
          });
     
        }
      },

      error => {
        console.log('Error', error);
      }
    );
  }
  register()
  {
    this.router.navigate(['register']);
  }
 
}
