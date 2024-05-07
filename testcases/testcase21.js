const SeleniumCommon21 = require('./common');

async function runTests() {
    const common = new SeleniumCommon21();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        //Click on 'Products' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');

        // Verify user is navigated to ALL PRODUCTS page successfully
        await common.navigateTo('https://automationexercise.com/products');
        await common.wait();
        //Click on 'View Product' button
        await common.clickElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[2]/ul/li');

        //Verify 'Write Your Review' is visible
        await common.makeSureElementIsVisibleByXpath('/html/body/section/div/div/div[2]/div[3]/div[1]/ul/li/a');

        //Enter name, email and review
        await common.sendKeysByXpath('//*[@id="name"]', "Tatevik");
        await common.sendKeysByXpath('//*[@id="email"]', 'Tatevik-petrosyan-96@mail.ru');
        await common.sendKeysByXpath('//*[@id="review"]', 'Hi,I LIKE THE SHOP, THANK YOU FOR YOUR JOB');

        //Click 'Submit' button
        await common.clickElementByXpath('//*[@id="button-review"]');
        await common.makeSureElementIsVisibleByXpath('//*[@id="review-section"]/div');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}
runTests();