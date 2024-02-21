const { Builder, By, until, Key, Select } = require('selenium-webdriver');

async function wait() {
    // Wait a little bit
    await new Promise(resolve => setTimeout(resolve, 5000));
}

async function findElementWithRetry(driver, locator, maxRetries = 5, retryDelay = 1500) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const element = await driver.findElement(locator);
            return element;
        } catch (error) {
            console.log(`Attempt ${retries + 1} failed for ${locator} . Retrying...`);
            await sleep(retryDelay); // Wait for a short duration before retrying
            retries++;
        }
    }
    throw new Error(`Element ${locator} not found after ${maxRetries} attempts.`);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Go to site
        await driver.get('http://automationexercise.com');

        // Make sure home is visible

        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.partialLinkText("Home"))));

        // Find signup button and click     
        let signUpButtonLocator = By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
        let button = await findElementWithRetry(driver, signUpButtonLocator);
        await button.click();

        // Make sure home is visible New User Signup is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.className('signup-form'))));

        // Enter the name
        let nameLocator = By.name('name');
        let name = await findElementWithRetry(driver, nameLocator);
        await name.sendKeys('Tatevik');

        // Locate the Email Address input field by xpath and Enter the email address
        let emailAddressLocator = By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]');
        let email = await findElementWithRetry(driver, emailAddressLocator);
        await email.sendKeys('Trttjnqq@IL.com');

        //Click on 'Signup' button
        let signUp1 = By.xpath('/html/body/section/div/div/div[3]/div/form/button');
        let button2 = await findElementWithRetry(driver, signUp1);
        await button2.click();
        wait();

        // Make ENTER ACCOUNT INFORMATION' is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="form"]/div/div/div/div/h2/b'))));
        wait();

        // Click on gender radio button//*
        let genderLocator = By.xpath('//*[@id="id_gender2"]');
        let genderRadioBtn = await findElementWithRetry(driver, genderLocator);
        await genderRadioBtn.click();
        wait();

        // Enter password
        let passwordLocator = By.name('password')
        let password = await findElementWithRetry(driver, passwordLocator);
        await password.sendKeys('Tatev2022..');
        wait();

        // Select days in the dropdown
        let daysDropdownLocator = By.id('days');
        let daysDrop = await findElementWithRetry(driver, daysDropdownLocator);
        let selectDays = new Select(daysDrop)
        await selectDays.selectByValue('6');

        // Select months in the dropdown
        let monthsDropdownLocator = By.id('months');
        let monthsDrop = await findElementWithRetry(driver, monthsDropdownLocator);
        let selectMonths = new Select(monthsDrop)
        await selectMonths.selectByValue('2');

        // Select years in the dropdown
        let yearsDropdownLocator = By.id('years');
        let yearsDrop = await findElementWithRetry(driver, yearsDropdownLocator);
        let selectYears = new Select(yearsDrop)
        await selectYears.selectByValue('1996');

        // Select checkbox 'Sign up for our newsletter!'
        let checkBox1 = By.xpath('//*[@id="form"]/div/div/div/div/form/div[6]/label')
        let box = await findElementWithRetry(driver, checkBox1);
        await box.click();
        wait();
        // Select checkbox 'Receive special offers from our partners!'
        let checkBox2 = By.xpath('//*[@id="form"]/div/div/div/div/form/div[7]/label')
        let box2 = await findElementWithRetry(driver, checkBox2);
        await box2.click();
        wait();
        // Fill First name data
        let firstNameInput = By.id('first_name');
        let firstName = await findElementWithRetry(driver, firstNameInput);
        await firstName.sendKeys('Tatevik');
        wait();
        // Fill Last name data
        let lastNameInput = By.id('last_name');
        let lastName = await findElementWithRetry(driver, lastNameInput);
        await lastName.sendKeys('Petrosyan');
        wait();
        // Fill Company data
        let companyInput = By.id('company');
        let company = await findElementWithRetry(driver, companyInput);
        await company.sendKeys('Google');
        wait();
        // Fill Address 1  data
        let address1Input = By.id('address1');
        let address1 = await findElementWithRetry(driver, address1Input);
        await address1.sendKeys('Arno Babajanyan');
        wait();

        // Fill Address 2 data
        let address2Input = By.id('address2');
        let address2 = await findElementWithRetry(driver, address2Input);
        await address2.sendKeys('Arno Babajanyan 98/4')
        wait();

        // Fill country data
        let selectCountry = By.xpath('//*[@id="country"]');
        let country1 = await findElementWithRetry(driver, selectCountry);
        let country3 = new Select(country1);
        await country3.selectByValue('United States');

        // Fill state data
        let stateInput = By.id('state');
        let stateInput1 = await findElementWithRetry(driver, stateInput);
        await stateInput1.sendKeys('California');
        wait();

        // Fill city data
        let cityInput = By.id('city');
        let cityInput1 = await findElementWithRetry(driver, cityInput);
        await cityInput1.sendKeys('LA')
        wait();

        // Fill zipcode data
        let zipInput = By.id('zipcode');
        let zipInput1 = await findElementWithRetry(driver, zipInput);
        await zipInput1.sendKeys('0011')
        wait();

        // Fill mobile number  data
        let mobileInput = By.id('mobile_number');
        let mobileInput1 = await findElementWithRetry(driver, mobileInput);
        await mobileInput1.sendKeys('055929229')
        wait();

        // Click on button
        let button3 = By.xpath('//*[@id="form"]/div/div/div/div[1]/form/input[2]');
        let button4 = await findElementWithRetry(driver, button3);
        await button4.click();

        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.className('title text-center'))));
        wait();

        let continueButton = By.xpath('//*[@id="form"]/div/div/div/div/a');
        let continueButton1 = await findElementWithRetry(driver, continueButton);
        await continueButton1.click();
        wait();

        //await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a'))));
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.partialLinkText("Logged in as"))));
        wait();

        let deleteAccount = By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');
        let deleteAccount1 = await findElementWithRetry(driver, deleteAccount);
        await deleteAccount1.click();
        wait();

        let deleteAccountButton = By.xpath('//*[@id="form"]/div/div/div/div/a');
        let deleteAccountButton1 = await findElementWithRetry(driver, deleteAccountButton);
        await deleteAccountButton1.click();
        wait();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests();

