import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], keys: string[], isAsc: boolean): any[] {
    const sortedArray = [...array];
    const order = isAsc ? 1 : -1;

    keys.forEach((key, index, arr) => {
      if (!index) {
        sortedArray.sort((a, b) => (a[key] < b[key] ? -1 : 1) * order);
      } else {
        sortedArray.sort((a, b) => {
          if (a[arr[index - 1]] === b[arr[index - 1]]) {
            return (a[key] < b[key] ? -1 : 1) * order;
          }

          return 0;
        });
      }
    });

    return sortedArray;
  }
}
