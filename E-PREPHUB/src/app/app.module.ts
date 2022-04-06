import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoachingPortalComponent } from './coachingcomponent/coaching-portal/coaching-portal.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentPortalComponent } from './navbarcomponents/student-portal/student-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoachingPortalComponent,
    RegistrationComponent,
    StudentPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
