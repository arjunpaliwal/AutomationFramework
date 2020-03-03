Feature: Automate HRIS

Scenario: User can login HRIS

	Given Open chrome browser
	When Launch HRIS website
	When Enter valid Username and Password	
	And Click on Submit button	
	When User is on HRIS Home page
	Then close browser
		
Scenario: User open the Board section

	Given Open chrome browser
	And Launch HRIS website
	When Enter valid Username and Password
	And Click on Submit button
	When User is on HRIS Home page
	Then Click on left side tab and click on Board button
	Then close browser
	
Scenario: User open the Time Sheet 

    Given Open chrome browser
	And Launch HRIS website
	When Enter valid Username and Password
	And Click on Submit button
	When User is on HRIS Home page
	Then Click on left side tab and click on Timesheet button	
	Then close browser
	
	
Scenario: User open the DashBoard

	 Given Open chrome browser
	And Launch HRIS website
	When Enter valid Username and Password
	And Click on Submit button
	When User is on HRIS Home page
	Then Click on left side tab and click on DashBoard button	
	Then close browser
	
Scenario: User open the Leave

	Given Open chrome browser
	And Launch HRIS website
	When Enter valid Username and Password
	And Click on Submit button
	When User is on HRIS Home page
	Then Click on left side tab and click on Leave button 
	And Click on My leave list sub option of Leave
	Then close browser
		