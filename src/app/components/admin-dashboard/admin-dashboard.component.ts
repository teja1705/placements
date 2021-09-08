import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  menu: boolean = true;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  displayMenu(){
    this.menu = !this.menu;
    if(this.menu){
      document.getElementById("sideNav").style.width = "0px";
    }
    if(!this.menu){
      document.getElementById("sideNav").style.width = "250px";
    }
  }

  companyRequests(){
    this.route.navigate(['company-requests/']);
  }

}
