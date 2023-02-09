package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.TestBasePage;

public class SkyBlueBackgroundSteps extends TestBasePage {



	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String setSkyBlueBackground) {
		initDriver();
		driver.get("http://techfios.com/test/101/");

	}
	
	@When("^I click on the button on Set SkyBlue Background$")
	public void i_click_on_the_button_on_Set_SkyBlue_Background()  {
		WebElement button = driver.findElement(By.xpath("//*[@id=\"extra\"]/button[1]"));
        button.click();
	}
	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {


       WebElement element = driver.findElement(By.xpath("/html/body"));
      
       String actualColor = element.getCssValue("body");


       String expectedColor = "background-color: skyblue;";
       if (actualColor.equals(expectedColor)) {
           System.out.println("Test passed: The background color changed to sky blue");
       } else {
           System.out.println("Test failed: The background color is not sky blue");
      }
	}

	@When("^I click on the button on Set White Background$")
	public void i_click_on_the_button_on_Set_White_Background() {
		WebElement button = driver.findElement(By.xpath("//*[@id=\"extra\"]/button[2]"));
        button.click();
	}

	
	
	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white()  {
	       WebElement element = driver.findElement(By.xpath("/html/body"));
	     
	       
	       String actualColor = element.getCssValue("body");


	       String expectedColor = "background-color: white;";
	       if (element.equals(expectedColor)) {
	           System.out.println("Test passed: The background color changed to White");
	       } else {
	           System.out.println("Test failed: The background color is not White");
	      }
	       
		}
	   
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}


