import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  constructor() { }

  card:string = "";

  singleButton(btnOneTxt:string) {
      return "<button (click)='callToService()' style='background: #435f7a;color: #f5f5f5;border-radius: 12px;'>" + btnOneTxt +"</button>";
  }

  doubleButton(btnOneTxt:string,btnTwoTxt:string) {
      return ` <div class="form-check">
      <button class="btn btn-info" type="button" name="showpassword" id="showpassword" value="Show Password">Show password</button> 
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>`
  }

  singleButtonWithCard(btnOneTxt:string,cardHeight?,cardWidth?) {
      return `<div class="container"><div class="card card-container">
      <div class="form-check">
      <button class="btn btn-info" type="button" name="showpassword" id="showpassword" value="Show Password">Show password</button> 
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </div></div>`;
  }

  doubleButtonWithCard(btnOneTxt:string,btnTwoTxt:string,cardHeight?,cardWidth?) {

  }

}
