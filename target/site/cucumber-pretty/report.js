$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 6567339209,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 2747168005,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter tugba@sample.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tugba@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "MessengerPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 346588631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerPageSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 64441153,
  "status": "passed"
});
formatter.match({
  "location": "MessengerPageSD.clickOnSignButton()"
});
formatter.result({
  "duration": 7825786404,
  "status": "passed"
});
formatter.match({
  "location": "MessengerPageSD.verifySignInErrorMessage()"
});
formatter.result({
  "duration": 36038335,
  "status": "passed"
});
formatter.after({
  "duration": 135814885,
  "status": "passed"
});
});