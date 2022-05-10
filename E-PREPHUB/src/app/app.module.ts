import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { StdRegistrationComponent } from './coaching/coaching-home/std-registration/std-registration.component';
import { BatchInfoComponent } from './coaching/coaching-home/batch-info/batch-info.component';
import { AboutUsComponent } from './coaching/coaching-home/about-us/about-us.component';
import { HelpComponent } from './coaching/coaching-home/help/help.component';
import { StudyComponent } from './coaching/coaching-home/study/study.component';
import { TestComponent } from './coaching/coaching-home/test/test.component';
import { TestScoreComponent } from './coaching/coaching-home/test-score/test-score.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CourseRegComponent } from './coaching/coaching-home/course-reg/course-reg.component';

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
    StdRegistrationComponent,
    BatchInfoComponent,
    AboutUsComponent,
    HelpComponent,
    StudyComponent,
    TestComponent,
    TestScoreComponent,
    CourseRegComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatSelectModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
