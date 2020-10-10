import { Component, OnInit, Input } from '@angular/core';
import { ProductsDetail, ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductsDetail = null;
  public itemProduct;
  public productsList: UserForm[] = [];
  public firstId: number = 0;

  constructor(public productService: ProductsService) {
    this.productService.getProducts().subscribe((data) => {
      this.itemProduct = data;
    });
   }

  ngOnInit(): void {
  }

  // public saveProduct(newProduct: UserForm){
  //   // To assing ID.
  //   this.firstId++;
  //   newProduct.id = this.firstId;

  //   this.productsList.push(newProduct);

  // }

}
export interface UserForm {
  // id: number;
  name: string;
  price: number;
  data: string;
  link: string;
  opinion: string;
}
