import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TabComponent } from './tab/tab.component';
import {MatInputModule} from '@angular/material/input';
import { ChatComponent } from './chat/chat.component';
import {MatButtonModule} from '@angular/material/button';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './app-routing.module';

import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    TabComponent,
    ChatComponent,
    AddmessageComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
