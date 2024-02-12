const { Builder, By, until } = require('selenium-webdriver');

async function checkHomePageVisibility() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://automationexercise.com');
        await driver.wait(until.elementLocated(By.className('fa fa-home')), 3000);
        console.log('Home page is visible successfully');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

async function runTests() {
    checkHomePageVisibility()
}

runTests();
