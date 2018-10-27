import { BrowserModule } from '@angular/platform-browser';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpeechService } from "./speech.service";
import { HttpService } from "./http.service";

import { AuthGuard } from "./auth.guard";

import { LoginComponent } from './login/login.component';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConversationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule, ReactiveFormsModule,FormsModule
  ],
  providers: [AuthGuard,HttpService,SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
