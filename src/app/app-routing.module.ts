import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Layout/main/main.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:':query',component:MainComponent},
  {path:'detail/:id',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
