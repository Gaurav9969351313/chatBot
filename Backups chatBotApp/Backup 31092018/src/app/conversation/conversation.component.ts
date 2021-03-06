import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from "../shared/http.service";
import { SpeechService } from "../shared/speech.service";
import { Router } from "@angular/router";
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { DialogService } from '../shared/dialog.service';
import { environment } from "../../environments/environment";

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
  dictLandingPageLinks:any;
  dictLandingPageLinksWithURLS = [];
  btnsData:any;

  welcomeMsg :string = "";

  constructor(private speechRecognitionService: SpeechService,
    private httpService: HttpService,
    private sanitizer: DomSanitizer,
    private dilogService: DialogService,
    private router: Router) {
    this.showSearchButton = true;
    this.speechData = "";
    this.dictLandingPageLinks = [];
    this.dictLandingPageLinksWithURLS = [];

    this.httpService.get("getLandingPageLinks").subscribe((links:any)=>{
      this.dictLandingPageLinks = [];
      Object.keys(links).forEach(element => {
          var indivisualIntentDetails:any = links[element];
          //indivisualIntentDetails["url"] = links[element].name.toString().trim().lowercase();
          this.dictLandingPageLinks.push(indivisualIntentDetails);
      });

      for (let i = 0; i < this.dictLandingPageLinks.length; i++) {
        const element = this.dictLandingPageLinks[i];
        this.dictLandingPageLinks[i]["url"] = environment.apiForBtns + '/' + this.dictLandingPageLinks[i].name.trim().toLowerCase().replace(/ /g,'');
        this.dictLandingPageLinksWithURLS.push( this.dictLandingPageLinks[i]);
      }

      console.log(this.dictLandingPageLinksWithURLS);

    });
  }


 

  ngOnInit() {
    var jsonUserData = JSON.parse(localStorage.getItem("LoggedInUser"));
     // this.speechRecognitionService.speak("Lisa Booted"); // @toDo: must be removed 
    this.welcomeMsg = environment.welcomeMsg.replace('{% username %}',jsonUserData.empname);

    this.arrDummyConversation.push({ type: "s", text: this.welcomeMsg },
    { type: "landingCard" },
    { type: "iframe", url: this.url },
    { type: "rating", text: "Rate the work" }
    );
    this.getButtonsCard();
  }

  onLogin() {
    this.isAuthenticated = !this.isAuthenticated;
    console.log("captured in parent component", this.isAuthenticated);
  }

  sendMessageByUser() {
    console.log(this.messageDialogModel.dialog);
    this.arrDummyConversation.push({ type: 'r', text: this.messageDialogModel.dialog });
  }

  sendMessageByBot(msg) {
    this.arrDummyConversation.push({ type: 's', text: msg });
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
  
  getButtonsCard() {
    this.httpService.get("getButtonsByIndent/attrition").subscribe((buttons:[])=>{
        console.log(buttons);
        var headerMsg = "Please find below information for SubDepartment";
        var obj = {
          "btns": buttons,
          "headerMsg":headerMsg
        }
        this.btnsData = obj;
        // this.arrDummyConversation.push({ type: "cardWithIframeAndButtons","cardData":this.btnsData});
    });
  }

  getButtons(getButtonsUrl){
    this.httpService.get(getButtonsUrl).subscribe((btnsData:any)=>{
      console.log("btnsData:- ",btnsData);
    }); 
  }

  ratingComponentClick(ratingObj: any): void { 
    console.log(ratingObj);
  }
  clearChat() {
    this.arrDummyConversation = [];
    this.arrDummyConversation.push(
      { type: "s", text: this.welcomeMsg },
      { type: "landingCard" });
  }
}
