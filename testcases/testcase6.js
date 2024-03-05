const SeleniumCommon6 = require('./common');

async function runTests() {
    const common = new SeleniumCommon6();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        // Click on 'Contact Us' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[8]/a');

        // Verify 'GET IN TOUCH' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="contact-page"]/div[2]/div[1]/div/h2');

        // Enter name
        await common.sendKeysByXpath('//*[@id="contact-us-form"]/div[1]/input', 'Tatevik');

        // Enter email
        await common.sendKeysByXpath('//*[@id="contact-us-form"]/div[2]/input', 'Tatevik-petrosyan@gmail.com');

        // Enter subject 
        await common.sendKeysByXpath('//*[@id="contact-us-form"]/div[3]/input', 'Registration issue');

        // Enter message
        await common.sendKeysById('message', "System doesn't accept my email");

        // Upload file 
        await common.sendKeysByXpath('//*[@id="contact-us-form"]/div[5]/input', 'C:/\Users/\Acer/\OneDrive/\Pictures\/flowchart1.png');

        await common.wait();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();
