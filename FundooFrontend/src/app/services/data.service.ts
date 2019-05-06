import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([]);

  currentMessage = this.messageSource.asObservable();


  private messageSourceGrid = new BehaviorSubject('row wrap');

  currentMessageGrid = this.messageSourceGrid.asObservable();




  archived: boolean = false;
  trashed: boolean = false;

  constructor(private httpService: ServiceService) {

    this.httpService.getRequestNote('allNotes', this.archived, this.trashed).subscribe(
      response => {
        this.messageSource.next(response.body)
        console.log(response)
      }
    )

  }

  ngOnInit(){
    
  }


  updateMessage() {
    this.httpService.getRequestNote('allNotes', this.archived, this.trashed).subscribe(
      response => {
        this.messageSource.next(response.body)
      }
    )

  }

  changemessage(archive: boolean, trash: boolean) {

    this.httpService.getRequestNote('allNotes', archive, trash).subscribe(
      response => {

        console.log("change message", response);



        this.messageSource.next(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  viewChangeMsg(message: string) {
    console.log(message)
    this.messageSourceGrid.next(message)
  }

    private updateSource = new BehaviorSubject('default message');
  update = this.updateSource.asObservable();


  changeMsg(message: any) {
    this.messageSource.next(message)
  }


}