import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
@Injectable()
export class ChatService {

  constructor(private httpService:HttpService) { }

  getLandingPageLinks() {
   
    return ""
  }
  


}
