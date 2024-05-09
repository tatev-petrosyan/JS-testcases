const SeleniumCommon22 = require('./common');

async function runTests() {
    const common = new SeleniumCommon22();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        //Scroll to bottom of page
        await common.scrollByXpath('/html/body/section[2]/div/div/div[2]/div[2]/h2');

        // Verify 'RECOMMENDED ITEMS' are visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div[2]/h2');

        //Click on 'Add To Cart' on Recommended product
        await common.elementIsVisibleByXpath('//*[@id="recommended-item-carousel"]/div/div[2]/div[1]/div/div/div/a')
        //await common.makeSureElementIsVisibleByXpath('//*[@id="recommended-item-carousel"]/div/div[1]/div[1]/div/div/div');
        await common.clickElementByXpath('//*[@id="recommended-item-carousel"]/div/div[2]/div[1]/div/div/div/a');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[2]/p[2]/a'); // xnxdir ka



        //Verify that product is displayed in cart page
        await common.makeSureElementIsVisibleByXpath('//*[@id="product-4"]'); // TODO TAT 

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();