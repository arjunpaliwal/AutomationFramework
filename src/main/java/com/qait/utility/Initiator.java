package com.qait.utility;

import org.testng.annotations.Test;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;
import org.testng.Assert;

public class Initiator {
	
	static WebDriver driver;
	
	@Test
	public static WebDriver openBrowser(){
		
		String file_name = "chromedriver.exe";
		String root = System.getProperty("user.home");
		findfile2(file_name,new File(root));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	
	}
	
@Test
	public static WebDriver openURL(WebDriver driver){
	 driver.get("https://hris.qainfotech.com:8086/");
	 return driver;
	}
	

	public static void findfile2(String file_name, File root) {
		

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
	       		   System.setProperty("webdriver.chrome.driver", path);
	       		   driver= new ChromeDriver();
	       		  	 
	       	       break;	 
	            }
	        }
	}
	
	
//	public static String findfile(String file_name, File root) {
//
//		File[] list = root.listFiles();
//		
//	    if(list!=null)
//        for (File fil : list)
//        {
//            if (fil.isDirectory())
//            {
//                findfile(file_name,fil);
//            }
//            else if (file_name.equalsIgnoreCase(fil.getName()))
//            {
//                System.out.println(fil.getAbsolutePath());
//                return fil.getAbsolutePath();
//                
// 
//            }
//        }
//        
//		return null;
//		
//	}

	
	
}
