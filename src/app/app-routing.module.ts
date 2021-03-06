import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/register/register.component';
import { AdminComponent } from 'src/admin/admin.component';
import { ParticipantComponent } from '../participant/participant.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/register",
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'participant',
    component: ParticipantComponent
  },
  {
    path: '**',
    redirectTo: "/register",
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
