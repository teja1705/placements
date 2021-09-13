import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlacementDashboardComponent } from './components/placement-dashboard/placement-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyRequestsComponent } from './components/company-requests/company-requests.component';
import { StudentsComponent } from './components/students/students.component';
import { AuthGuard } from './services/AuthGaurd.service';

const routes: Routes = [
  {
    path:'login',component:HomePageComponent,
  },
  {
    path:'student-dashboard',
    component:PlacementDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-dashboard/company-requests',
    component:CompanyRequestsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-dashboard/students',
    component:StudentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
