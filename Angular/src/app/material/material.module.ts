// Material Design Modules

import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { MatSidenavModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,
            MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
            MatTableModule,MatPaginatorModule, MatSortModule, MatTooltipModule,
            MatExpansionModule, MatRadioModule, MatDividerModule, MatTabsModule,
            MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule,
            MatDialogModule, MatSnackBarModule, MatProgressBarModule],

  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,
            MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
            MatTableModule,MatPaginatorModule, MatSortModule, MatTooltipModule,
            MatExpansionModule, MatRadioModule, MatDividerModule, MatTabsModule,
            MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule,
            MatDialogModule, MatSnackBarModule, MatProgressBarModule],
})
export class MaterialModule {

 }
