import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest, SignUpRequest} from '../../placements.modle';
import { Observable } from 'rxjs';
import { AppConstantsService } from '../constants/app-constants.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http : HttpClient, private appConstantService : AppConstantsService) { }
  
  public signUp(signup : SignUpRequest): Observable<any> {
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.SIGN_UP_URL;
    const httpOptions = {
      headers : new HttpHeaders({
      "Access-Control-Allow-Origin" : '*'
    }) 
  }
    return this.http.post<any>(queryUrl , signup, httpOptions)
  }


}
