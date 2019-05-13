import { Observable } from "rxjs";
import { MessageService } from "./../message.service";
import { Message } from "./../message";
import {Component, Input, OnInit} from "@angular/core";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable< Message[]>;
  message: Message = new Message();
  date: Date = new Date();
  @Input() username: string;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    setInterval(()=> this.reloadData(),3000);
    this.reloadData();
  }

  reloadData() {
    this.messages = this.messageService.getMessageList();
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  save() {
    this.message.username = this.username;
    this.message.time = this.date.getHours().toString() + ':' + this.date.getMinutes().toString();
    this.messageService.createMessage(this.message)
      .subscribe( (data) => {console.log(data); }, error => console.log(error));
    this.message = new Message();
  }

  onSubmit() {
    this.save();
    // this.reloadData();
  }
}
