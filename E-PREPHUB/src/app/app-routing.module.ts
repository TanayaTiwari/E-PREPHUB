import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CoachingComponent } from './coaching/coaching.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComponent } from './student/student.component';
import { CoachingHomeComponent } from './coaching/coaching-home/coaching-home.component';
const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'student', component: StudentComponent},
  {path:'coaching', component: CoachingComponent},
  {path:'student-home', component: StudentHomeComponent},
  {path:'coaching-home', component:CoachingHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
