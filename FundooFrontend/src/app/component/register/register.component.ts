import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Register } from 'src/app/model/register';
// import { ServiceService } from 'src/app/services/service.service';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: Register = new Register();
  
  constructor() { }

  firstName = new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]);
  lastName = new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]);
  email = new FormControl('', [ Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required,Validators.min(3)]);
  mobileNumber = new FormControl('', Validators.required);

  ngOnInit() {};
  submit(){
    console.log(this.firstName.value);
    
  }
   
  }

  // onRegisterSubmit() {
    
  //   console.log(this.user.email);
  
  //   this.serviceService.login(this.user).subscribe(
  //     data => {
  //       if (data.body.code == 200) {
  //         this.matsnackbar.open(' Login Successfully ', 'LogIn', {
  //           duration: 2000,
  //         });
  //         localStorage.setItem('Authorization', data.headers.get('Authorization'));
  //         // this.router.navigate(['./home']);
  //       }
  //       else {
  //         console.log(data);
  //         this.matsnackbar.open(data.statusMessage, "Login Fails")
  //       }
  //     },

  //     error => {
  //       console.log("Error", error);
  //     }
  //   );
  // }

  // navigateToRegistration(): void {
  //   this.router.navigate(["/register"]);
  // }





