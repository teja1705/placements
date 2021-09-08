import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  public BASE_URL : string
  public SIGN_IN_URL : string
  public SIGN_UP_URL : string
  public GET_COMPANIES : string
  public ADD_COMPANY : string
  public EDIT_COMPANY : string
  public GET_ALL_STUDENTS : string
  public CONFIRM_REGISTRATION : string
  constructor() {
    this.BASE_URL = 'http://localhost:8080/',
    this.SIGN_IN_URL = 'api/login',
    this.SIGN_UP_URL = 'api/registration',
    this.CONFIRM_REGISTRATION = 'api/registration/confirm',
    this.GET_ALL_STUDENTS = '/Students',
    this.GET_COMPANIES = '/api/companies',
    this.ADD_COMPANY = '/api/companies',
    this.EDIT_COMPANY = '/api/companies'
   }
}
