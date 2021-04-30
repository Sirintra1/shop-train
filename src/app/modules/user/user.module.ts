import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';

const routes: Routes = [{
  path: '',
  component: UserComponent
}]

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService],
  exports: [UserComponent]
})
export class UserModule { }
