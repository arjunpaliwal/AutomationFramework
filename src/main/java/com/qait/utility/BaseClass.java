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
import com.qait.actions.VPNPortal;

@Test
public class BaseClass {

	WebDriver driver;
	WebElement element;
	public void baseMethod() throws InterruptedException, Exception{
		
		driver = Initiator.openBrowser();
		driver = Initiator.openURL(driver);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		Login.enterUserNameAndPassword(driver);
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
