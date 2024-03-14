const SeleniumCommon13 = require('./common');

async function runTests() {
    const common = new SeleniumCommon13();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Click 'View Product' for any product on home page
        await common.clickElementByXpath('/html/body/section[2]/div/div/div[2]/div[1]/div[4]/div/div[2]/ul/li/a');

        //Verify product detail is opened
        await common.makeSureElementIsVisibleByXpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div');

        //Increase quantity to 4
        await common.selectDropDownValueById('quantity', '4' );




    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();