import { Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root',
})


export class CompanyService{

    constructor(){

    }

    companyList : any = [
        {
        id:1,
        companyName : 'Amazon',
        startDate : '25 Aug 2021',
        endDate : '29 Aug 2021',
        Skills : 'Java, React',
        placementType : "FullTime",
        salaryPackage : '45 LPA',
        stage : 'Not Started',
        },
        {
        id: 2,
        companyName : 'Google',
        startDate : '25 Aug 2021',
        endDate : '29 Aug 2021',
        Skills : 'Java, React',
        placementType : "FullTime",
        salaryPackage : '45 LPA',
        stage : 'Not Started',
        },
        {
        id: 3,
        companyName : 'Flipkart',
        startDate : '25 Aug 2021',
        endDate : '29 Aug 2021',
        Skills : 'Java, React',
        placementType : "FullTime",
        salaryPackage : '45 LPA',
        stage : 'Not Started',
        },
        {
        id: 4,
        companyName : 'Microsoft',
        startDate : '25 Aug 2021',
        endDate : '29 Aug 2021',
        Skills : 'Java, React',
        placementType : "FullTime",
        salaryPackage : '45 LPA',
        stage : 'Not Started',
        },
    ]



    companyRequests : any =[
        {
            companyID : 1,
            companyName : 'Google',
            comesUnder : 'Super Dream',
            accepted:false,
        },
        {
            companyID : 2,
            companyName : 'Josh',
            comesUnder : 'Super Dream',
            accepted:false,
        },
        {
            companyID : 3,
            companyName : 'Bajaj Finserv',
            comesUnder : 'Super Dream',
            accepted:false,
        },
    ]


    getCompanies(){
        return this.companyList;
    }

    getCompanyRequests(){
        return this.companyRequests;
    }


}
