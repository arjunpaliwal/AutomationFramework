package com.qait.actions;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;


@Test
public class CloseBrowser {

	public static void closeBrowser(WebDriver driver) throws InterruptedException {
		Thread.sleep(2000);
		Assert.assertTrue(true);
		driver.quit();
	}
}
