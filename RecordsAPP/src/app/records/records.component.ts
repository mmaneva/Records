import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Records } from '../shared/records.model';
import { RecordsService } from '../shared/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styles: [
  ]
})
export class RecordsComponent implements OnInit {

  constructor(public service: RecordsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Records){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.service.deleteRecords(id).subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Delete Successfuli','Records Detail');
      },
      err => { console.log(err) }
    )
  }
}
