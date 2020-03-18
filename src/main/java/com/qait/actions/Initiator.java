package com.qait.actions;

import org.testng.annotations.Test;
import java.io.File;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Initiator {
	
	static WebDriver driver;
	
	@Test
	public static WebDriver openBrowser(){
		
		String file_name = "chromedriver";
		String root = System.getProperty("user.home");
		findfile2(file_name,new File(root));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	
	}
	
@Test(dependsOnMethods = "openBrowser")
public static WebDriver openURL(WebDriver driver){
	 driver.get("https://vpn.qainfotech.com/remote/login?lang=en");
	 VPNPortal.vpnLogin(driver);
	 return driver;
	}
	


	public static  WebDriver findfile2(String file_name, File root) {
		

			File[] list = root.listFiles();
			
		    if(list!=null)
	        for (File fil : list)
	        {
	            if (fil.isDirectory())
	            {
	                findfile2(file_name,fil);
	            }
	            else if (file_name.equalsIgnoreCase(fil.getName()))
	            {
	            	
	               String path =fil.getAbsolutePath();
	               System.out.println(path);
	       		   System.setProperty("webdriver.chrome.driver",path);
	       		   driver= new ChromeDriver();
	       		   break;
	       	       	 
	            }
	        }
		    return driver;
	}
	
	
}
