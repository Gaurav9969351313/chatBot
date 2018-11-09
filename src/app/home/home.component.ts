import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showChatBotWrapper:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToChatBotWrapper() {
     this.showChatBotWrapper = true;
  }

  CloseChatBotWrapper() {
    this.showChatBotWrapper = false;
  }
}
