const { Builder, By, until, Key, Select } = require('selenium-webdriver');

async function wait() {
    // Wait a little bit
    await new Promise(resolve => setTimeout(resolve, 5000));
}

async function findElementWithRetry(driver, locator, maxRetries = 5, retryDelay = 2000) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const element = await driver.findElement(locator);
            return element;
        } catch (error) {
            console.log(`Attempt ${retries + 1} failed. Retrying...`);
            await sleep(retryDelay); // Wait for a short duration before retrying
            retries++;
        }
    }
    throw new Error(`Element not found after ${maxRetries} attempts.`);
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
        
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.partialLinkText("Home"))));
       
        // Find signup button and click     
        let SignUpButton = By.partialLinkText("Signup");
        let button = await findElementWithRetry(driver, SignUpButton, 5, 1500);
        await button.click();
        
       

        // Make sure home is visible New User Signup is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.className('signup-form'))));
        
        // Enter the name
        let Name1 = By.name('name');
        let Name = await findElementWithRetry(driver, Name1, 5, 1500);
        await Name.sendKeys('Tatevik', Key.RETURN);
        
        
        // Locate the Email Address input field by xpath and Enter the email address
      let emailAddress =  By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]');
      let email = await findElementWithRetry(driver, emailAddress, 5, 1500);
      await email.sendKeys('tu@gail.com', Key.RETURN);
        
        // Click on 'Signup' button
        let SignupButton1 = By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button');
        // let button2 = await findElementWithRetry(driver, SignupButton1, 3, 1000);
        //  await button2.click();

        // Make ENTER ACCOUNT INFORMATION' is visible
        await driver.wait(until.elementIsVisible(await findElementWithRetry(driver, By.xpath('//*[@id="form"]/div/div/div/div[1]/h2'))));
        wait();
        // Click on gender radio button
        let gender = By.xpath('//*[@id="id_gender2"]');
        let gender1 = await findElementWithRetry(driver, gender, 5, 1500);
        await gender1.click();
        
      
        // System.out.printIn("Radio button selected")
        

        // Enter password
        let password = By.name('password')
        let pass = await findElementWithRetry(driver, password, 5, 1500);
        await pass.sendKeys('Tatev2022..', Key.RETURN);
        wait();
 
        // Select day in the dropdown
        let daysDropdown = By.id('days');
        let dayDrop = await findElementWithRetry(driver, daysDropdown, 5, 1500);
        let select = new Select(dayDrop)
        await select.selectByValue('6');
        

        let monthDropdown = By.id('months');
        let monthDrop = await findElementWithRetry(driver, monthDropdown, 5, 1500);
        let select2  = new Select(monthDrop)
        await select2.selectByValue('2');

       

        let yearDropdown = By.id('years');
        let yearDrop = await findElementWithRetry(driver, yearDropdown, 5, 1500);
        let select3 = new Select(yearDrop)
        await select3.selectByValue('1996');
       
       /*  

        const checkBox1 = await driver.findElementWithRetry(By.xpath('//*[@id="form"]/div/div/div/div/form/div[6]/label')).click();
        wait();

        const checkBox2 = await driver.findElementWithRetry(By.xpath('//*[@id="form"]/div/div/div/div/form/div[7]/label')).click();
        wait();

        let firstNameInput = await driver.findElementWithRetry(By.id('first_name'))
        await firstNameInput.sendKeys('Tatevik');
        wait();

        let lastNameInput = await driver.findElementWithRetry(By.id('last_name'));
        await lastNameInput.sendKeys('Petrosyan')
        wait();

        let companyInput = await driver.findElementWithRetry(By.id('company'));
        await companyInput.sendKeys('Google')
        wait();

        let address1Input = await driver.findElementWithRetry(By.id('address1'));
        await address1Input.sendKeys('Arno Babajanyan')
        wait();

        let address2Input = await driver.findElementWithRetry(By.id('address2'));
        await address2Input.sendKeys('Arno Babajanyan 98/4')
        wait();

        const countryDropdown = await driver.findElementWithRetry(By.xpath('//*[@id="country"]'));
        await countryDropdown.click();
        
        const selectCountry = new Select(countryDropdown);
        await selectCountry.selectByValue('United States');
        wait();

        let stateInput = await driver.findElementWithRetry(By.id('state'));
        await stateInput.sendKeys('California')
        wait();

        let cityInput = await driver.findElementWithRetry(By.id('city'));
        await cityInput.sendKeys('LA')
        wait();

        let zipInput = await driver.findElementWithRetry(By.id('zipcode'));
        await zipInput.sendKeys('0011')
        wait();

        let mobileInput = await driver.findElementWithRetry(By.id('mobile_number'));
        await mobileInput.sendKeys('055929229')
        wait();
        
       await driver.findElementWithRetry(By.className('btn btn-default')).click();
         wait();
        
      await driver.wait(until.elementIsVisible(driver.findElementWithRetry(By.className('title text-center'))));
       

        */
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

runTests();

