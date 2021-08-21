import { Component, OnInit , OnChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit,OnChanges {

  constructor(private route : Router) { }

  ngOnChanges(){
    console.log('onchanges');
  }
  ngOnInit(): void {
    console.log('oninit');
  }
  signin(){
    this.route.navigate(['signin/']);
  }
  signup(){
    this.route.navigate(['signup/']);
  }

}
