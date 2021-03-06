import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from "lodash";

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  SpeechSynthesis: any;
  SpeechSynthesisUtterance: any;
}


// var reg: SpeechRecognition;
// var typ = typeof SpeechRecognition;

// reg = typ === "undefined" ? new webkitSpeechRecognition() :
//                                 new SpeechRecognition();

@Injectable()
export class SpeechService {

  speechRecognition: any;

  SpeechSynthesisUtterance: IWindow = <IWindow>window;
  speechSynthesis: IWindow = <IWindow>window;
  voice: any;

  constructor(private zone: NgZone) {
    window.speechSynthesis.onvoiceschanged = e => {
      const voices = window.speechSynthesis.getVoices();
      //voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];
      this.voice = voices.filter(function (voice) { return voice.name == 'Google हिन्दी'; })[0];
    }
  }

  stopSpeaking() {
    speechSynthesis.cancel();
  }

  speak(voiceMsg) {
    var msg = new SpeechSynthesisUtterance(voiceMsg);
    msg.lang = 'hi-IN';
    msg.voice = this.voice;
    window.speechSynthesis.speak(msg);
  }

  record(): Observable<string> {

    return Observable.create(observer => {
      const { webkitSpeechRecognition }: IWindow = <IWindow>window;
      this.speechRecognition = new webkitSpeechRecognition();
      this.speechRecognition.continuous = true;
      //this.speechRecognition.interimResults = true;
      this.speechRecognition.lang = 'en-us';
      this.speechRecognition.maxAlternatives = 1;

      this.speechRecognition.onresult = speech => {
        let term: string = "";
        if (speech.results) {
          var result = speech.results[speech.resultIndex];
          var transcript = result[0].transcript;
          if (result.isFinal) {
            if (result[0].confidence < 0.3) {
              console.log("Unrecognized result - Please try again");
            }
            else {
              term = _.trim(transcript);
            }
          }
        }
        this.zone.run(() => {
          observer.next(term);
        });
      };

      this.speechRecognition.onerror = error => {
        observer.error(error);
      };

      this.speechRecognition.onend = () => {
        observer.complete();
      };

      this.speechRecognition.start();
      console.log("Say something - We are listening !!!");
    });
  }

  DestroySpeechObject() {
    if (this.speechRecognition)
      this.speechRecognition.stop();
  }
}
