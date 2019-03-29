import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor() { }
  password = new FormControl('', [Validators.required, Validators.min(3)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.min(3)]);
  ngOnInit() {
  }

}
