//External imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Internal imports
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FinscreenerTaskService {

  constructor(private httpClient:HttpClient) { }

  public getURL(origin:string):Observable<any>{
    return this.httpClient.get(`${environment.origin_url + origin}`,{ observe:'response'});
  }
}

