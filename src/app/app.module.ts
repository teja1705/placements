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
import { PlacementListComponent } from './components/placement-list/placement-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    PlacementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppConstantsService,
    PlacementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
