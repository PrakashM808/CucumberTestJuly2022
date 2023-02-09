package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SkyBlueBackgroundPage {
	
	WebDriver driver;

	public SkyBlueBackgroundPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]") WebElement SET_SKYBLUE_BACKGROUND_ELEMENT;
	
	

	public void clickOnSetSkyBlueBackgroundButton() {
		SET_SKYBLUE_BACKGROUND_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		//background-color: skyblue;
	}
	

}
