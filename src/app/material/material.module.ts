import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule, MatMenuModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatDialogModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
