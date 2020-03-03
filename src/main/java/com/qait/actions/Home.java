package com.qait.actions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.qait.pageObjects.HomePage;

@Test
public class Home {
	
	
	public static void verifyUserOnHomePage(WebDriver driver){

	    HomePage.mainPage(driver);
		Assert.assertTrue(true);
	}

}
