import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ProductId = 0
  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(data => {
     // console.log(data);
      this.ProductId = data.id
    })
  }

}
