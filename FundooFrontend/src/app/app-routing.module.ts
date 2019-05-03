import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { IconComponent } from './component/icon/icon.component';
import { CardsComponent } from './component/cards/cards.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { TrashComponent } from './component/trash/trash.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'icon', component: IconComponent },
  { path: '', component: LoginComponent },
  // { path: 'notes', component: CardsComponent },
  {path:'reset/:token',component:ResetComponent},
  { path: 'dashboard', component: DashboardComponent,
  children:[
    { path: 'addnote', component: AddnoteComponent },
    { path: '', component: AddnoteComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: 'reminder', component: ReminderComponent },
    { path: 'card', component: CardsComponent },
    { path: 'trash', component: TrashComponent },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
