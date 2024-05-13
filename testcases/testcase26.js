const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        // Go to site
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        //Scroll to bottom of page
        await common.scrollByXpath('//*[@id="footer"]/div[1]/div/div/div[2]');
        await common.wait();

        //Verify 'SUBSCRIPTION' is visible
        await common.makeSureElementIsVisibleByXpath('//*[@id="footer"]/div[1]/div/div/div[2]');

        //Scroll up page to top
        await common.scrollByXpath('//*[@id="header"]/div');
        await common.wait();

        //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        await common.makeSureElementIsVisibleByXpath('//*[@id="slider-carousel"]/div/div[2]/div[1]/h2');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }

}

runTests();