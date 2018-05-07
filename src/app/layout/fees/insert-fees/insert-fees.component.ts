import { NgModule, Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'insert-fees',
  templateUrl: './insert-fees.component.html',
  styleUrls: ['./insert-fees.component.scss'],
})
export class InsertFeesComponent implements OnInit {
  feesSubmissionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InsertFeesComponent>,
    private http: HttpClient,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
    this.feesSubmissionForm = new FormGroup({
      'feesSubmissionDate': new FormControl('', [Validators.required]),
      'feesAmount': new FormControl('', [Validators.required]),
      'feesforMonth': new FormControl('', [Validators.required]),
      'feesRemarks': new FormControl('')
    });
  }
  onSubmit() {
    let feesData = {};
    feesData = {
      'studentRollNumber': this.data.rollNumber,
      'feesSubmissionDate': this.feesSubmissionForm.get('feesSubmissionDate').value,
      'feesAmount': this.feesSubmissionForm.get('feesAmount').value,
      'feesforMonth': this.feesSubmissionForm.get('feesforMonth').value,
      'feesRemarks': this.feesSubmissionForm.get('feesRemarks').value
    };

    console.log(feesData);
    this.apiService.feesSubmit(feesData).subscribe((data: any) => {
      console.log(data);
      if (data.status === 105 || data.status === '105') {
        console.log(data);
        console.log('fees submited Successfuly');
      } else {
        console.log('fees submit failed');
      }
    });
  }

}
