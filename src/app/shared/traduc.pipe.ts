import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduc'
})
export class TraducPipe implements PipeTransform {

  transform(value: string, args?: string): any {
  
    return null;
  }

}
