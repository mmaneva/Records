import { Injectable } from '@angular/core';
import { Records } from './records.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  formData:Records = new Records();
  readonly baseURL = 'http://localhost:36120/api/Records'

  postRecords(){
    return this.http.post(this.baseURL,this.formData);
  }
}
