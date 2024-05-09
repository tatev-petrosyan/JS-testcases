const SeleniumCommon14 = require('./common');

async function runTests() {
    const common = new SeleniumCommon14();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        // Verify that Brands are visible on left side bar
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[1]/div/div[2]');
        await common.wait();
        //Click on any brand name
        await common.clickElementByXpath('/html/body/section/div/div[2]/div[1]/div/div[2]/div/ul/li[1]/a');// TODO TAT
        //Verify that user is navigated to brand page and brand products are displayed

        // On left side bar, click on any other brand link

        //Verify that user is navigated to that brand page and can see products

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();