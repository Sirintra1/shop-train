import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  },
  {
    path: 'phone',
    loadChildren: () => import('./modules/phone/phone.module')
      .then(mod => mod.PhoneModule)
  }, {
    path: 'phone/:id',
    loadChildren: () => import('./modules/phone-purchase/phone-purchase.module')
      .then(mod => mod.PhonePurchaseModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module')
      .then(mod => mod.UserModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./modules/user-detail/user-detail.module')
      .then(mod => mod.UserDetailModule)
  },
  {
    path: 'cinema',
    loadChildren: () => import('./modules/cinema/cinema.module')
      .then(mod => mod.CinemaModule)
  },
  {
    path: 'cinema/:id',
    loadChildren: () => import('./modules/cinema-purchase/cinema-purchase.module')
      .then(mod => mod.CinemaPurchaseModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
