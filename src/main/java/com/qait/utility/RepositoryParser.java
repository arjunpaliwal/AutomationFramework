package com.qait.utility;

import java.io.FileInputStream;
import java.util.Properties;
import org.openqa.selenium.By;


public class RepositoryParser {
	
    private static Properties propertyFile = new Properties();

	public RepositoryParser() {
		
		try{
			
	 		propertyFile.load(new FileInputStream("src/main/resources/Objects.properties"));
	
		}catch(Exception e){ System.out.println(e); }
	}

	public static By getbjectLocator(String locatorName)	{
		
		String locatorProperty = propertyFile.getProperty(locatorName);
		System.out.println(locatorProperty);
		String locatorType = locatorProperty.split(":")[0];
		String locatorValue = locatorProperty.split(":")[1];

		By locator = null;
		switch(locatorType) {
		case "id":
			locator = By.id(locatorValue);
			break;
		case "name":
			locator = By.name(locatorValue);
			break;
		case "cssSelector":
			locator = By.cssSelector(locatorValue);
			break;
		case "LinkText":
			locator = By.linkText(locatorValue);
			break;
		case "PartialLinkText":
			locator = By.partialLinkText(locatorValue);
			break;
		case "TagName":
			locator = By.tagName(locatorValue);
			break;
		case "xpath":
			locator = By.xpath(locatorValue);
			break;
		}
		return locator;
	}
}