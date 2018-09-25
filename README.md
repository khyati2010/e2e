# venminder_gui
venminder_gui

## Table of Contents

1. [Testing](#testing)
2. [Protractor](#protractor)
3. [Page Objects](#page-objects)
4. [Useful Links](#useful-links)


## Testing

When it comes to testing AngularJS applications, there are two main types of tests you want to cover: unit and e2e
tests (mind you the "AND" not the "OR" ;)). Both are equally important, so if you care at all about the sanity of your
application, and, why not admit it, yours too, then writing unit and e2e tests will hold an important place in your
process.


### E2E Testing

E2E tests come into play once all units are fully tested and you want to start looking into how these components play
together. In other words, you will want to make sure that once your end user starts interacting with your application
and clicks his/her way through it, it will behave as expected and not }:) output :o all sort o/ of funny :P smileys
everywhere ;).

Coming back to our previous car example, e2e testing would mean checking that all components of the car integrate well
with each other and have the expected behavior as an overall, so for instance that the break lights turn on when the
driver steps on the breaks or that the wheels start turning when the driver steps on the acceleration pedal, and so on.

Again, it is very important to keep in mind that e2e tests are black-box tests and only care about the functionality of
the application from an end user point of view. Whether or not the services around the application work properly, or that
responses from the server are correct, and so on, is outside the scope of e2e testing and should be handled as separate
tests, which we will not cover in this article. Rule of thumb is again to mock all these dependencies.

//TODO add mention here that ppl could also let all the calls go through
// make clear that ppl understand that the point of e2e testing is not to test your services and api calls but rather
//the user interaction of your app
// run tests against mocks


# Protractor Example 
[Protractor](http://angular.github.io/protractor) is an end-to-end test framework for [Angular](http://angular.io/) and [AngularJS](http://angularjs.org) applications. Protractor is a [Node.js](http://nodejs.org/) program built on top of [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs). Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Compatibility
-------------

Protractor 5 is compatible with nodejs v6 and newer.

Protractor works with AngularJS versions greater than 1.0.6/1.1.4, and is compatible with Angular applications. Note that for Angular apps, the `binding` and `model` locators are not supported. We recommend using `by.css`.

Getting Started
---------------
See the [Protractor Website](http://www.protractortest.org) for most documentation.

To get set up and running quickly:
 - Work through the [Tutorial](http://www.protractortest.org/#/tutorial)
 - See the [API](http://www.protractortest.org/#/api)

Once you are familiar with the tutorial, you’re ready to move on. To modify your environment, see the Protractor Setup docs. To start writing tests, see the Protractor Tests docs.

To better understand how Protractor works with the Selenium WebDriver and Selenium Server see the reference materials.


## Running end-to-end tests

- `npm run e2e`

## Important links

[Protractor](http://www.protractortest.org/)
[Jasmine](https://jasmine.github.io/)



## Page Objects

As mentioned earlier, e2e tests cover the interaction scenarios between the end user and your application. This works by
having the test code simulate a series of user actions against certain UI parts of your application and then making some
assertions regarding what the expected result of those actions should be.

So let's assume we have a very simple application that can answer any possible question. Let's call it the "Grandfather
of All Knowledge" app. The idea of the app is pretty straightforward: the user enters a question in an input field,
presses a button and gets the answer to the question. Easy! ... and clever if you get the right answer ;)


###### E2E Testing
  (4) [Protractor](http://angular.github.io/protractor)

###### Page Objects
  (5) [Selenium](http://www.seleniumhq.org/docs/06_test_design_considerations.jsp#page-object-design-pattern)
  (6) [Google Selenium pages](https://code.google.com/p/selenium/wiki/PageObjects)
  (7) [Martin Fowler](http://martinfowler.com/bliki/PageObject.html)

  ## Example Protractor project that:
* Makes use of page objects
* Runs tests on [Sauce Labs](http://saucelabs.com)
* Runs multiple browsers at once
* Runs tests sharded (parallel)
* Includes examples tests for both Angular, and non-Angular applications
* Uses [protractor-flake](https://github.com/NickTomlin/protractor-flake) to re-run failed tests
* is written using es6

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure

# Useful Links
###### AngularJS
  (1) [Angular App Structure](http://angularjs.blogspot.nl/2014/02/an-angularjs-style-guide-and-best.html)
###### Unit Testing
  (2) [Karma](http://karma-runner.github.io/)
  (3) [Karma design docs](https://github.com/karma-runner/karma/blob/master/thesis.pdf)

