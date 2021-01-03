import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module'
import { Routes, RouterModule } from '@angular/router';
import { SiteFrameworkModule } from './site-framework/site-framework.module'
import { ListOrdersComponent } from './orders/list-orders/list-orders.component'
import { HttpClientModule } from '@angular/common/http/'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AngularComponent } from './angular/angular.component';
import { ReactRendererComponent } from './angular/react-renderer'




const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orderlist', component:ListOrdersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AngularComponent,
    ReactRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrdersModule,
    RouterModule.forRoot(routes),
    SiteFrameworkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }