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
The app constitutes of the following features:
- User registration 
- User Login/ Logout 
- News articles stream
- Provision to refresh News
- Configuration of interested News categories


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

- Sprint 2 deliverable
5. News listing on app landing
6. Refresh news on homepage
7. User Profile page - News listing
8. Refresh news on User Profile page
9. News category Settings 



### FEATURES TO BE TESTED

Sprint 1 features - https://github.com/Kcode17/CS684_ST_QA/blob/main/TestingDocs/TestPlan.md

Sprint 2 features

1. Landing page
- Display a list of articles from the NewsAPI “General” category
- Refresh the news listing for General category
- 
2. User Profile Page
- Display a list of articles from the NewsAPI “General” category
- Refresh the news listing for General category
- Display a link/ button to open settings page

3. Settings Page
- List the category of News
- Select interested categories
- Save the Categories to DB (user specific settings)
- Retrieve the Settings from DB for user after Save
- Cancel the updates on Settings page

## APPROACH

Combine individual software modules developed in every sprint and test as a group of functionality.

### UNIT TEST STRATEGY / EXTENT OF UNIT TESTING

Each functionality will undergo unit testing by building unit test cases before development for Test Driven Development. Use of unit testing framework JEST will be done. In this strategy, every developer must first write a test that fails before writing a new functional code against individual blocks, functions, methods, or “units” of code later tested individually. 

### INTEGRATION TEST STRATEGY

- Evaluate all integrations with locally developed shared libraries, with consumed services, and other touch points.
- The project will use Bottom Up Integration testing strategy where lower level modules are tested first.
- Upon the stability of the tested modules we will form the basis and facilitate the testing of higher level modules.
- This defined process continues until all modules at top level are tested
- Functionality built in Sprint 1 will be tested along with Sprint 2
- Area of impacts:
      1. Landing Page
      2. Profile Page


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
2. Check the implemented improvements for any bugs
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
| 3   |Unit Test cases|  Day 8 of Sprint  | Day 10 of Sprint |Every team member for their respective development thread       |    
| 4   |Development|  Day 11 of Sprint  | Day 20 of Sprint | Every team member for their respective development thread       |  
| 5   |Functional testing and Bug fix - Iteration 1|  Day 21 of Sprint  | Day 23 of Sprint | Cross team member involvement      |   
| 6   |Functional testing and Bug fix - Iteration 2|  Day 24 of Sprint  | Day 26 of Sprint | Cross team member involvement      |  
| 7   |Integration testing and Bug fix|  Day 27 of Sprint  | Day 28 of Sprint | Cross team member involvement      |  
| 8   |Code Freeze|    | Day 29 of Sprint | Entire Team      |  

