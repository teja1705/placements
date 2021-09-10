import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlacementDashboardComponent } from './components/placement-dashboard/placement-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyRequestsComponent } from './components/company-requests/company-requests.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {
    path:'student-dashboard',
    component:PlacementDashboardComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'admin-dashboard/company-requests',
    component:CompanyRequestsComponent
  },
  {
    path:'admin-dashboard/students',
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
