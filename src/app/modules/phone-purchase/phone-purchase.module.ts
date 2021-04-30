import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePurchaseComponent } from './phone-purchase.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: PhonePurchaseComponent
}]

@NgModule({
  declarations: [
    PhonePurchaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [PhonePurchaseComponent]
})
export class PhonePurchaseModule { }
