
import { AddmessageComponent } from './addmessage/addmessage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'chat', component: AddmessageComponent },
  {path: 'home',  component: HomeComponent },
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
