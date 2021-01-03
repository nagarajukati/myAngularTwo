import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'products/category/:id', component:SidebarComponent }
]


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
    
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SiteFrameworkModule { }
