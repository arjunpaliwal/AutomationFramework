$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automate HRIS",
  "description": "bsjdfbjbfjbsgg",
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
  "duration": 7020578027,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
formatter.result({
  "duration": 3107517914,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.132)\n  (Driver info: chromedriver\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706),platform\u003dLinux 5.3.0-40-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027qainfotech-Latitude-3490\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.3.0-40-generic\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578700 (2f1ed5f9343c13..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:38371}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.132, webStorageEnabled: true}\nSession ID: d5f73b5ebd56cf9d1cd5fee0814991cd\n*** Element info: {Using\u003did, value\u003dusername}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.qait.actions.VPNPortal.vpnLogin(VPNPortal.java:10)\n\tat com.qait.actions.Initiator.openURL(Initiator.java:27)\n\tat stepDefintion.TestSteps.launch_HRIS(TestSteps.java:28)\n\tat ✽.When Launch HRIS website(Test.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.user_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.submitLoginClick()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.homePageHRIS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.browserClose()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 874686510,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.launch_HRIS()"
});
