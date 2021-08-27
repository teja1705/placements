import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlacementDashboardComponent } from './components/placement-dashboard/placement-dashboard.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {
    path:'dashboard',
    component:PlacementDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
