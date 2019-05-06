import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { MaterialModule } from 'src/app/material.module';
import { ServiceService } from './services/service.service';
import { LoginComponent } from 'src/app/component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { IconComponent } from './component/icon/icon.component';
import { CardsComponent } from './component/cards/cards.component';
import { ArchiveComponent } from './component/archive/archive.component';

import { ReminderComponent } from './component/reminder/reminder.component';
import { TrashComponent } from './component/trash/trash.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditLabelComponent } from './edit-label/edit-label.component';

import { DataService } from './services/data.service';
import { ProfileComponent } from './profile/profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
        RegisterComponent,
       ForgotComponent,
     ResetComponent,
     DashboardComponent,
     AddnoteComponent,
     IconComponent,
     CardsComponent,
     ArchiveComponent,
  
     ReminderComponent,
     TrashComponent,
     DialogComponent,
     EditLabelComponent,
     ProfileComponent,
    



  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
        BrowserAnimationsModule,
      AppRoutingModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        MatCardModule,
        // Component,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatMenuModule,
        LayoutModule,
        MatToolbarModule,
        ImageCropperModule
       


  ],
  entryComponents: [DialogComponent,EditLabelComponent
  ],
  providers: [
    ServiceService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
