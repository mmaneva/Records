import { Injectable } from '@angular/core';
import { Records } from './records.model';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  formData:Records = new Records();
}
