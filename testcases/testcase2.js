const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        // Go to site
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a/i');

        // Find signup button and click 
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');

        // Make sure  Login to your account is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div[1]/div/h2');

        // Enter correct email address 
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]', 'tatev-petrosyan-96@mail.ru');

        // Enter correct password
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]', 'Tatev2022');

        // Click 'login' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div[1]/div/form/button');

        // Verify that 'Logged in as username' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a');

        // Click 'Delete Account' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');

        // Verify that 'ACCOUNT DELETED!' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div/h2/b');


    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();