import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';
const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:"categories/:id",component:ProductsCategoryComponent},
  {path: 'products-category/:id', component: ProductsCategoryComponent },
  {path:'ProductsCatQP', component: ProductsCategoryQPComponent},
  {path: 'ListCategories',component: ListCategoriesComponent,
    children: [ { path: 'DetailsCategory/:id', component: DetailsCategoryComponent },],},
  {path:'product', loadChildren:() => import('./product/product.module').then(m => m.ProductModule)},
  {path:'apropos', loadChildren:() => import('./apropos/apropos.module').then(m => m.AproposModule)},
  {path:'contact', loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)},
  {path:'profile', loadChildren:() => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path:'formProduct', component: FormProductComponent},
  {path:'**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
