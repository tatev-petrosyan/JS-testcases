const { Builder, By, until, Select } = require('selenium-webdriver');

async function wait() {
    // Wait a little bit
    await new Promise(resolve => setTimeout(resolve, 500));
}

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Go to site
        await driver.get('http://automationexercise.com');

        // Make sure home is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('fa fa-home'))));

        // Find signup button and click     
        let signupButton = await driver.findElement(By.className('fa fa-lock'));
        await signupButton.click();

        // Make sure home is visible New User Signup is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('signup-form'))));

        // Enter the name
        let nameInput = await driver.findElement(By.name('name'));
        await nameInput.sendKeys('Tatevik');
        wait();

        // Locate the Email Address input field by xpath and Enter the email address
        let emailInput = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]'));
        await emailInput.sendKeys('tatew.petrosyan@gmail.com');

        // Click on 'Signup' button
        let submitButton = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button'));
        await submitButton.click();
        wait();

        // Make ENTER ACCOUNT INFORMATION' is visible
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('col-sm-4 col-sm-offset-1'))));

        // Click on gender radio button
        let genderRadioBtn = driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[1]/div[2]'));
        genderRadioBtn.click();
        wait();

        // Enter password
        let password = await driver.findElement(By.name('password'));
        await password.sendKeys('Tatev2022.');
        wait();

        // Select day in the dropdown
        const daysDropdown = await driver.findElement(By.id('days'));
        daysDropdown.click();
        const select = new Select(daysDropdown);
        await select.selectByValue('6');
        wait();
        await new Promise(resolve => setTimeout(resolve, 5000));

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests(); 