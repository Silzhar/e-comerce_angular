import { Component, OnInit } from '@angular/core';
import { ProductsDetail, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductsDetail;
  public searchText: string = '';
  
  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe((item: ProductsDetail) => {
      this.products = item;
  });
  }

  ngOnInit(): void {
  }

}
