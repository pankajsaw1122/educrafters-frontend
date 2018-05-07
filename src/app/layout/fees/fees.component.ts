import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { InsertFeesComponent } from './insert-fees/insert-fees.component';
import { MatDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'app-fees',
    templateUrl: './fees.component.html',
    styleUrls: ['./fees.component.scss'],
    animations: [routerTransition()]
})
export class FeesComponent implements OnInit {
        searchText = '';
        imagePath = '';
        studentData = {
        student_roll_number: '',
        student_name: '',
        school_name: '',
        student_class: '',
        student_session: '',
        subjects: '',
        email_id: '',
        student_mobile_number: ''
    };
    constructor(public dialog: MatDialog, private apiService: ApiService) {}

    ngOnInit() {}

    onSearch() {
        console.log('seach called');
        let searchData = {};
        searchData = {
            searchText: this.searchText
        };
        this.apiService.searchStudent(searchData).subscribe((data: any) => {
            console.log(data);
            if (data.status === 105 || data.status === '105') {
                console.log(data);
                this.studentData = data.data[0];
                this.imagePath = 'http://localhost:5000' + data.imagePath;

                console.log('Search Successful');
            } else {
                console.log('search failed');
            }
        });
    }

    openDialog() {
        const dialogRef = this.dialog.open(InsertFeesComponent, {
            width: '75%',
            data: { rollNumber: this.studentData.student_roll_number }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
