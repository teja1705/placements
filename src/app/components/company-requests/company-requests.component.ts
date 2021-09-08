import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/companylist.service';

@Component({
  selector: 'app-company-requests',
  templateUrl: './company-requests.component.html',
  styleUrls: ['./company-requests.component.scss']
})
export class CompanyRequestsComponent implements OnInit {
  companyData : any
  acceptedCompanyID : any

  constructor(private company : CompanyService) { }

  ngOnInit(): void {
    this.companyData = this.company.getCompanyRequests();
    this.acceptedCompanyID = window.localStorage.getItem('id');
  }

  accepted(companyID){
    window.localStorage.setItem('id',companyID);
    this.acceptedCompanyID = window.localStorage.getItem('id');
  }

}
