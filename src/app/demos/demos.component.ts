import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../my-core';
import { NotifyService } from '../comunes/notify.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  nombre: string = 'Mundo';
  listado = [
    { id: 1, nombre: 'Toledo'},
    { id: 2, nombre: 'CIUDAD REAL'},
    { id: 3, nombre: 'albacete'},
    { id: 4, nombre: 'CuenCa'},
  ];
  idProvincia = 2;

  resultado: string;
  // tslint:disable-next-line:no-inferrable-types
  visible: boolean = true;
  estetica = { importante: true, error: false, remarcar: true };

  constructor(private out: LoggerService, public notify: NotifyService) { }

  ngOnInit() {
  }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    if (!provincia || provincia === '') {
      this.out.error('Falta la provincia.');
      return;
    }
    let id = 1;
    if (this.listado.length > 0) {
      id = this.listado[this.listado.length - 1].id + 1;
    }
    this.listado.push({ id: id, nombre: provincia});
    this.idProvincia = id;
  }
}
