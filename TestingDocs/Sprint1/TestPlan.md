# CS 684 Test Plan - Team Transformers

- [INTRODUCTION](#introduction)
  - [IN SCOPE](#in-scope)
  - [PROJECT DESCRIPTION](#project-description)
  - [DEV AND TEST TEAM PERSONNEL](#dev-and-test-team-personnel)
- [TEST ITEMS](#test-items)
  - [FEATURES TO BE TESTED](#features-to-be-tested)
- [APPROACH](#integration-test-section)
  - [UNIT TEST STRATEGY / EXTENT OF UNIT TESTING](#unit-test-strategy--extent-of-unit-testing)
  - [INTEGRATION TEST STRATEGY](#integration-test-strategy)
  - [REGRESSION TEST STRATEGY](#regression-test-strategy)
- [PASS FAIL CRITERIA](#pass-fail-criteria)
  - [USER ACCEPTANCE TEST STRATEGY](#user-acceptance-test-strategy)
- [TESTING TASKS](#testing-tasks)
- [RESPONSIBILITIES](#responsibilities)
- [SCHEDULE](#schedule)

## INTRODUCTION

The Test Plan has been created to facilitate communication within the team members of the project. It describes approaches and methodologies that will apply to the testing phase of the application. It includes the objectives, scope, test responsibilities, entry and exit criteria, approach, and schedule major milestones. 
This document has clearly identified what the test deliverables will be, and what is deemed in and out of scope

### IN SCOPE

- **Product Name:** CS684 - Team Transaformer's WebApp

### PROJECT DESCRIPTION

The project under test is a web application. This application is designed as a part of the deliverable for project for the course CS 684. This document is a Test plan that will evolve and be updated throughout the semester as the functionality continues to be built. This project is divided into sprints and every sprint shall be used to build the requirements as elicited.

### DEV and TEST TEAM PERSONNEL

- Front end Test lead
- Back end Test lead
- Data and API Test lead

## TEST ITEMS
- Sprint 1 deliverable
1. Register user
2. Sign In
3. Landing of Web app
4. Sign out


### FEATURES TO BE TESTED

Sprint 1 features

1. Register page
- Implement a form that will sign in a user
- The form shall use a textbox to collect a user name
- The user name shall be required
- The form shall use a textbox to collect a password
- The password shall be required
- The form shall use a textbox to collect a confirmation password
- The confirmation password shall be required
- The form shall use a button to submit the form
- The user name shall be a string at least 8 character long
- The user name shall not include any spaces
- The UX shall automatically trim leading and trailing spaces
- The password shall not include any spaces
- The password shall be at least 8 characters long
- The UX shall automatically trim leading and trailing spaces
- The password must contain at least one upper case letter
- The password must contain at least one lower case letter
- The password must contain at least one character that is not a letter
- When the form is correctly filled out and submitted, navigate to the Landing Page as signed in
- When an incorrect entry is made, display an appropriate message

2. Sign In Page
- Implement a form that will sign in a user
- The form shall use a textbox to collect a user name
- The user name shall be required
- The form shall use a textbox to collect a password
- The password shall be required
- The form shall use a button to submit the form
- When a correct combination of user id and password have been submitted, navigate to the Landing Page as signed in
- When an incorrect combination of user id and password have been submitted, display an appropriate message

3. Landing Page
- When not signed in, the landing page shall display a method (button or link) to navigate to a “Sign-in” page
- When signed in, the landing page shall display the user’s name
- When signed in, the landing page shall display a method to sign out (button or link)

## APPROACH

Combine individual software modules developed in every sprint and test as a group of functionality.

### UNIT TEST STRATEGY / EXTENT OF UNIT TESTING

Each funtionality will undergo unit testing by the developer as well as peer test review. In this process individual blocks, functions, methods, or “units” of code are tested individually. 

### INTEGRATION TEST STRATEGY

- Evaluate all integrations with locally developed shared libraries, with consumed services, and other touch points.
- The project will use Bottom Up Integration testing strategy where lower level modules are tested first.
- Upon the stability of the tested modules we will form the basis and facilitate the testing of higher level modules.
- This defined process continues until all modules at top level are tested


### REGRESSION TEST STRATEGY

- Evaluate all reports introduced in previous releases. Regression testing will be introduced at the completion of every sprint. 
- Regression testing will cover the end to end functionality that have been developed so far till the latest sprint under execution.
- Under every Regression cycle all the test cases in the regression suite shall be executed.
- Test team to do impact analysis of every functionality across the sprint and within the sprint, between functionality for assuring the appropriate test coverage in the Regression suite.



## PASS FAIL CRITERIA

- Test cases/ procedures should detail each test step.
- They must contain the requirement that is being verified.
- Every test scenario explains action, event, or condition that is expected to occur to execute or complete the test.
- Every test case will have a Pass/ Fail criteria.
- If the expected conditions for a scenario under test are met, we consider it to Pass, else Fail.
- Verify that the solution works for the user.
- Only when all the test cases pass, can we conclude to have a successful test cycle completion for that sprint.

### USER ACCEPTANCE TEST STRATEGY

- Prepare list of business requirement to be tested
- Create the test data which should cover all the software’s functional scenarios used in real-world.
- UAT is executed before the product go live or after every milestone.

## TESTING TASKS
1. Identify bugs and errors in the development
2. Check the implemented improvementsfor any bugs
3. Test the product until the desired result is achieved against the test cases

## RESPONSIBILITIES
1. Every team member in the team is responsible for the testing of their own code
2. Other team member must write test cases/ scenarios for another members functionality and then test their ode against it for better coverage

## SCHEDULE
1. For every sprint, the team must reserve the last 5 days for testing and bug fixes
2. Prior to the Demo date all bugs must be fixed  

| #   | ACTIVITY   | TARGET START PERIOD| TARGET END PERIOD| RESPONSIBILITY|
| --- | ---------  | ---------------- | --------------     | ----          |
| 1   |Requirement document review|  Day 1 of Sprint  | Day 3 of Sprint | Entire Team   |
| 2   |Test planning|  Day 3 of Sprint  | Day 6 of Sprint | Entire Team      |         
| 3   |Functional testing iteration 1|  Day 8 of Sprint  | Day 9 of Sprint |Every team member for their respective testing thread       |    
| 4   |Functional testing iteration 2|  Day 10 of Sprint  | Day 11 of Sprint | Every team member for their respective testing thread       |  
| 5   |Integration testing|  Day 12 of Sprint  | Day 13 of Sprint | Cross team involvement      |   
| 6   |Regression testing|  Day 14 of Sprint  | Day 15 of Sprint | Entire Team      |  
|  |  |  |   |   |
