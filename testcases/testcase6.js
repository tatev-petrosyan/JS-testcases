const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
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
        await common.sendKeysByXpath('//*[@id="contact-us-form"]/div[5]/input', 'C:/\Users/\Acer/\OneDrive/\Pictures/\Снимки экрана/\Снимок экрана 2024-01-06 222803.png');

        // Click on 'Submit' button
        await common.clickElementByXpath('//*[@id="contact-us-form"]/div[6]/input');

        // Click on 'ok' button
        await common.clickAlert();

        // Verify success message 'Success! Your details have been submitted successfully.' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]');

        //Click 'Home' button and verify that landed to home page successfully
        await common.clickElementByXpath('//*[@id="form-section"]/a');
        await common.navigateTo('https://automationexercise.com/');


    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();
