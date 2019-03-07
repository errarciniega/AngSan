import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    if(args)
  {
    if(args == 'lower')
    {
      return value.toLowerCase();
    } else if(args == 'upper')
      {
        return value.toUpperCase();
      }
  } else
  {
    return value.toLowerCase();
  }
    return null;
  }

}
