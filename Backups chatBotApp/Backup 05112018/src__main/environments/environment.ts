// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://stackblitz.com/edit/angular-2-5-registration-login-example?file=app%2F_models%2Fuser.ts

export const environment = {
  production: false,
  apiUrl: "http://localhost:5000",
  apiForBtns:"getButtonsByIndent",
  welcomeMsg:"Hi {% username %}, How may I help you ?",
  loginByTokenUrl:"https://mapps.mahindra.com/BMCRemedyBotTest/chatbot?tokens=" ,
  loginErrorMsg:"UserId Might Be Wrong.",
  loginSucessMsg: "User Logged In Sucessfully",

  cardHeaderTemplate:"Please find below information for {% userIntent %} Number",

  sessionUrl:"https://ntech.mahindra.com:8443/MSbot.py"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
