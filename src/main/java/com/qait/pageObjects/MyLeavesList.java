package com.qait.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qait.utility.RepositoryParser;

public class MyLeavesList {
	
	
public static WebElement clickOnLeaveButton(WebDriver driver) {
	
	WebElement element= driver.findElement(RepositoryParser.getbjectLocator("LeaveButton"));
	return element;
	
}

public static WebElement clickOnMyLeaves(WebDriver driver) {
	
	WebDriverWait wait = new WebDriverWait(driver,10);
	WebElement element = driver.findElement(RepositoryParser.getbjectLocator("MyLeave"));
	wait.until(ExpectedConditions.visibilityOfElementLocated(RepositoryParser.getbjectLocator("MyLeave")));
	return element;
	
}
	
}
