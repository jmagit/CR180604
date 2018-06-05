import { Injectable, Optional } from '@angular/core';
import { LoggerService } from '../../my-core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private listado = new Array<string>();

  constructor(@Optional() private out: LoggerService) { }

  public get Listado(): Array<string> { return Object.assign([], this.listado); }

  public add(msg: string): void {
    this.listado.push(msg);
    if (this.out) {
      this.out.error(msg);
    }
  }
  public remove(index: number): void {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    } else if (this.out) {
      this.out.error('Indice fuera de rango.');
    }
  }
  public clear() {
    this.listado.splice(0);
  }
}
