$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automate HRIS",
  "description": "",
  "id": "automate-hris",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User can login HRIS",
  "description": "",
  "id": "automate-hris;user-can-login-hris",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Launch HRIS website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 17251844037,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1402465172,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 1193001486,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 4631435140,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 13090988,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3131245569,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User open the Board section",
  "description": "",
  "id": "automate-hris;user-open-the-board-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Click on left side tab and click on Board button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 15908101309,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 4434989214,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 978939513,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 7159830372,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 9721488,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openBoard()"
});
formatter.result({
  "duration": 1618556648,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3133009877,
  "status": "passed"
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
  "duration": 18055877514,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 2064888283,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 565009417,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 8011897788,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 6365676,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openTimeSheet()"
});
formatter.result({
  "duration": 225859159,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3097697708,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User open the DashBoard",
  "description": "",
  "id": "automate-hris;user-open-the-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on left side tab and click on DashBoard button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 13324497193,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1201304958,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 575192513,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 9118955294,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 6392024,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openDashbaord()"
});
formatter.result({
  "duration": 1322470428,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3017991768,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User open the Leave",
  "description": "",
  "id": "automate-hris;user-open-the-leave",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Click on left side tab and click on Leave button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on My leave list sub option of Leave",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 14153517734,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1051329185,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 515541721,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 7478418706,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 954888324,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openleave()"
});
formatter.result({
  "duration": 621936072,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openLeaveList()"
});
formatter.result({
  "duration": 2260352137,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3145313155,
  "status": "passed"
});
});