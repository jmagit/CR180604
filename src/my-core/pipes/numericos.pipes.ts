import { Pipe, PipeTransform } from '@angular/core';

const factor = 166.386;

@Pipe({
  name: 'toeuros'
})
export class ToEurosPipe implements PipeTransform {
  transform(value: any): any {
    return value / factor;
  }
}

@Pipe({
  name: 'topesetas'
})
export class ToPesetasPipe implements PipeTransform {
  transform(value: any): any {
    return value * factor;
  }
}


export const NUMERICOS_PIPES = [ ToEurosPipe, ToPesetasPipe ];
