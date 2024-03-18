const SeleniumCommon12 = require('./common');

async function runTests() {
    const common = new SeleniumCommon12();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        //Hover over first product and click 'Add to cart'// 
        await common.hoverOverByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/img');
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]');
        await common.clickElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/a');
        common.wait();
        
        //Click 'Continue Shopping' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');

        //Hover over second product and click 'Add to cart'
        await common.hoverOverByXpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]');
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]');
        await common.clickElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[1]/a');

        //Click 'View Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Verify both products are added to Cart
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-1"]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-2"]');

        //Verify their prices, quantity and total price
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-1"]/td[3]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-1"]/td[4]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-1"]/td[5]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-2"]/td[3]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-2"]/td[4]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-2"]/td[5]');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();