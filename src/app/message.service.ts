import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];  //atributo messages que será un array vacío de string.

  add(message: string) {
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
