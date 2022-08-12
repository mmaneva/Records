import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../shared/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styles: [
  ]
})
export class RecordsComponent implements OnInit {

  constructor(public service: RecordsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
