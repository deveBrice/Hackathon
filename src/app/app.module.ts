import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../admin/admin.component';
import { BrowserComponent } from '../shares/browser/browser.component';
import { ParticipantComponent } from '../participant/participant.component';
import { AuthService } from '../service/authService';
import { ParticipantService } from '../service/participantService';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    BrowserComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
