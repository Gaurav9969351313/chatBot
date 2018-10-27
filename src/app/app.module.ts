import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from "./shared/auth.guard";

import { HttpService } from "./shared/http.service";
import { SpeechService } from "./shared/speech.service";
import { DialogService } from "./shared/dialog.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';
import { SafehtmlPipe } from './shared/safehtml.pipe';
import { SafebrowsePipe } from './shared/safebrowse.pipe';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConversationComponent,
    HomeComponent,
    SafehtmlPipe,
    SafebrowsePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule, FormsModule
  ],
  providers: [HttpService,SpeechService,DialogService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
