import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }

  getData(id: any): Observable<any> {
    return this.http.get<any>(`http://api.worldbank.org/v2/country/${id}?format=json`);
  }
}
