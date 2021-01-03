import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service'
import { Category } from '../category'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private productsService:ProductsService) {
    
  }
  
  categoryList: Category[];

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((data) => {    
     // console.log(data);      
      this.categoryList = data; 
      
      
    
    })
  }

}
