import { NgModule } from '@angular/core';
import {
  MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule,
  MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSnackBarModule, MatTooltipModule, MatDialogModule, MatSidenavModule, MatMenuModule, MatChipsModule, MatGridListModule, 
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [
      
    ],
   
imports: [
    MatInputModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule, MatGridListModule,
  ],
exports:[
    MatInputModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule, MatGridListModule,

]

})

export class MaterialModule {

}


