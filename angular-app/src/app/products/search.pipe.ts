import { Pipe, PipeTransform } from '@angular/core';
import { ProductsDetail } from '../products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(details: ProductsDetail[], ...args: string[]): ProductsDetail[] {
    const searchText: string = args[0];

    return details.filter((item) => {
      const titleUp: string = item.name.toUpperCase();
      const searchTextUp: string = searchText.toUpperCase();
      return titleUp.includes(searchTextUp);
    });
  }
}
