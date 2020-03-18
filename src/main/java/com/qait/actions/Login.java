package com.qait.actions;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.openqa.selenium.WebDriver;
import com.qait.pageObjects.LoginPage;
import com.qait.utility.stringToencryptionDecryption;


public class Login {
	
	@Test
	public static void enterUserNameAndPassword(WebDriver driver) throws Exception{
		
		String pwdorg = "****";
		new stringToencryptionDecryption();
		String en = stringToencryptionDecryption.encrypt(pwdorg);
		String dn = stringToencryptionDecryption.decrypt(en);	
		LoginPage.txtUserName(driver).sendKeys("ayushigupta");
		LoginPage.txtUserPassword(driver).sendKeys(dn);
		Assert.assertTrue(true);
	}
	
	@Test
  public static void loginBtnClick(WebDriver driver)  {
	 
	  LoginPage.btn_LogIn(driver).click();
	  Assert.assertTrue(true);
	
  }
	
}
