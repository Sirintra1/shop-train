import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './cinema.component';
import { RouterModule, Routes } from '@angular/router';
import { CinemaService } from './cinema.service';

const routes: Routes = [{
  path: '',
  component: CinemaComponent
}]

@NgModule({
  declarations: [
    CinemaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CinemaService],
  exports: [CinemaComponent]
})
export class CinemaModule { }
