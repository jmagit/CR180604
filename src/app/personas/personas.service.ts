import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core';
import { NotifyService } from '../comunes/notify.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasVMService {
  private modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  private listado: Array<any>;
  private elemento: any;
  private idOriginal: any;
  protected pk = 'id';

  constructor(private out: LoggerService, private notify: NotifyService) { }

  get Modo() { return this.modo; }
  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }

  public list() {
    this.modo = 'list';
    if (!this.listado) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34},
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 55},
        { id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 43},
      ];
    }
  }

  public add() {
    this.modo = 'add';
    this.elemento = {};
  }

  public edit(id: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == id);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = id;
      this.modo = 'edit';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }

  public view(id: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == id);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }

  public delete(id: any) {
    if (!window.confirm('¿Seguro?')) {
      return;
    }
    // tslint:disable-next-line:triple-equals
    const ind = this.listado.findIndex(item => item[this.pk] == id);
    if (ind !== -1) {
      this.listado.splice(ind, 1);
      this.list();
    } else {
      this.out.warn('Elemento no encontrado.');
    }
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const ind = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (ind !== -1) {
          this.listado[ind] = this.elemento;
          this.list();
        } else {
          this.notify.add('Elemento no encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
      }
  }

}
