import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const productsUrl: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: ProductsDetail[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductsDetail> {
    const productsList: Observable<ProductsDetail> = this.httpClient.get(
      productsUrl
    ) as Observable<ProductsDetail>;
    return productsList;
  }
}

export interface ProductsDetail {
  id: number;
  name: string;
  price: number;
  description: string;
  stars: number;
  image: string;
}
