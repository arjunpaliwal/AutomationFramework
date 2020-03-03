package com.qait.actions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.qait.utility.RepositoryParser;

public class SideNav {

	@Test
	public static void NavClick(WebDriver driver){

		WebDriverWait wait = new WebDriverWait(driver,5);		
		wait.until(ExpectedConditions.visibilityOfElementLocated(RepositoryParser.getbjectLocator("SideNav")));
		driver.findElement(RepositoryParser.getbjectLocator("SideNav")).click();
		Assert.assertTrue(true);
	}
}
