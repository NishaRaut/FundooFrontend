import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject([]);
 
  currentMessage = this.messageSource.asObservable();

  archived:boolean=false;
  trashed:boolean=false;

  constructor(private httpService:ServiceService) {
    
    this.httpService.getRequestNote('allNotes',this.archived,this.trashed).subscribe(
      response=>{
        this.messageSource.next(response.body)
        console.log(response)
      }
    )
    
   }


updateMessage()
{
  this.httpService.getRequestNote('allNotes',this.archived,this.trashed).subscribe(
    response=>{
      this.messageSource.next(response.body)
    }
  )
    
}



}