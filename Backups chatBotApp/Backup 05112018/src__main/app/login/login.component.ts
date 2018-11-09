import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpService } from "../shared/http.service";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // username: "",
  // password: "Admin"

  userModel: any = { };
  errMessage:string="";
  isUserAuthenticated: boolean = false;

  @Output() onLogin = new EventEmitter<boolean>();

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {  }

  showConversation(isUserAuthenticatedBE: boolean) {
    console.log(isUserAuthenticatedBE);
    this.isUserAuthenticated = isUserAuthenticatedBE;
    this.onLogin.emit(isUserAuthenticatedBE);
  }

  login() {
    //214333
    this.httpService.authenticate(this.userModel.username).subscribe((authData: any)=>{
        var inputTagsArray = authData._body.match(/<input.+?\/?>/g);
        this.loginCallBack(inputTagsArray);  
    })
  }

  loginCallBack(inputTagsArray) {
    var jsonDictionary = {};
    
    for (let i = 0; i < inputTagsArray.length; i++) {
      const element = inputTagsArray[i];
      var temp = element.split('"');
      for (let j = 0; j < temp.length; j++) {
        var obj = {};
        jsonDictionary[temp[5]] = temp[3];
        break;
      }
    }
    
    if (jsonDictionary["empname"] == "") {
      this.errMessage = environment.loginErrorMsg;
    }
    else {
      jsonDictionary["sessionId"] = "";
      // this.httpService.getSession(jsonDictionary).subscribe((sessionData:any)=>{
      //     console.log("session Data",sessionData);
      // });

      var strJsonDictionary = JSON.stringify(jsonDictionary);
      localStorage.setItem("LoggedInUser",strJsonDictionary);
      this.router.navigate(['/conversation']);
      this.showConversation(true);
      this.errMessage = environment.loginSucessMsg;
    }
    console.log(jsonDictionary);
  }
}
