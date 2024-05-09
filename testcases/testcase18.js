const SeleniumCommon14 = require('./common');

async function runTests() {
    const common = new SeleniumCommon14();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        // Verify that categories are visible on left side bar
        await common.makeSureElementIsVisibleByXpath('//*[@id="accordian"]');

        // Click on 'Women' category
        await common.clickElementByXpath('//*[@id="accordian"]/div[1]/div[1]/h4/a');
        common.wait();

        //Click on any category link under 'Women' category, for example: tops
        await common.clickElementByXpath('//*[@id="accordian"]/div[1]/div[1]/h4/a');

        // Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
        // await common.makeSureElementIsVisibleByXpath('/html/body/section/div/div[2]/div[2]/div/h2');// TODO TAT

        // On left side bar, click on any sub-category link of 'Men' category
        await common.clickElementByXpath('//*[@id="accordian"]/div[2]/div[1]/h4/a');
        common.wait();
        await common.clickElementByXpath('//*[@id="Men"]/div/ul/li[1]');

        //Verify that user is navigated to that category page
        await common.navigateTo('https://automationexercise.com/category_products/3');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();