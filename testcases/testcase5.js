const SeleniumCommon5 = require('./common');

async function runTests() {
    const common = new SeleniumCommon5();
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

        // Make sure   'Email Address already exist!' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div[3]/div/form/p');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();