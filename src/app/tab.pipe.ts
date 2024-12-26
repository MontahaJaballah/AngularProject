import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tab'
})
export class TabPipe implements PipeTransform {

  transform(array: any[], search: string): any[] {
    if (!array || !search) {
      return array;
    }
    return array.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  }

}
