# testcafe-pet

Pet Proyect using Ubuntu + testcafe 

## Requirements 
* npm https://www.npmjs.com/ 
* node +14 -https://nodejs.org/en/download/releases/ 
* testcafe  https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe
* nvm (optional to handle node versions) https://github.com/nvm-sh/nvm 

## To run the test 
On a terminal run :
* `npm i -g testcafe` // will install testcafe from npm 
* `testcafe chrome first_test.js` // this will only run the test on chrome browser
* `testcafe chrome:headless first_test.js` // headless mode 

## About the tests 
Simple scenarios using testcafe test page https://devexpress.github.io/testcafe/example/ 
Clicking radio buttons, checkbox, buttons, skiping test, etc