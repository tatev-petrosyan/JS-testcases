const { Builder, By, until } = require('selenium-webdriver');

async function wait() {
    // Wait a little bit
    await new Promise(resolve => setTimeout(resolve, 5000));
}

// Find elements with retries and delays for bad network conditions
async function findElementWithRetry(driver, locator, maxRetries = 5, retryDelay = 1500) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const element = await driver.findElement(locator);
            return element;
        } catch (error) {
            console.log(`Attempt ${retries + 1} failed for ${locator} . Retrying...`);
            await sleep(retryDelay); // Wait for a short duration before retrying
            retries++;
        }
    }
    throw new Error(`Element ${locator} not found after ${maxRetries} attempts.`);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

    // Go to site
    await driver.get('http://automationexercise.com');

    // Make sure home is visible
    await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a/i'))));   

     // Find signup button and click     
    let signUpButtonLocator = By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
    let button = await findElementWithRetry(driver, signUpButtonLocator);
    await button.click();

    // Make sure  Login to your account is visible
    await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="form"]/div/div/div[1]/div/h2'))));

    // Enter correct email address 
    let emailAddressLocator = By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
    let email = await findElementWithRetry(driver, emailAddressLocator);
    await email.sendKeys('tatev-petrosyan-96@mail.ru');
    
    // Enter correct password
    let passwordLocator = By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]');
    let password = await findElementWithRetry(driver, passwordLocator);
    await password.sendKeys('Tatev2022.');

    // Click 'login' button
    let loginButtonLocator2 = By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button');
    let loginButton2 = await findElementWithRetry(driver, loginButtonLocator2);
    await loginButton2.click();
    wait();

    // Verify that 'Logged in as username' is visible
    await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a'))));
    wait();

    // Click 'Delete Account' button
    let deleteAccountLocator = By.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');
    let deleteAccount = await findElementWithRetry(driver, deleteAccountLocator);
    await deleteAccount.click();
    wait();
    
    // Verify that 'ACCOUNT DELETED!' is visible
    await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="form"]/div/div/div/h2/b'))));
    wait();
     

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests();