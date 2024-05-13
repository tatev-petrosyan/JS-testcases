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
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]', 'tatev-petrosyan-96@mail.ru');

        // Click on 'Signup' button
        await common.clickElementByXpath('/html/body/section/div/div/div[3]/div/form/button');

        // Make ENTER ACCOUNT INFORMATION' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div/div/h2/b');

        // Click on gender radio button//*
        await common.clickElementByXpath('//*[@id="id_gender2"]');

        // Enter password
        await common.sendKeysByName('password', 'Tatev2022..');

        // Select days in the dropdown
        await common.selectDropDownValueById('days', '6');

        // Select months in the dropdown
        await common.selectDropDownValueById('months', '2');

        // Select years in the dropdown
        await common.selectDropDownValueById('years', '1996');

        // Select checkbox 'Sign up for our newsletter!'
        await common.clickCheckBoxByXpath('//*[@id="form"]/div/div/div/div/form/div[6]/label');

        // Select checkbox 'Receive special offers from our partners!'
        await common.clickCheckBoxByXpath('//*[@id="form"]/div/div/div/div/form/div[7]/label');

        // Fill First name data
        await common.sendKeysById('first_name', 'Tatevik');

        // Fill Last name data
        await common.sendKeysById('last_name', 'Petrosyan');

        // Fill Company data
        await common.sendKeysById('company', 'Google');

        // Fill Address 1  data
        await common.sendKeysById('address1', 'Arno Babajanyan');

        // Fill Address 2 data
        await common.sendKeysById('address2', 'Arno Babajanyan 98/4');

        // Fill country data
        await common.sendKeysByXpath('//*[@id="country"]', 'United States');

        // Fill state data
        await common.sendKeysById('state', 'California');

        // Fill city data
        await common.sendKeysById('city', 'LA');

        // Fill zipcode data
        await common.sendKeysById('zipcode', '0011');

        // Fill mobile number  data
        await common.sendKeysById('mobile_number', '055929229');

        // Click on button
        await common.clickCheckBoxByXpath('//*[@id="form"]/div/div/div/div/form/button');

        // Verify that 'ACCOUNT CREATED!' is visible
        await common.makeSureElementIsVisibleByClassName('title text-center');

        // Click 'Continue' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

        // Verify that 'Logged in as username' is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Logged in as");

        // Click 'Delete Account' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');

        // Click 'Continue' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();