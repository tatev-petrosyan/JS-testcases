const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Click on 'Test Cases' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');

        //Verify user is navigated to test cases page successfully
        await common.navigateTo('https://automationexercise.com/test_cases');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();
