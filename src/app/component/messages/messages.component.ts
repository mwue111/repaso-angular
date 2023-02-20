import { Component } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(
    public messageService: MessageService,  //parámetro PÚBLICO para que se pueda unir a la plantilla.
  ) {}

}
