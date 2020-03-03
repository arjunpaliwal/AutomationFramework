package com.qait.actions;

import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;


import com.qait.pageObjects.MyLeavesList;

@Test
public class Leave {

	public static void clickOnLeave(WebDriver driver) {
		
		SideNav.NavClick(driver);
		MyLeavesList.clickOnLeaveButton(driver).click();
	
	}
	
	@Test	
	public static void subItemMyLeavesClick(WebDriver driver) {

		MyLeavesList.clickOnMyLeaves(driver).click();
	
	}
}
