import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  username: string;

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.username = this.token.getUsername();
    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
