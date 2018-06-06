import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../comunes/notify.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private srv: NotifyService) { }

  public get Servicio() { return this.srv; }

  ngOnInit() {
  }


}
