const SeleniumCommon9 = require('./common');

async function runTests() {
    const common = new SeleniumCommon9();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        //Verify user is navigated to ALL PRODUCTS page successfully
        await common.navigateTo('https://automationexercise.com/products');

        //Enter product name in search input and click search button
        await common.sendKeysByXpath('//*[@id="search_product"]', 'blue top');
        await common.clickElementByXpath('//*[@id="submit_search"]');

        //Verify 'SEARCHED PRODUCTS' is visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div[1]/div/div[2]/div/h2');

        //Verify all the products related to search are visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div[1]/div/div[2]/div/div[2]/div/div[1]/div[1]/img');


    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();
