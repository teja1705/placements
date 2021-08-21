import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  public BASE_URL : string
  public SIGN_IN_URL : string
  public SIGN_UP_URL : string
  constructor() {
    this.BASE_URL = 'http://192.168.43.197:9090',
    this.SIGN_IN_URL = '/api/authenticate',
    this.SIGN_UP_URL = '/api/register'
   }
}
