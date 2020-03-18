package com.qait.actions;

import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.qait.utility.RepositoryParser;

public class Time {
	
	@Test
	public static void timeSheetOpen(WebDriver driver) {
		SideNav.NavClick(driver);
		driver.findElement(RepositoryParser.getbjectLocator("TimeSheet")).click();;
		AssertJUnit.assertTrue(true);
	}

}
