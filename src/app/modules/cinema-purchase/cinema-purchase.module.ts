import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaPurchaseComponent } from './cinema-purchase.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CinemaPurchaseComponent
}]


@NgModule({
  declarations: [
    CinemaPurchaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CinemaPurchaseComponent]
})
export class CinemaPurchaseModule { }
