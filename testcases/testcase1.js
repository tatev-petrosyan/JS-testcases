const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        // Find signup button and click     
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');

        // Make sure  New User Signup is visible
        await common.makeSureElementIsVisibleByClassName('signup-form');

        // Enter the name
        await common.sendKeysByName('name', 'Tatevik');

        // Locate the Email Address input field by xpath and Enter the email address
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]', 'tatew-pet@gmail.com');

        // Click on 'Signup' button
        await common.clickElementByXpath('/html/body/section/div/div/div[3]/div/form/button');

        // Make ENTER ACCOUNT INFORMATION' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div/div/h2/b');

        /* 
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
       */

        // Select days in the dropdown
        await common.selectDropDownValueById('days', '6');

        /*
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
        let checkbox1Locator = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[6]/label'));
        await driver.executeScript("arguments[0].click();", checkbox1Locator);
 
        // Select checkbox 'Receive special offers from our partners!'
        let checkbox2Locator = await driver.findElement(By.xpath('//*[@id="form"]/div/div/div/div/form/div[7]/label'));
        await driver.executeScript("arguments[0].click();", checkbox2Locator);
 
        // Fill First name data
        let firstNameInputLocator = By.id('first_name');
        let firstName = await findElementWithRetry(driver, firstNameInputLocator);
        await firstName.sendKeys('Tatevik');
        wait();
 
        // Fill Last name data
        let lastNameInputLocator = By.id('last_name');
        let lastName = await findElementWithRetry(driver, lastNameInputLocator);
        await lastName.sendKeys('Petrosyan');
        wait();
 
        // Fill Company data
        let companyInputLocator = By.id('company');
        let company = await findElementWithRetry(driver, companyInputLocator);
        await company.sendKeys('Google');
        wait();
 
        // Fill Address 1  data
        let address1InputLocator = By.id('address1');
        let address1 = await findElementWithRetry(driver, address1InputLocator);
        await address1.sendKeys('Arno Babajanyan');
        wait();
 
        // Fill Address 2 data
        let address2InputLocator = By.id('address2');
        let address2 = await findElementWithRetry(driver, address2InputLocator);
        await address2.sendKeys('Arno Babajanyan 98/4')
        wait();
 
        // Fill country data
        let selectCountryLocator = By.xpath('//*[@id="country"]');
        let selectCountryElem = await findElementWithRetry(driver, selectCountryLocator);
        let countrySelect = new Select(selectCountryElem);
        await countrySelect.selectByValue('United States');
 
        // Fill state data
        let stateInputLocator = By.id('state');
        let stateInput = await findElementWithRetry(driver, stateInputLocator);
        await stateInput.sendKeys('California');
        wait();
 
        // Fill city data
        let cityInputLocator = By.id('city');
        let cityInput = await findElementWithRetry(driver, cityInputLocator);
        await cityInput.sendKeys('LA')
        wait();
 
        // Fill zipcode data
        let zipInputLocator = By.id('zipcode');
        let zipInput = await findElementWithRetry(driver, zipInputLocator);
        await zipInput.sendKeys('0011')
        wait();
 
        // Fill mobile number  data
        let mobileInputLocator = By.id('mobile_number');
        let mobileInput = await findElementWithRetry(driver, mobileInputLocator);
        await mobileInput.sendKeys('055929229')
        wait();
 
        // Click on button
        let createAccountBtnLocator = By.xpath('//*[@id="form"]/div/div/div/div/form/button');
        let createAccountBtn = await findElementWithRetry(driver, createAccountBtnLocator);
        await createAccountBtn.click();
 
        // Verify that 'ACCOUNT CREATED!' is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.className('title text-center'))));
        wait();
 
        // Click 'Continue' button
        let continueButtonLocator = By.xpath('//*[@id="form"]/div/div/div/div/a');
        let continueButton = await findElementWithRetry(driver, continueButtonLocator);
        await continueButton.click();
        wait();
 
        // Verify that 'Logged in as username' is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.partialLinkText("Logged in as"))));
        wait();
 
        // Click 'Delete Account' button
        let deleteAccountLocator = By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');
        let deleteAccount = await findElementWithRetry(driver, deleteAccountLocator);
        await deleteAccount.click();
        wait();
 
        // Click 'Continue' button
        let continueButtonLocator1 = By.xpath('//*[@id="form"]/div/div/div/div/a');
        let continueButton1 = await findElementWithRetry(driver, continueButtonLocator1);
        await continueButton1.click();
        wait();
        */
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();