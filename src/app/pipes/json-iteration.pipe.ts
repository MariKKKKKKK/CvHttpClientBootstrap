import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonIteration'
})
export class JsonIterationPipe implements PipeTransform {

  transform(value: any, args?: any): string[] {
    const jsonValues: string[] = Object.values(value);
    return jsonValues;
  }

}
