import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'jsonIteration'
})
export class JsonIterationPipe implements PipeTransform {

  transform(value: any, args?: any): string[] {
    if (!value) {
      return null;
    }
    return Object.values(value);
  }

}
