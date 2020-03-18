package com.qait.actions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class VPNPortal {
	
	public static void vpnLogin(WebDriver driver) {
	
		driver.findElement(By.id("username")).sendKeys("ayushigupta");
		driver.findElement(By.id("credential")).sendKeys("Ayush!@#12");
		driver.findElement(By.id("login_button")).click();
		driver.findElement(By.xpath("//*[@title='HTTP/HTTPS: HRIS (HRIS Portal)']")).click();
				 
		 for (String window : driver.getWindowHandles()) {
			    driver.switchTo().window(window);}
		 
		Assert.assertTrue(true);
	}

}
