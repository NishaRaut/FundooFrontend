import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  @Input() LabeleData: any;

  constructor(private httpService: ServiceService, private dataService: DataService, private snackbar: MatSnackBar,
    private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  labelName = new FormControl('', [Validators.required])
  ngOnInit() {
    this.getlabels();
  }
  labels: any[];
  //getLabelId:any;

  getLabelId(labels) {
    console.log("#######" + labels);
  }



  getlabels() {

    console.log("Hiiiiiiiii")
    this.httpService.getRequest('allLabels').subscribe(
      response => {
        console.log("response after label get: ", response);

        this.data = (response as any).body;
        console.log(" labels info", this.data)
      },
      error => {
        console.log('Error', error);
      }

    )
  }
  create() {
    //this.flag = false;

    const data = {
      "name": this.labelName.value,


    }
    console.log(this.labelName.value)

    if (this.labelName.value === '') {
      this.snackBar.open("fields cant be empty", " ", {
        duration: 2000,
      });
    }
    else {
      this.httpService.postRequest('createLabel', data).subscribe(
        response => {

          console.log(response)

          this.dataService.updateMessage();
          if (response.body.statusCode == 800) {
            this.snackbar.open(response.body.statusMessage + ' !!', 'End now', {
              duration: 1000,
            });
          }
        }

      );

    }

  }
  deleteLabel(labels) {
    console.log("#######" + labels.lableId);
    this.httpService.deleteRequest('deleteLabel/' + labels.lableId).subscribe(
      response => {
        console.log("ddddddd", response)

        if (response.body.statusCode == 800) {
          this.snackbar.open(response.body.statusMessage + ' !!', 'End now', {
            duration: 1000,
          });
          this.dataService.updateMessage();
        }

      }
    )
  }
}

