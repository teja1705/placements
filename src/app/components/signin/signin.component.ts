import { Component, Input, OnChanges, OnInit , SimpleChange, SimpleChanges, DoCheck} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInRequest, Student } from '../../placements.modle';
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
  students_Data : SignInRequest

  constructor(private placementService : PlacementService, private route : Router) { }

  ngOnChanges(changes : SimpleChanges){

  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({                                          
      email : new FormControl('', Validators.required),
      Password : new FormControl('', Validators.required),
    })
    
  }

  ngDoCheck(){
  }

  onSubmit(form : FormGroup){
    this.signInRequest = new SignInRequest();
    this.signInRequest.email = form.controls['email'].value;
    this.signInRequest.password = form.controls['Password'].value;
    this.signInRequest.id = window.localStorage.getItem('id');
    this.placementService.signIn(this.signInRequest).subscribe((data)=>{
      if(data.isValidUser){
        this.route.navigate(['dashboard/'])
      }
      console.log(data);
    })
  }
}
