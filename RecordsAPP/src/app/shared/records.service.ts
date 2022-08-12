import { Injectable } from '@angular/core';
import { Records } from './records.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:36120/api/Records'
  formData:Records = new Records();
  list : Records[];

  postRecords(){
    return this.http.post(this.baseURL,this.formData);
  }

  putRecords(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  deleteRecords(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Records[]);
  }
}
