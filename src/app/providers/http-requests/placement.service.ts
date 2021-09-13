import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest, SignUpRequest} from '../../placements.modle';
import { Observable } from 'rxjs';
import { AppConstantsService } from '../constants/app-constants.service';
import { PlacementsData  } from '../../placements.modle';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http : HttpClient, private appConstantService : AppConstantsService) { }
  
  public signUp(signup : SignUpRequest): Observable<any> {
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.SIGN_UP_URL;
    return this.http.post<any>(queryUrl , signup);
  }

  public signIn(signIn : SignInRequest): Observable<any>{
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.SIGN_IN_URL;
    // let httpOptions = {
      // headers : new HttpHeaders({
      //   access_token : window.localStorage.getItem('access_token')
      // })
    // }
    return this.http.post<any>(queryUrl , signIn);
  }


  public getStudents(): Observable<any>{
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.GET_ALL_STUDENTS;
    return this.http.get<any>(queryUrl)
  }
  public getPlacementData(): Observable<any>{
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.GET_COMPANIES;
    let access_token = window.localStorage.getItem('access_token');
    let httpOptions = {
      headers : new HttpHeaders({
        Authorization : 'Bearer ' + access_token
      })
    }
    return this.http.get<any>(queryUrl, httpOptions)
  }

  public addCompany(company : PlacementsData):Observable<any>{
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.ADD_COMPANY;
    let access_token = window.localStorage.getItem('access_token');
    let httpOptions = {
      headers : new HttpHeaders({
        Authorization : 'Bearer ' + access_token
      })
    }
    return this.http.post<any>(queryUrl, company, httpOptions)
  }

  public editCompany(company : PlacementsData):Observable<any>{
    let queryUrl = this.appConstantService.BASE_URL + this.appConstantService.EDIT_COMPANY + '/' + company.id;
    let access_token = window.localStorage.getItem('access_token');
    let httpOptions = {
      headers : new HttpHeaders({
        Authorization : 'Bearer ' + access_token
      })
    }
    return this.http.put<any>(queryUrl, company, httpOptions)
  }
 

}
