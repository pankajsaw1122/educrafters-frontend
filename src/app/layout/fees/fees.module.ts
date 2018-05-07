import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FeesRoutingModule } from './fees-routing.module';
import { InsertFeesComponent } from './insert-fees/insert-fees.component';
import { FeesComponent } from './fees.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FeesRoutingModule, PageHeaderModule, MaterialModule, FormsModule, ReactiveFormsModule],
    declarations: [FeesComponent, InsertFeesComponent],
    entryComponents: [
        InsertFeesComponent
    ],

})
export class FeesModule {}
