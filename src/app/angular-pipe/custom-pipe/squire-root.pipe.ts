import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squireRoot'
})
export class SquireRootPipe implements PipeTransform
{

  transform(value: number, ...args: string[]): unknown
  {
    var parameter: any = args[0];
    var sqroot = value * parameter;
    return sqroot;
  }

}
