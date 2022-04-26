
# CS 684 Sprint 2 Test Plan - Team Transformers

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
- Navigation bar: Home and other category names
- Display: user preferred articles in Home and individual category news
- Paginate News articles
- Keyword search and display of articles


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

- Sprint 3 deliverable
10. Nav bar for Home and individual categories on the landing page.
11. User preference NEWS on landing - Home (Default selection).
12. Category wise news on individual category tabs.
13. Pagination on Dashboard and Landing screen tabs to display limited number of articles.
14. Restrict News articles to 250.
15. News articles to appear in sorted order of published date.

- Sprint 4 deliverable
16. Search bar on Home page
17. Keyword search to display articles based on input
18. Support key word searches with logical And, Or, Not and paranthesis
19. Paginate the searched articles in descending order of published date

### FEATURES TO BE TESTED
- Sprint 1 features - https://github.com/Kcode17/CS684_ST_QA/blob/main/TestingDocs/Sprint1/TestPlan.md
- Sprint 2 features - https://github.com/Kcode17/CS684_ST_QA/blob/main/TestingDocs/Sprint2/TestPlan-Sprint2.md
- Sprint 3 features - https://github.com/Kcode17/CS684_ST_QA/blob/main/TestingDocs/Sprint3/TestPlan-Sprint3.md

- Sprint 4 features

1. Home tab:

a. Search bar to search for articles based on key word inputs

b. Keywords to support logical operators and paranthesis

c. News articles from search result displayed in descending order of published date

d. Display message when no articles matching the keyword

## APPROACH

Combine individual software modules developed in every sprint and test as a group of functionality.

### UNIT TEST STRATEGY / EXTENT OF UNIT TESTING

Unit test cases will be done manually as well as the automated. 
Unit testing framework Mocha Chai will be used to perform automated unit tests. 
Markdown file will be created for the manual unit tests. 

### INTEGRATION TEST STRATEGY

- Evaluate all integrations with locally developed shared libraries, with consumed services, and other touch points.
- The project will use **Bottom Up Integration** testing strategy where lower level modules are tested first.
- Upon the stability of the tested modules we will form the basis and facilitate the testing of higher level modules.
- This defined process continues until all modules at top level are tested
- Functionality built in Sprint 1, 2, 3 and 4 will be tested together from the earliest base functionality to the most latest functions
- Components to be tested under integration:
1. Web Application components - Registration, Login, dashboard, landing, User settings, Search and Pagination
2. Database
3. REST API for NEWS
4. User Authentication strategy
- Integration test cases will cover the integration of all the modules implemented under all three sprint in combination.
- The integration test cases will be done manually. The MD file will be added under TestingDocs -> Sprint3 folder on Github

### REGRESSION TEST STRATEGY

- Evaluate all reports introduced in previous releases. Regression testing will be introduced at the completion of every sprint. 
- Regression testing will cover the end to end functionality that have been developed so far till the latest sprint under execution.
- Under every Regression cycle all the test cases in the regression suite shall be executed.
- Test team to do impact analysis of every functionality across the sprint and within the sprint, between functionality for assuring the appropriate test coverage in the Regression suite.
- System testing will be done per functionality end to end from sprint 1 to sprint 4 for all the functionality listed in the scope of the Test plan.
- Regression testing will be done using manual test cases. The MD file will be added under TestingDocs -> Sprint4 folder on Github
- Automation testing done using Selenium and Pytest as well.


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
1. Identify bugs and errors in the development.
2. Check the implemented improvements for any bugs.
3. Test the product until the desired result is achieved against the test cases.
4. Test features missed in last sprint from development perspective.
5. Perform integration testing on the application as per the proposed Bottom Up strategy.

## RESPONSIBILITIES
1. Every team member in the team is responsible for the testing of their own code
2. Other team member must write test cases/ scenarios for another members functionality and then test their ode against it for better coverage

## SCHEDULE
1. For every sprint, the team must reserve the last 5 days for testing and bug fixes
2. Prior to the Demo date all bugs must be fixed  

| #   | ACTIVITY   | TARGET START PERIOD| TARGET END PERIOD| RESPONSIBILITY|
| --- | ---------  | ---------------- | --------------     | ----          |
| 1   |Requirement document review|  Day 1 of Sprint  | Day 2  Sprint | Entire Team   |
| 2   |Test planning|  Day 3 of Sprint  | Day 4 of Sprint | Entire Team      |         
| 3   |Development|  Day 5 of Sprint  | Day 13 of Sprint | Every team member for their respective development thread       |
| 4   |Test cases|  Day 14 of Sprint  | Day 16 of Sprint |Every team member for their respective development thread       | 
| 5   |Functional testing and Bug fix - Iteration 1|  Day 17 of Sprint  | Day 18 of Sprint | Cross team member involvement      |   
| 6   |Functional testing and Bug fix - Iteration 2|  Day 19 of Sprint  | Day 19 of Sprint | Cross team member involvement      |  
| 7   |Integration testing and Bug fix|  Day 19 of Sprint  | Day 20 of Sprint | Cross team member involvement      |  
| 8   |Code Freeze|    | Day 21 of Sprint | Entire Team      |  
