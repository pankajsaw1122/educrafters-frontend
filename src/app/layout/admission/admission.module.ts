import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, MaterialModule, FormsModule, ReactiveFormsModule ],
    declarations: [AdmissionComponent]
})
export class AdmissionModule {
}
 