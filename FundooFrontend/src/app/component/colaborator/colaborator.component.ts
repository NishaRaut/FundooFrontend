import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {

  constructor(private httpService:ServiceService) { }

  ngOnInit() {
  
  }
   
 
   a =localStorage.getItem('email')
  
   
}
