import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentPortalComponent } from './navbarcomponents/student-portal/student-portal.component';
import { StudentComponent } from './student/student.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoachingComponent } from './coaching/coaching.component';
import { CoachingHomeComponent } from './coaching/coaching-home/coaching-home.component';
<<<<<<< HEAD
import { StdRegistrationComponent } from './coaching/coaching-home/std-registration/std-registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BatchInfoComponent } from './coaching/coaching-home/batch-info/batch-info.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 9734818ef0f30b419e567c7fc5ceddf0f3435d25

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    StudentPortalComponent,
    StudentComponent,
    StudentHomeComponent,
    CoachingHomeComponent,
    CoachingComponent,
<<<<<<< HEAD
    StdRegistrationComponent,
    BatchInfoComponent
    ],
=======
  ],

>>>>>>> 9734818ef0f30b419e567c7fc5ceddf0f3435d25
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> 9734818ef0f30b419e567c7fc5ceddf0f3435d25
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
