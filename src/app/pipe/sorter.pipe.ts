import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {

  transform(value: Movie[] | null, key: string): Movie[] | null {
    if (!Array.isArray(value) || !key) {
      return value;
    } else {
      return value.sort((a, b) => {
        return ('' + a[key as keyof typeof a]).toLowerCase().localeCompare(('' + b[key  as keyof typeof b]).toLowerCase());
      });
    }
  }
}
