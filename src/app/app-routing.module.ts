import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsCartEmptyGuard } from './orders/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full',
  },
  {
    path: 'order',
    canLoad: [IsCartEmptyGuard],
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
