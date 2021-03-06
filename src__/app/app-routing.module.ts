import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ConversationComponent } from "./conversation/conversation.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'conversation', component: ConversationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
