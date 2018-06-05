import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../my-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular';

  constructor(private out: LoggerService) {
    this.out.error('Inicio de la aplicacion');
  }

  ngOnInit() {
  }

}
