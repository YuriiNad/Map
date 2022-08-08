import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: string[], search: string = ''): string[] {
    return items.filter((el: string) => el?.toLowerCase().includes(search?.toLowerCase()));
  }

}
