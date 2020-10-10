import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path: '',
  component: ProductsComponent,
}];

@NgModule({
  declarations: [ProductsComponent,
    SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    SearchPipe,
  ]
})
export class ProductsModule { }
