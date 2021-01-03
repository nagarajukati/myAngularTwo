import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productList: Product[];
  
  productid = 0
  constructor(private activatedRoute: ActivatedRoute,
  private productsService: ProductsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productid = data.id
    })
    this.productsService.viewProduct(this.productid).subscribe(data => {
      //console.log(data);
      
      this.productList = data
    })
  }

  updateNewProduct(form) {
    
  }

}
