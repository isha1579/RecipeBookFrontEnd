// order-by-name.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByName'
})
export class OrderPipe implements PipeTransform {
  transform(recipes: any[]): any[] {
    if (!recipes) {
      return [];
    }
    return recipes.sort((a, b) => a.name.localeCompare(b.name));
  }
}
