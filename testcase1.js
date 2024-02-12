const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // 1. Launch browser
        await driver.get('http://automationexercise.com');

        // 2. Navigate to url 'http://automationexercise.com'
        // No action required since we already navigated to the URL above.

        // 3. Verify that home page is visible successfully
        // Verifying by checking if a specific element is present on the page
        await driver.wait(until.elementLocated(By.css('.home-page-element')), 10000);
        console.log('Home page is visible successfully');

        // Additional verification steps can be added here if needed

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Quit the WebDriver session
        await driver.quit();
    }
}

// Run the test case
runTest();
