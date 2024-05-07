const SeleniumCommon14 = require('./common');

async function runTests() {
    const common = new SeleniumCommon14();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a/i');

        // Add products to cart
        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[5]/div', '/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]/div/a');
        common.wait()

        //Click 'Continue Shopping' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        //Click 'Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Verify that cart page is displayed
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');

        // Click 'X' button corresponding to particular product
        await common.clickElementByXpath('//*[@id="product-1"]/td[6]/a');

        //Verify that product is removed from the cart
        await common.makeSureElementIsVisibleByXpath('//*[@id="empty_cart"]/p');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();
