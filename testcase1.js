const { Builder, By, until } = require('selenium-webdriver');

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Go to site
        await driver.get('http://automationexercise.com');
        
        // Make sure home is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('fa fa-home'))));
        console.log('Home page is visible successfully');

        // Find signup button and click     
        let signupButton = await driver.findElement(By.className('fa fa-lock'));
        await signupButton.click();
        console.log('Clicked on sign up button');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests(); 
