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
       
        // Make sure home is visible New User Signup is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('signup-form'))));
        console.log('New User Signup is visible successfully');

        // Locate the name input field by its name attribute
        let nameInput = await driver.findElement(By.name('name'));

        // Enter the name
        await nameInput.sendKeys('Tatevik');

        // Wait a little bit
        await new Promise(resolve => setTimeout(resolve, 500));

        // Locate the Email Address input field by xpath
        let emailInput = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]'));

        // Enter the email address
        await emailInput.sendKeys('tatew.petrosyan@gmail.com');
        console.log('New User name and email entered successfully');

        // Wait a little bit
        await new Promise(resolve => setTimeout(resolve, 500));

        // Click on 'Signup' button
        let submitButton = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button'));
        await submitButton.click();
        console.log('Signup button clicked successfully');

        // Wait a little bit
        await new Promise(resolve => setTimeout(resolve, 500));

        // TODO: ??
        // await driver.get('https://automationexercise.com/signup');

        // Make ENTER ACCOUNT INFORMATION' is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('col-sm-4 col-sm-offset-1'))));
        console.log('ENTER ACCOUNT INFORMATION is visible successfully');

        // Wait a little bit
        await new Promise(resolve => setTimeout(resolve, 500));

        let password = await driver.findElement(By.name('password'));
        await password.sendKeys('Tatev2022.');
        console.log('Password is entered');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests(); 