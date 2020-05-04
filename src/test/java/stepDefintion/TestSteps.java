package stepDefintion;

import org.openqa.selenium.WebDriver;

import com.qait.actions.Board;
import com.qait.actions.CloseBrowser;
import com.qait.actions.DashBoard;
import com.qait.actions.Home;
import com.qait.actions.Initiator;
import com.qait.actions.Leave;
import com.qait.actions.Login;
import com.qait.actions.Time;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
    WebDriver driver;
    String username="ayushi";
    String password = "***";
	String url = "https://demo.com";
    @Given("^Open chrome browser$")
	public void launch_Browser(){
		driver = Initiator.openBrowser();
	}
    
	@And("^Launch HRIS website$")
	public void launch_HRIS(){
		driver = Initiator.openURL(driver,url);
	}
	
	@When("^Enter valid Username and Password$")
	public void user_login() throws Exception{
		Login.enterUserNameAndPassword(driver,username,password);
		
	}
	
	@And("^Click on Submit button$")
	public void submitLoginClick(){
		Login.loginBtnClick(driver);
	}
	
	
	@When("^User is on HRIS Home page$")
	public void homePageHRIS(){
		Home.verifyUserOnHomePage(driver);
	}
	 

	@Then("^Click on left side tab and click on Board button$")
	public void openBoard(){
			
		Board.boardClick(driver);
	}
		
	
	@Then("^Click on left side tab and click on Timesheet button$")
	public void openTimeSheet(){
		Time.timeSheetOpen(driver);
	}
	
	
	
	@Then("^Click on left side tab and click on DashBoard button$")
	public void openDashbaord(){
		DashBoard.dashboardClick(driver);
	}
	
	@Then("^Click on left side tab and click on Leave button$")
	public void openleave(){
		Leave.clickOnLeave(driver);
	}
	@And("^Click on My leave list sub option of Leave$")
	public void openLeaveList(){
		Leave.subItemMyLeavesClick(driver);
	}
	
	@Then("^close browser$")
	public void browserClose() throws InterruptedException{
		CloseBrowser.closeBrowser(driver);
	}
}


