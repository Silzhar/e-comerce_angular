import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { SettingsModule } from './settings/settings.module';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: (() => {
      return import('./home/home.module').then(m => HomeModule);
    })
  },
  {
    path: 'products',
    loadChildren: (() => {
      return import('./products/products.module').then(m => ProductsModule);
    }),
  },
  {
    path: 'settings',
    loadChildren: (() => {
      return import('./settings/settings.module').then(m => SettingsModule);
    })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
