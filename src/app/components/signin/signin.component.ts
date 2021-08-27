import { Component, Input, OnChanges, OnInit , SimpleChange, SimpleChanges, DoCheck} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInRequest } from '../../placements.modle';
import { PlacementService } from '../../providers/http-requests/placement.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit ,OnChanges, DoCheck{
  signInForm : FormGroup
  signInRequest : SignInRequest
  access_token : string

  constructor(private placementService : PlacementService, private route : Router) { }

  ngOnChanges(changes : SimpleChanges){

  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      rememberMe : new FormControl(true, Validators.required)
    })
  }

  ngDoCheck(){
  }

  onSubmit(form : FormGroup){
    this.signInRequest = new SignInRequest();
    this.signInRequest.username = form.controls['username'].value;
    this.signInRequest.password = form.controls['password'].value;
    this.signInRequest.rememberMe = form.controls['rememberMe'].value;
    this.placementService.signIn(this.signInRequest).subscribe(data=>{
      if(data.id_token){
        this.access_token = data.id_token;
        window.localStorage.setItem('access_token', data.id_token);
        this.route.navigate(['dashboard/']);
      }
      else{
        console.log(data);
      }
    })
  }
}
