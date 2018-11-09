
export const environment = {
  production: false,
  apiUrl: "http://localhost:5000",
  apiForBtns: "getButtonsByIndent",
  
  loginByTokenUrl: "https://mapps.mahindra.com/BMCRemedyBotTest/chatbot?tokens=",
  loginErrorMsg: "UserId Might Be Wrong.",
  loginSucessMsg: "User Logged In Sucessfully",

  welcomeUserTemplate: "Hi {% username %}, How may I help you ?",
  cardHeaderTemplate: "Please find below information for {% userIntent %} Number",

  sessionUrl: "https://ntech.mahindra.com:8443/MSbot.py",

  landingPageLinks: {
    "headcount": { "name": "Head Count", "appID": "" },
    "attrition": { "name": "Attrition", "appID": "" },
    "newjoineereport": { "name": "New Joinee Report", "appID": "" },
    "rehirereport": { "name": "RE Hire Report", "appID": "" },
    "genderdiversity": { "name": "Gender diversity", "appID": "" },
    "seprationandretirement": { "name": "Separation And Retirement Report", "appID": "" },
    "retirement": { "name": "Retirement", "appID": "" },
    "managerwithhighestattrition": { "name": "Manager with highest attrition", "appID": "" },
    "milestoneworkanniverseryreport": { "name": "Milestone Work Anniversery Report", "appID": "" },
    "birthdayreport": { "name": "Birthday Report", "appID": "" },
    "educationalqualificationreport": { "name": "Educational Qualification Report", "appID": "" },
    "employeemovementreport": { "name": "Employee Movement Report", "appID": "" },
    "rwsanctionsreport": { "name": "RW Sanctions Report", "appID": "" },
    "employeeconfirmationreport": { "name": "Employee Confirmation Report", "appID": "" },
    "performancemanagementreport": { "name": "Performance Management Report", "appID": "" },
    "rewardsandrecognitionreport": { "name": "Rewards And Recognition Report", "appID": "" },
    "regrettableattrition": { "name": "Regrettable Attrition", "appID": "" }
  },

  firstSetBtns: ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"],

  secondSetBtns: ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"],

  thirdSetBtns: ["Gender", "Tenure", "Age", "Band"],

  btnsByIndent: {
    "headcount": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "attrition": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "newjoineereport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "rehirereport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "genderdiversity": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "seprationandretirement": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "retirement": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "managerwithhighestattrition": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "milestoneworkanniverseryreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "birthdayreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "educationalqualificationreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "employeemovementreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "rwsanctionsreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "employeeconfirmationreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "performancemanagementreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "rewardsandrecognitionreport": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },
    "regrettableattrition": { "btns": ["Permanent", "Probationer", "Trainee", "Contract", "Others", "All"] },

    "permanent": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },
    "probationer": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },
    "trainee": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },
    "contract": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },
    "others": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },
    "all": { "btns": ["Sector", "Business Unit", "Division", "Sub Division", "Department", "Sub Department", "Business Function", "Location"] },

    "sector": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "businessunit": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "division": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "subdivision": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "department": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "subdepartment": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "businessfunction": { "btns":  ["Gender", "Tenure", "Age", "Band"] },
    "location": { "btns":  ["Gender", "Tenure", "Age", "Band"] }
  }
};
