import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form) {
    
    let newProduct = {
      productName: form.value.productName,
      description: form.value.description
    }
    
    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log("Product added successfully");
      
    })
   
  }

}
