var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var aux = require('../scripts/aux-scripts.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var assert = chai.assert;

var Login = require('./login.po.js');

defineSupportCode(function(context) {
  let setWorldConstructor = context.setWorldConstructor;
  let Given = context.Given
  let When = context.When
  let Then = context.Then
  let setTimeout = context.setDefaultTimeout
  setTimeout(60 * 1000);
  
  Given(/^I navigate to Gmail site$/, function(callback) {
    Login.navigateToGmail();
    callback();
  });

  When(/^I input valid login$/, function (callback) {
    Login.credentials(browser.params.login.email, browser.params.login.password);
    callback();
  });

  Then(/^inbox page shall be displayed$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    aux.printScreen('logged.png');
    browser.getCurrentUrl().then(function (url) {
      assert.isTrue(url.includes('/#inbox'),"Inbox URL not found.");
      callback();
    });
  });
});