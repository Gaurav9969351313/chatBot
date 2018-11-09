import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

@Injectable()
export class HttpService {

  private baseUrl = environment.apiUrl;

  //https://mapps.mahindra.com/BMCRemedyBotTest/chatbot?tokens=214333
  //23180189

  //mahindra\11003
  //Mumbai1947

  constructor(private http: Http) { }

  authenticate(empId) {
    var url = environment.loginByTokenUrl + empId;
    return this.http.get(url);
  }

  getSession(jsonDictionary:any) {
    var initialmsg ='{"poll_flag":"true","user_name":"'+jsonDictionary.empname+'","company_address":"'+jsonDictionary.companyAdd+'","company_division":"'+jsonDictionary.companydevision+'","cont_id":"'+jsonDictionary.TokenID+'","designation":"'+jsonDictionary.designation+'","reports_to":"'+jsonDictionary.reportsTo+'","sessionId":""}';
    console.log("inside getSession http.service", initialmsg);
    return this.http.post(environment.sessionUrl,initialmsg);
  }

  httpGet(url:string) {
    return this.http.get(url);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string) {
    return this.request(url, RequestMethod.Delete);
  }

  request(url: string, method: RequestMethod, body?: Object) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', `Bearer ${this.auth.getToken()}`);

    // console.log(this.baseUrl + '/' + url)

    const requestOptions = new RequestOptions({
      url: `${this.baseUrl}/${url}`,
      method: method,
      headers: headers
    });

    // console.log(requestOptions);

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);

    return this.http.request(request)
      .pipe(map((res: Response) => res.json()));
  }


}
