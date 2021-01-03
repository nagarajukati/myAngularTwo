import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { Product } from '../product'

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  productList: Product[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      //console.log(data);
      
      this.productList = data
    })
  }

}
