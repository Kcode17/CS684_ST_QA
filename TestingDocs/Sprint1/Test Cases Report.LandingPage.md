| | | | | | |
|-|-|-|-|-|-|
|Test ID|Task|Prerequisite|Description/ Steps|Expected Output|Result- Pass/Fail|
|LD_1|Check if the landing page appears on login/ sign in|User should have the link to the application and server running|1. Click on the link http://localhost:3000/login 2. Fill the username and password with valid credentials registered in DB 3. Click Sign In|1. The landing page should load  2. The screen should display Welcome + "Username" 3. There should be a button to sign out|Pass|
|LD_2|Test the signout functionality|1. User should have the link to the application and server running 2. User should be signed in to the application with active session|1. User clicks on the sign out button on the landing page|1. The user should be signed out of the application 2. Redirect back to the login screen 3. Blank username and password fields should appear on the login page.|Pass|
