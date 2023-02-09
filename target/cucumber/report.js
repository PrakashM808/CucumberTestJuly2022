$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SkyBlueBackground.feature");
formatter.feature({
  "line": 1,
  "name": "The URL functonality validation",
  "description": "",
  "id": "the-url-functonality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sky Blue Background;",
  "description": "",
  "id": "the-url-functonality-validation;sky-blue-background;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button on Set SkyBlue Background",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "SkyBlueBackgroundSteps.button_exists(String)"
});
formatter.result({
  "duration": 2849290100,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackgroundSteps.i_click_on_the_button_on_Set_SkyBlue_Background()"
});
formatter.result({
  "duration": 59159700,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackgroundSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 26467200,
  "status": "passed"
});
formatter.after({
  "duration": 16800914400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "White Background Change;",
  "description": "",
  "id": "the-url-functonality-validation;white-background-change;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "\"Set White Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the button on Set White Background",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Background",
      "offset": 1
    }
  ],
  "location": "SkyBlueBackgroundSteps.button_exists(String)"
});
formatter.result({
  "duration": 2050084000,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackgroundSteps.i_click_on_the_button_on_Set_White_Background()"
});
formatter.result({
  "duration": 44684700,
  "status": "passed"
});
formatter.match({
  "location": "SkyBlueBackgroundSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 24982500,
  "status": "passed"
});
formatter.after({
  "duration": 16757417400,
  "status": "passed"
});
});