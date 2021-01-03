import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product'

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute,
  private productsService: ProductsService) { }
  searchcategory = ''
  productList : Product[];
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      //console.log(data);
      this.searchcategory = data.id;
      
      this.productsService.searchCategoryProduct(this.searchcategory).subscribe(categorydata => {
        this.productList = categorydata
      })

      
    })
  }

}
