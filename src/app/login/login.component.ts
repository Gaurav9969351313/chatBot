import { Component, OnInit, Output, EventEmitter,ViewChild } from '@angular/core';
import { HttpService } from "../shared/http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userModel: any = {};

  isUserAuthenticated: boolean = false;

  constructor(private httpService: HttpService, private route: Router) { }

  ngOnInit() {
  }

  @Output() onLogin = new EventEmitter<boolean>();

  showConversation(isUserAuthenticatedBE: boolean) {
    console.log(isUserAuthenticatedBE);
    this.isUserAuthenticated = isUserAuthenticatedBE;
    this.onLogin.emit(isUserAuthenticatedBE);
  }

  login() {
    var objCreads = {};

    objCreads["strUserName"] = this.userModel.username;
    objCreads["strUserPassword"] = this.userModel.password;

    console.log(objCreads);

    this.fn_loginResponse({});

    // this.httpService.post("", objCreads).subscribe((authData: any) => {
    //   console.log(authData);
    //   this.fn_loginResponse(authData);
    // });
  }

  fn_loginResponse(loginResponse: any) {

    localStorage.setItem("currentUser",'{"name":"Gaurav","token":"gauravtalele1102"}');
    if (true) //status true
      this.showConversation(true);
    //this.route.navigate(['/conversation']);
  }
}
