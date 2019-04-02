import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
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
          this.matsnackbar.open(' ', 'LogIn', {
            duration: 2000,
          });
        } else {
          console.log(data);
          this.matsnackbar.open(data.statusMessage, '');
        }
      },

      error => {
        console.log('Error', error);
      }
    );
  }
}
