import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingComponent } from './coaching/coaching.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComponent } from './student/student.component';
import { CoachingHomeComponent } from './coaching/coaching-home/coaching-home.component';
import { StdRegistrationComponent } from './coaching/coaching-home/std-registration/std-registration.component';
import { BatchInfoComponent } from './coaching/coaching-home/batch-info/batch-info.component';
import { AboutUsComponent } from './coaching/coaching-home/about-us/about-us.component';


const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'student', component: StudentComponent},
  {path:'coaching', component: CoachingComponent},
  {path:'student-home', component: StudentHomeComponent},
  {path:'coaching-home', component:CoachingHomeComponent},
  {path:'std-registration', component:StdRegistrationComponent},
  {path:'batch-info', component:BatchInfoComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
