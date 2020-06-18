package com.qait.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.qait.utility.RepositoryParser;

public class HomePage {
	
	static WebElement element;
	public static void mainPage(WebDriver driver){
		 RepositoryParser rp = new RepositoryParser();	
		 Assert.assertEquals(driver.getTitle(), "Resource Management Tool");
//		 element = driver.findElement(RepositoryParser.getbjectLocator("HomeButton"));
		
	}
	


}
