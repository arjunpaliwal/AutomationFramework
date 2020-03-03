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
  "duration": 33332427682,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1151844790,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 619387474,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 4947891317,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 303940061,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3455390652,
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
  "name": "Click on side Nav",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Board button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 26489929482,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1519057334,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 915421340,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 8847100594,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 32691712,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.sideNav()"
});
formatter.result({
  "duration": 1591243064,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openBoard()"
});
formatter.result({
  "duration": 1261977859,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3074206335,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User open the Time Sheet",
  "description": "",
  "id": "automate-hris;user-open-the-time-sheet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Click on side Nav",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click on Timesheet button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 11078393659,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1732714845,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 563105840,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 5425194498,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 113134378,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.sideNav()"
});
formatter.result({
  "duration": 516776325,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openTimeSheet()"
});
formatter.result({
  "duration": 254347809,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 3209149217,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User open the DashBoard",
  "description": "",
  "id": "automate-hris;user-open-the-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Click on side Nav",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on Timesheet button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 12008068732,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1829001379,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 893643974,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 5657080912,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 47058711,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.sideNav()"
});
formatter.result({
  "duration": 618520719,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openTimeSheet()"
});
formatter.result({
  "duration": 675289283,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 2957201840,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User open the Leave",
  "description": "",
  "id": "automate-hris;user-open-the-leave",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Launch HRIS website",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Enter valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User is on HRIS Home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Click on side Nav",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Click on Leave button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click on My leave list sub option of Leave",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.launch_Browser()"
});
formatter.result({
  "duration": 12634578113,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 1492048979,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "duration": 862466774,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "duration": 5896861886,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "duration": 234736476,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.sideNav()"
});
formatter.result({
  "duration": 1226205793,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openleave()"
});
formatter.result({
  "duration": 267273864,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.openLeaveList()"
});
formatter.result({
  "duration": 2449125579,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "duration": 2890245046,
  "status": "passed"
});
});