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

        // Enter incorrect email address 
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]', 'tate-petrosyan-96@mail.ru');

        // Enter incorrect password
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]', 'Tate2022');

        // Click 'login' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div[1]/div/form/button');

        // Make sure  'Your email or password is incorrect' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div[1]/div/form/button');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();