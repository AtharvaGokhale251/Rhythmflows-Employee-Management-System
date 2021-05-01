import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
//http:HttpClient;
  constructor(private http:HttpClient) {}

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/app_backend/');
  }

  getCountryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/app_backend/country/');
  }

  getStateList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/app_backend/state/');
  }

  getCityList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/app_backend/city/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/app_backend/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/app_backend/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/app_backend/'+val);
  }

}
