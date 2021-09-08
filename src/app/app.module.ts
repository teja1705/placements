import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppConstantsService } from './providers/constants/app-constants.service';
import { PlacementService } from './providers/http-requests/placement.service';
import { PlacementDashboardComponent } from './components/placement-dashboard/placement-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyService } from './services/companylist.service';
import { CompanyRequestsComponent } from './components/company-requests/company-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    PlacementDashboardComponent,
    AdminDashboardComponent,
    CompanyRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AppConstantsService,
    PlacementService,
    CompanyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
