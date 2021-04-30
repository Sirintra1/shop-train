import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { RouterModule, Routes } from '@angular/router';
import { PhoneService } from './phone.service';

const routes: Routes = [{
  path: '',
  component: PhoneComponent
}];

@NgModule({
  declarations: [
    PhoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PhoneService],
  exports: [PhoneComponent]
})
export class PhoneModule { }
