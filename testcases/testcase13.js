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

         await common.spinBox('//*[@id="quantity"]');

         //Click 'Add to cart' button
         await common.clickElementByXpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button');
         common.wait();
         
         //Click 'View Cart' button
         await common.elementIsVisibleByXpath('//*[@id="cartModal"]/div/div/div[2]/p[2]/a/u');
         
         //Verify that product is displayed in cart page with exact quantity
        

         await common.verifyingExactQuantityByXpath('//*[@id="product-3"]/td[4]/button', '4');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();