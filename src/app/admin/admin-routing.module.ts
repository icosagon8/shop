import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductsComponent, AddProductComponent, EditProductComponent, OrdersComponent } from './components';
import { AuthGuard } from '../core/guards/auth.guard';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'product/add', component: AddProductComponent },
          {
            path: 'product/edit/:productID',
            component: EditProductComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              user: ProductResolveGuard,
            },
          },
          { path: 'orders', component: OrdersComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
  static components = [AdminComponent, ProductsComponent, AddProductComponent, EditProductComponent, OrdersComponent];
}
