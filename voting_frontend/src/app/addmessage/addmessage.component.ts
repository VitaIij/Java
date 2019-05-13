import { MessageService } from './../message.service';
import { Message } from './../message';
import { Component, OnInit } from '@angular/core';
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {
  message: Message = new Message();
  submitted = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  newMessage(): void {
    this.submitted = false;
    this.message = new Message();
  }

  save() {
    this.messageService.createMessage(this.message)
      .subscribe(data => console.log(data), error => console.log(error));
    this.message = new Message();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
