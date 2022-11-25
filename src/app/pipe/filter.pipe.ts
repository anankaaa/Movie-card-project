import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(items: any, filter: any) {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      return items.filter((item) => {
        return filterKeys.some((keyName) => {
          return (
            new RegExp(filter[keyName], 'gi').test(item[keyName]) ||
            filter[keyName] === ''
          );
        });
      });
    }
    return items;
  }
}
