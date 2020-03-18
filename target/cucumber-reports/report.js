$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automate HRIS",
  "description": "",
  "id": "automate-hris",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "User open the Time Sheet",
  "description": "",
  "id": "automate-hris;user-open-the-time-sheet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click on left side tab and click on Timesheet button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 1568920545,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 6547915714,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 2977174722,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 26206241778,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 12905818,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openTimeSheet()"
});
formatter.result({
  "duration": 2818738755,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 2239944933,
  "status": "passed"
});
});