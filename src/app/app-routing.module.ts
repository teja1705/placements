import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlacementDashboardComponent } from './components/placement-dashboard/placement-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyRequestsComponent } from './components/company-requests/company-requests.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {
    path:'dashboard',
    component:PlacementDashboardComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'company-requests',
    component:CompanyRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
