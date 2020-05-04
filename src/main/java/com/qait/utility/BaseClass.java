package com.qait.utility;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;
import com.qait.actions.Board;
import com.qait.actions.CloseBrowser;
import com.qait.actions.DashBoard;
import com.qait.actions.Home;
import com.qait.actions.Initiator;
import com.qait.actions.Leave;
import com.qait.actions.Login;
import com.qait.actions.Time;

@Test
public class BaseClass {

	WebDriver driver;
	WebElement element;
	public void baseMethod() throws InterruptedException, Exception{
		
		driver = Initiator.openBrowser();
		String url = "http://demo.com";
		driver = Initiator.openURL(driver,url);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		String username="ayushi";
		String password= "***";
		Login.enterUserNameAndPassword(driver,username,password);
		Login.loginBtnClick(driver);
		Home.verifyUserOnHomePage(driver);
		Board.boardClick(driver);
		Time.timeSheetOpen(driver);
		DashBoard.dashboardClick(driver);
		Leave.clickOnLeave(driver);
		Leave.subItemMyLeavesClick(driver);
		
		CloseBrowser.closeBrowser(driver);
	}
}
