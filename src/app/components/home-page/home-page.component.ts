import { Component, OnInit , OnChanges, Output, EventEmitter, DoCheck, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInRequest, SignUpRequest } from 'src/app/placements.modle';
import { PlacementService } from 'src/app/providers/http-requests/placement.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit,OnChanges, DoCheck {

  studentSignInForm : Boolean = false
  collegeSignInForm : Boolean = true
  companySignInForm : Boolean = true

  appUserRole : string = "USER"

  signInForm : FormGroup
  signInRequest : SignInRequest
  access_token : string
  students_Data : SignInRequest
  error_message : string
  dispaly_error_message : Boolean = true


  signUpForm : FormGroup
  signUpRequest : SignUpRequest

  loaderStatus : Boolean 
  
  constructor(private route : Router,private placementService : PlacementService) {

   }

  ngOnChanges(){
  
  }

  ngDoCheck(){
  }

  ngOnInit(): void {
    this.loaderStatus = true;
    setTimeout(()=>{
      this.loaderStatus = false;
    },1000)
    this.signInForm = new FormGroup({                                          
      email : new FormControl('', Validators.required),
      Password : new FormControl('', Validators.required),
    });

    this.signUpForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }

  StudentSignInForm(){
   this.studentSignInForm = false
   this.collegeSignInForm = true
   this.companySignInForm = true
   this.appUserRole = "USER"
  }

  CollegeSignInForm(){
    this.studentSignInForm = true
    this.collegeSignInForm = false
    this.companySignInForm = true
    this.appUserRole = "COLLEGEADMIN"
  }

  CompanySignInForm(){
    this.studentSignInForm = true
    this.collegeSignInForm = true
    this.companySignInForm = false
    this.appUserRole = "COMPANY"
  }

  Login(form : FormGroup){
    this.loaderStatus = true;
    this.signInRequest = new SignInRequest();
    this.signInRequest.email = form.controls['email'].value;
    this.signInRequest.password = form.controls['Password'].value;
    this.signInRequest.id = null;
    this.signInRequest.appUserRole = this.appUserRole;
    this.placementService.signIn(this.signInRequest).subscribe(
    data => {
      console.log('success', data)
      window.localStorage.setItem('access_token',data.token);
      window.localStorage.setItem('id',data.id);
      this.route.navigate(['student-dashboard/'])
      document.getElementById("response-message").className = "success-message";
    },
    error => {
      console.log('oops', error.error)
      document.getElementById("response-message").className = "error-message";
      this.error_message = error.error.message
      console.log(this.error_message);
      this.dispaly_error_message = false
    });
    setTimeout(()=>{
      this.loaderStatus = false;
    },1000)
  }


  Register(form : FormGroup){
    this.loaderStatus = true;
    this.signUpRequest = new SignUpRequest();
    this.signUpRequest.firstName = form.controls['firstName'].value;
    this.signUpRequest.lastName = form.controls['lastName'].value;
    this.signUpRequest.email = form.controls['email'].value;
    this.signUpRequest.password = form.controls['password'].value;
    this.signUpRequest.appUserRole = this.appUserRole;
    this.placementService.signUp(this.signUpRequest).subscribe(
      data => {
        window.localStorage.setItem('access_token',data.token);
        this.dispaly_error_message = false
        this.error_message = data.message;
        document.getElementById("response-message").className = "success-message";
      },
      error => {
        this.error_message = error.error.message
        document.getElementById("response-message").className = "error-message";
        console.log(this.error_message);
        this.dispaly_error_message = false
      });
      setTimeout(()=>{
        this.loaderStatus = false;
      },1000)
  }
}

