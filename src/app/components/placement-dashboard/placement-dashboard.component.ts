import { Component, OnInit ,DoCheck} from '@angular/core';
import { PlacementsData, PlacementType, Stage } from 'src/app/placements.modle';
import { PlacementService } from 'src/app/providers/http-requests/placement.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/companylist.service';


@Component({
  selector: 'app-placement-dashboard',
  templateUrl: './placement-dashboard.component.html',
  styleUrls: ['./placement-dashboard.component.scss']
})
export class PlacementDashboardComponent implements OnInit, DoCheck {
  // companies : PlacementsData
  companies : any
  addCompany : FormGroup
  editCompany : FormGroup 
  CompanyData : PlacementsData
  closeResult : string
  menu : boolean = true
  hideMenuBar : boolean = true

  

  constructor(private placementService : PlacementService,private modalService: NgbModal,private companyService : CompanyService) { }

  ngOnInit(){
    this.addCompany  = new FormGroup({
      companyName    : new FormControl('',Validators.required),
      startDate : new FormControl('',Validators.required),
      endDate : new FormControl('',Validators.required),
      companyDetails : new FormControl('',Validators.required),
      placementType : new FormControl('',Validators.required),
      salaryPackage : new FormControl('',Validators.required),
      stage : new FormControl('',Validators.required),
      id : new FormControl('')
    })

    this.editCompany  = new FormGroup({
      companyName    : new FormControl('',Validators.required),
      startDate : new FormControl('',Validators.required),
      endDate : new FormControl('',Validators.required),
      companyDetails : new FormControl('',Validators.required),
      placementType : new FormControl('',Validators.required),
      salaryPackage : new FormControl('',Validators.required),
      stage : new FormControl('',Validators.required),
      id : new FormControl('')
    })

    // this.placementService.getPlacementData().subscribe(data=>{
    //   this.companies = data
    //   console.log(this.companies);
    // })

    this.companies = this.companyService.getCompanies();

  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true }).result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    })
  }

  addCompanyForm(form : FormGroup){
    this.CompanyData = new PlacementsData();
    this.CompanyData.companyName = form.controls['companyName'].value;
    let startDate = form.controls['startDate'].value;
    this.CompanyData.startDate = startDate.year + "-0" + startDate.month + "-" + startDate.day + "T00:00:00Z";
    // 2021-08-24T18:30:00Z
    let endDate = form.controls['endDate'].value;
    this.CompanyData.endDate = endDate.year + "-0" + endDate.month + "-" + endDate.day + "T00:00:00Z";
    this.CompanyData.companyDetails = form.controls['companyDetails'].value;
    this.CompanyData.placementType = form.controls['placementType'].value;
    this.CompanyData.salaryPackage = form.controls['salaryPackage'].value;
    this.CompanyData.stage = form.controls['stage'].value;
    this.CompanyData.id = undefined;
    this.placementService.addCompany(this.CompanyData).subscribe(data=>{
      console.log(data);
    })
  }

  editCompanyForm(data : PlacementsData, editcontent : any){
    console.log(data);
    this.editCompany  = new FormGroup({
      companyName    : new FormControl(data.companyName,Validators.required),
      startDate : new FormControl(data.startDate,Validators.required),
      endDate : new FormControl(data.endDate,Validators.required),
      companyDetails : new FormControl(data.companyDetails,Validators.required),
      placementType : new FormControl(data.placementType,Validators.required),
      salaryPackage : new FormControl(data.salaryPackage,Validators.required),
      stage : new FormControl(data.stage,Validators.required),
      id : new FormControl(data.id)
    })
    this.openVerticallyCentered(editcontent);

    }

    ngDoCheck(){
      
    }


  submitEditCompany(form : FormGroup){
    this.CompanyData = new PlacementsData();
    this.CompanyData.companyName = form.controls['companyName'].value;
    let startDate = form.controls['startDate'].value;
    this.CompanyData.startDate = startDate.year + "-0" + startDate.month + "-" + startDate.day + "T00:00:00Z";
    // 2021-08-24T18:30:00Z
    let endDate = form.controls['endDate'].value;
    this.CompanyData.endDate = endDate.year + "-0" + endDate.month + "-" + endDate.day + "T00:00:00Z";
    this.CompanyData.companyDetails = form.controls['companyDetails'].value;
    this.CompanyData.placementType = form.controls['placementType'].value;
    this.CompanyData.salaryPackage = form.controls['salaryPackage'].value;
    this.CompanyData.stage = form.controls['stage'].value;
    this.CompanyData.id = form.controls['id'].value;

    this.placementService.editCompany(this.CompanyData).subscribe(data=>{
      console.log(data);
    })
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
}
