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
  constructor() {
    this.BASE_URL = 'http://192.168.43.197:9090',
    this.SIGN_IN_URL = '/api/authenticate',
    this.SIGN_UP_URL = '/api/register',
    this.GET_COMPANIES = '/api/companies',
    this.ADD_COMPANY = '/api/companies',
    this.EDIT_COMPANY = '/api/companies'
   }
}
