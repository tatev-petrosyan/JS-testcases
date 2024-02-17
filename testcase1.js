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
        let genderRadioBtn = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[1]/div[2]'));
        await genderRadioBtn.click();
        wait();

        // Enter password
        let password = await driver.findElement(By.name('password'));
        await password.sendKeys('Tatev2022.');
        wait();

        // Select day in the dropdown
        const daysDropdown = await driver.findElement(By.id('days'));
        await daysDropdown.click();
        const select = new Select(daysDropdown);
        await select.selectByValue('6');
        wait();
        await new Promise(resolve => setTimeout(resolve, 1000));


        const monthDropdown = await driver.findElement(By.id('months'));
        await monthDropdown.click();
        const selectMonth = new Select(monthDropdown);
        await selectMonth.selectByValue('2');
        wait();
        await new Promise(resolve => setTimeout(resolve, 1000));

        const yearDropdown = await driver.findElement(By.id('years'));
        await yearDropdown.click();
        const selectYear = new Select(yearDropdown);
        await selectYear.selectByValue('1996');
        wait();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const checkBox1 = driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[6]/label'));
        await checkBox1.click();
        wait();
        
        const checkBox2 = driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[7]/label'));
        await checkBox2.click();
        wait();

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests(); 
