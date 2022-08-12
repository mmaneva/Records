import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecordsService } from 'src/app/shared/records.service';

@Component({
  selector: 'app-records-form',
  templateUrl: './records-form.component.html',
  styles: [
  ]
})
export class RecordsFormComponent implements OnInit {

  constructor(public service:RecordsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postRecords().subscribe(
      res => {

      },
      err => { console.log(err) }
    )
  }

}
