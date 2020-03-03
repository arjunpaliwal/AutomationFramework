package com.qait.utility;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import junit.framework.Assert;

@Test
public class CloseBrowser {

	public static void closeBrowser(WebDriver driver) throws InterruptedException {
		Thread.sleep(2000);
		Assert.assertTrue(true);
		driver.quit();
	}
}
