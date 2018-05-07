import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatCardModule, MatButtonToggleModule,
    MatCheckboxModule, MatTableModule, MatCommonModule,
    MatToolbarModule, MatIconModule, MatSidenavModule,
     MatListModule, MatExpansionModule, MatFormFieldModule,
      MatDatepickerModule, MatRadioModule,
       MatInputModule, MatNativeDateModule, MatSelectModule, MatDialogModule
} from '@angular/material';
@NgModule({
    imports: [MatButtonModule,
        MatCardModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTableModule,
        MatCommonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatFormFieldModule,
      MatDatepickerModule,
        MatRadioModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDialogModule
    ],

    exports: [MatButtonModule,
        MatCardModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTableModule,
        MatCommonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatFormFieldModule,
      MatDatepickerModule,
        MatRadioModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDialogModule
    ]
})

export class MaterialModule {

}

