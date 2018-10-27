import { Component, OnInit } from '@angular/core';
import { SpeechService } from "./speech.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'chatBotApp';
  //(7gQF,[lRSZ8  

  showSearchButton: boolean;
  speechData: string;

  constructor(private speechRecognitionService: SpeechService,
              private router:Router) {
    this.showSearchButton = true;
    this.speechData = "";
  }

  ngOnInit(): void {
    this.speechRecognitionService.speak("Lisa Booted");
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

  navigateToLogin() {
    this.router.navigate(['/home']);
  }
}