import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ChatbotWrapperComponent } from "./chatbot-wrapper/chatbot-wrapper.component";
import { LoginComponent } from "./login/login.component";
import { ConversationComponent } from "./conversation/conversation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wrapper', component: ChatbotWrapperComponent },
  { path: 'login', component: LoginComponent },
  { path: 'conversation', component: ConversationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
