import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService } from "../shared/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  landingLinksAll = [];
  landingLinks = []; //container
  viewMoreFlag: boolean = false;

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    var keys = Object.keys(environment.landingPageLinks);

    for (let i = 0; i < keys.length; i++) {
      const name = environment.landingPageLinks[keys[i]].name;
      this.landingLinksAll.push({ name: name, key: keys[i] });
    }
    this.landingLinks = this.landingLinksAll.slice(0, 3);
  }

  

  clickedLangingLink(name, key) {
    console.log("this landing page link is been clicked " + name + ' ' + key);
  }

  viewMoreToggler() {
    this.viewMoreFlag = !this.viewMoreFlag;
    if (this.viewMoreFlag) {
      this.landingLinks = this.landingLinksAll;
    } else {
      this.landingLinks = this.landingLinksAll.slice(0, 3);
    }
  }
}
