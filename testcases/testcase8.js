const SeleniumCommon8 = require('./common');

async function runTests() {
    const common = new SeleniumCommon8();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        //Verify user is navigated to ALL PRODUCTS page successfully
        await common.navigateTo('https://automationexercise.com/products');

        //The products list is visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div');
        
        //Click on 'View Product' of first product // xndir ka 
        await common.clickElementByXpath('//*[@id="dismiss-button"]/div/svg');
        await common.clickElementByXpath('/html/body/section[2]/div[1]/div/div[2]/div/div[2]/div/div[2]/ul/li/a');
        
        //User is landed to product detail page
        await common.navigateTo('https://automationexercise.com/product_details/1');

        //Verify that detail detail is visible: product name, category, price, availability, condition, brand
        await common.makeSureElementIsVisibleByXpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div");

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();
