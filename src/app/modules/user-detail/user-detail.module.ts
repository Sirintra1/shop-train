import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CardUserComponent } from './component/card-user/card-user.component';

const routes: Routes = [{
  path: '',
  component: UserDetailComponent
}];

@NgModule({
  declarations: [
    UserDetailComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserDetailComponent]
})
export class UserDetailModule { }
