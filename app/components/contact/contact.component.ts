import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

import { Message } from '../../models/Message';
import { element } from 'protractor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  response = {
    success: false,
    header: "Oops! Something doesn't seem right!",
    body: 'Please check your message'
  };
  message: Message = {
    name: '',
    email: '',
    message: ''
  };

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 2000, behavior:'smooth'});
  }

  onSubmit({value,valid}: {value: Message, valid: boolean}){
    if(valid){
      
      this.response = {
        success: true,
        header: "Thank you for your message!",
        body: "I'll get back to you shortly"
      };
      
    } else {
      this.response = {
        success: false,
        header: "Oops! Something doesn't seem right",
        body: 'Please check your message'
      };
    }
  }

  onClick(){
    if(this.response.success){
      //send the message
      this.messageService.newMessage(this.message);
      //reset the form
      this.message = {
        name: '',
        email: '',
        message: ''
      };
    }
  }

}
