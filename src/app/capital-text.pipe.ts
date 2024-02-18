import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalText'
})
export class CapitalTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}

