import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Records } from 'src/app/shared/records.model';
import { RecordsService } from 'src/app/shared/records.service';

@Component({
  selector: 'app-records-form',
  templateUrl: './records-form.component.html',
  styles: [
  ]
})
export class RecordsFormComponent implements OnInit {

  constructor(public service:RecordsService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postRecords().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Records Detail')
      },
      err => { console.log(err) }
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Records()
  }

}
