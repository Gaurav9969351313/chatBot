import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { HttpService } from "../shared/http.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardType:any;
  @Input() cardData:any;

  @Input() clickedButton = new EventEmitter();

  cardHeader:string="";
  buttons=[];

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    console.log("this.cardData:- ", this.cardData);
    console.log("cardType:- ",this.cardType)
    if(this.cardType == "landingCard"){
      console.log("landing card");
    } else if(this.cardType == "cardWithIframeOnly") {
      console.log("cardWithIframeOnly");
    } else if(this.cardType == "cardWithIframeAndButtons"){
      console.log("cardWithIframeAndButtons:- ", this.cardData);
      if(this.cardData != null && this.cardData != undefined)
        this.cardHeader = this.cardData.headerMsg;
        this.buttons = this.cardData.btns;
    }
  }

}
