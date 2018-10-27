import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from "../shared/http.service";
import { SpeechService } from "../shared/speech.service";
import { Router } from "@angular/router";
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})

export class ConversationComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  isAuthenticated: boolean = false;
  url:SafeResourceUrl ="http://plnkr.co";

  arrDummyConversation = [];
  messageDialogModel: any = {};

  messageDialogByUser: string = "";

  showSearchButton: boolean;
  speechData: string;

  safeHtmlContent: string;

  constructor(private speechRecognitionService: SpeechService,
    private httpService: HttpService,
    private sanitizer: DomSanitizer,
    private dilogService: DialogService,
    private router: Router) {
    this.showSearchButton = true;
    this.speechData = "";
  }

  ngOnInit() {

    // this.speechRecognitionService.speak("Lisa Booted"); // @toDo: must be removed 

    this.arrDummyConversation.push(
      { type: "r", text: "hii..." },
      { type: "s", text: "welcome to mahindra and mahindra" },
      { type: "r", text: "how are you" },
      { type: "s", text: "hypothetical question..." },
      { type: "s", text: "is their any problem which hampers your productivity sir" },
      { type: "r", text: "thank you for your concern..." },
      { type: "r", text: "Get me a single button" },
      { type: "sBtn", text: "Get Chart" },
      { type: "r", text: "Get me two buttons" },
      { type: "dBtn", text1: "Ok",text2:"Cancel" },
      { type: "r", text: "Get me a single button with card" },
      { type: "scBtn", text: "Get Chart" },
      { type: "r", text: "Get me a two buttons with card" },
      { type: "dcBtn", text1: "Ok",text2:"Cancel" },
      { type: "iframe", url: this.url },
      { type: "rating", text: "Rate the work" }
      // { type: "dcBtn", text: this.dilogService.singleButtonWithCard("Abc") }

    );
  }

  onLogin() {
    this.isAuthenticated = !this.isAuthenticated;

    console.log("captured in parent component", this.isAuthenticated);
  }

  sendMessage() {
    console.log(this.messageDialogModel.dialog);
    this.arrDummyConversation.push({ type: 'r', text: this.messageDialogModel.dialog });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
      .subscribe(
        (value) => {
          this.speechData = value;
          document.getElementById("txtSpeechSearchMovieName").innerHTML = this.speechData;
          console.log(value);
        },
        (err) => {
          console.log(err);
          if (err.error == "no-speech") {
            console.log("--restatring service--");
            this.activateSpeechSearchMovie();
          }
        },
        () => {
          this.showSearchButton = true;
          console.log("--complete--");
          this.activateSpeechSearchMovie();
        });
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  callToService() {
    console.log("Hello World Chart");
  }

  btnFirstClicked() {
    this.arrDummyConversation.push({ type: 'r', text: "you clicked first button" });
  }
  

  btnSecondClicked() {
    this.arrDummyConversation.push({ type: 'r', text: "you clicked Second button" });
  }

  ratingComponentClick(ratingObj: any): void { 
    console.log(ratingObj);
  }
}
