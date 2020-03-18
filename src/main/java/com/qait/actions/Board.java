package com.qait.actions;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.openqa.selenium.WebDriver;
import com.qait.utility.RepositoryParser;

public class Board {

	@Test
	public static void boardClick(WebDriver driver){
		SideNav.NavClick(driver);	
		driver.findElement(RepositoryParser.getbjectLocator("Board")).click();
		Assert.assertTrue(true);
	}
}
