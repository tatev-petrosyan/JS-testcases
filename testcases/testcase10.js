const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Scroll down to footer
        await common.scrollDownByXpath('//*[@id="footer"]/div[1]/div/div/div[2]/div/h2');

        //Verify text 'SUBSCRIPTION'
        await common.makeSureElementIsVisibleByXpath('//*[@id="footer"]/div[1]/div/div/div[2]/div/h2');

        //Enter email address in input and click arrow button
        await common.sendKeysByXpath('//*[@id="susbscribe_email"]', 'tatew.petrosyan@gmail.com');
        await common.clickElementByXpath('//*[@id="subscribe"]');

        //Verify success message 'You have been successfully subscribed!' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="success-subscribe"]/div');


    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();

