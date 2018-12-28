import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
      { path: 'newProduct', component: ProductCreateComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
