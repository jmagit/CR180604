import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro-pesetas',
  templateUrl: './euro-pesetas.component.html',
  styleUrls: ['./euro-pesetas.component.css']
})
export class EuroPesetasComponent implements OnInit {
  private factor = 166.386;
  private pesetas = 0;
  private euros = 0;

  constructor() { }

  ngOnInit() {
  }

  public get Pesetas() { return this.pesetas; }
  public set Pesetas(valor: number) {
    if (this.pesetas !== valor) {
      this.pesetas = valor;
      this.toEuros();
    }
  }

  public get Euros() { return this.euros; }
  public set Euros(valor: number) {
    if (this.euros !== valor) {
      this.euros = valor;
      this.toPesetas();
    }
  }

  toEuros() {
    this.euros = this.pesetas / this.factor;
  }
  toPesetas() {
    this.pesetas = this.euros * this.factor;
  }
}
