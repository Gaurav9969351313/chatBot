import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from "./shared/http.service";
import { SafebrowsePipe } from "./shared/safebrowse.pipe";
import { SafehtmlPipe } from "./shared/safehtml.pipe";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChatbotWrapperComponent } from './chatbot-wrapper/chatbot-wrapper.component';
import { ConversationComponent } from './conversation/conversation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChatbotWrapperComponent,
    ConversationComponent,
    SafehtmlPipe,
    SafebrowsePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
