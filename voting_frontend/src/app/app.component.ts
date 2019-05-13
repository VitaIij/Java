import {Component, OnDestroy, OnInit} from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import {UserService} from './services/userr.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chat Application';
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
  // private intervalSubscription: Unsubscribable;
  //
  // constructor(private userService: UserService,
  //             private questionService: QuestionService,
  //             private httpClient: HttpClient,
  //             private toaster: ToasterService) {
  // }
  //
  // ngOnInit(): void {
  //   this.userService.initUser();
  //   this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  // }
  //
  // sendMessage(message: string): void {
  //   this.httpClient.put('chat', message)
  //     .subscribe(() => this.toaster.pop('success', 'Message sended.'));
  // }
  //
  // ngOnDestroy(): void {
  //   if (this.intervalSubscription) {
  //     this.intervalSubscription.unsubscribe();
  //   }
  // }

}
