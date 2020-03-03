package com.qait.pageObjects;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.qait.utility.RepositoryParser;

public class LoginPage {
	
	private static WebElement element = null;
	
	public static WebElement txtUserName(WebDriver driver) {
		//element = driver.findElement(By.id("txtUserName"));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		RepositoryParser rp = new RepositoryParser();
		element = driver.findElement(RepositoryParser.getbjectLocator("UserName"));
		return element;
	}

	public static WebElement txtUserPassword(WebDriver driver){
		//element = driver.findElement(By.id("txtPassword"));
		element = driver.findElement(RepositoryParser.getbjectLocator("Password"));
		return element;
		
	}

	public static WebElement btn_LogIn(WebDriver driver) {

		element = driver.findElement(RepositoryParser.getbjectLocator("Submit"));
		return element;
	}
}
