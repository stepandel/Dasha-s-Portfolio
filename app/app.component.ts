import { Component, HostListener } from '@angular/core';
import { MessageService } from './services/message.service';

import { Message } from './models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  message: Message = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
    private messageService: MessageService
  ) { }

  onSubmit({value,valid}: {value: Message, valid: boolean}){
    console.log(this.message);
    if(valid){
      this.messageService.newMessage(this.message);
    }
  }

}