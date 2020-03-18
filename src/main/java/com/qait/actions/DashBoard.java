package com.qait.actions;

import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.openqa.selenium.WebDriver;
import com.qait.utility.RepositoryParser;

public class DashBoard {
	
	@Test
	public static void dashboardClick(WebDriver driver){
		
		SideNav.NavClick(driver);
		driver.findElement(RepositoryParser.getbjectLocator("DashBoard")).click();;
		AssertJUnit.assertTrue(true);
	}

}
