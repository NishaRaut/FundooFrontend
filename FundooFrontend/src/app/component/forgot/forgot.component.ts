import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit() {
  }
}
