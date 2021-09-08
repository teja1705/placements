import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacementService } from '../../providers/http-requests/placement.service';
import { SignUpRequest } from '../../placements.modle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm : FormGroup
  signUpRequest : SignUpRequest

  constructor(public placementService : PlacementService,private route : Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      // username : new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }

  onSubmit(form : FormGroup){
    this.signUpRequest = new SignUpRequest();
    this.signUpRequest.firstName = form.controls['firstName'].value;
    this.signUpRequest.lastName = form.controls['lastName'].value;
    // this.signUpRequest.userName = form.controls['username'].value;
    this.signUpRequest.email = form.controls['email'].value;
    this.signUpRequest.password = form.controls['password'].value;
    this.placementService.signUp(this.signUpRequest).subscribe(data=>{
      console.log(data);
      window.localStorage.setItem('access_token',data.token);
      window.localStorage.setItem('id',data.id);
      this.route.navigate(['signin/'])
    })
  }

}
