const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        // Verify user is navigated to ALL PRODUCTS page successfully
        await common.navigateTo('https://automationexercise.com/products');

        // Enter product name in search input and click search button
        await common.sendKeysByXpath('//*[@id="search_product"]', 'short');
        await common.clickElementByXpath('//*[@id="submit_search"]');

        //  Verify 'SEARCHED PRODUCTS' is visible
        await common.inputValueByXpath('/html/body/section[2]/div/div/div[2]/div/h2', "SEARCHED PRODUCTS");

        //Verify all the products related to search are visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]');

        //Add those products to cart
        await common.hoverOverByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]');
        await common.makeSureElementIsVisibleByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]');
        await common.clickElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div/a');
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        // Click 'Cart' button and verify that products are visible in cart
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');
        await common.inputValueByXpath('//*[@id="product-16"]/td[2]/h4/a', "Sleeves Top and Short - Blue & Pink");


        //Click 'Signup / Login' button and submit login details
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]', 'tatev-petrosyan-96@mail.ru');
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]', 'Tatev2022..');
        await common.clickElementByXpath('//*[@id="form"]/div/div/div[1]/div/form/button');

        //Again, go to Cart page
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');

        //Verify that those products are visible in cart after login as well
        await common.inputValueByXpath('//*[@id="product-16"]/td[2]/h4/a', "Sleeves Top and Short - Blue & Pink");


    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();