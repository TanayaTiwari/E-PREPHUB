import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingPortalComponent } from './coachingcomponent/coaching-portal/coaching-portal.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentPortalComponent } from './navbarcomponents/student-portal/student-portal.component';
const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'students-portal', component: StudentPortalComponent},
  {path:'coaching-portal', component: CoachingPortalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
