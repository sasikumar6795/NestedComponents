import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[], args?: string): string[] {
    if (args === 'productName') {
      return value.sort((a: any, b: any) => {
        return a.productName < b.productName ? -1 : 1;
      });
    } else if (args === 'price') {
      return value.sort((a: any, b: any) => {
        return a.price < b.price ? -1 : 1;
      });
    }
    console.log(value);
    return value;
  }
}
