import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule, MatMenuModule, MatInputModule, MatCheckboxModule } from '@angular/material';
=======
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule, MatMenuModule, MatInputModule, MatIconModule } from '@angular/material';
>>>>>>> 19e66317bf982c04b55c28f529bd025649a5b5df
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule, WavesModule,CardsFreeModule,
} from 'angular-bootstrap-md'

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatDialogModule,
<<<<<<< HEAD
  MatCheckboxModule
=======
  MatIconModule,
  CarouselModule,
  WavesModule,
  CardsFreeModule,

>>>>>>> 19e66317bf982c04b55c28f529bd025649a5b5df
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
