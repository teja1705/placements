import { Component, Input, OnChanges, OnInit , SimpleChange, SimpleChanges, DoCheck} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit ,OnChanges, DoCheck{
  signInForm : FormGroup

  constructor() { }

  ngOnChanges(changes : SimpleChanges){

  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  ngDoCheck(){
  }

  onSubmit(form : FormGroup){
    console.log(form.controls['username'].value);

  }


}
