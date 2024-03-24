const SeleniumCommon14 = require('./common');

async function runTests() {
    const common = new SeleniumCommon14();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        // Add products to cart
        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[1]/div[1]/a');
        common.wait();
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');

        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div[1]/div[3]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div[1]/div[3]/div/div[1]/div[2]/div/a');
        common.wait();
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div[1]/div[4]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div[1]/div[4]/div/div[1]/div[2]/div/a');
        common.wait();
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        //Click 'Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Verify that cart page is displayed
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');

        //Click Proceed To Checkout
        await common.clickElementByXpath('//*[@id="do_action"]/div[1]/div/div/a');

        //Click 'Register / Login' button
        await common.clickElementByXpath('//*[@id="checkoutModal"]/div/div/div[2]/p[2]/a/u');

        //Fill all details in Signup and create account
        // Enter the name
        await common.sendKeysByName('name', 'Tatevik');

        // Locate the Email Address input field by xpath and Enter the email address
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]', 'rUZAN@gmail.com');

        // Click on 'Signup' button
        await common.clickElementByXpath('/html/body/section/div/div/div[3]/div/form/button');

        // Click on gender radio button//*
        await common.clickElementByXpath('//*[@id="id_gender2"]');

        // Enter password
        await common.sendKeysByName('password', 'Tatev202.');

        // Select days in the dropdown
        await common.selectDropDownValueById('days', '6');

        // Select months in the dropdown
        await common.selectDropDownValueById('months', '2');

        // Select years in the dropdown
        await common.selectDropDownValueById('years', '1996');

        // Select checkbox 'Sign up for our newsletter!'
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/div[6]/label');

        // Select checkbox 'Receive special offers from our partners!'
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/div[7]/label');

        // Fill First name data
        await common.sendKeysById('first_name', 'Tatevik');

        // Fill Last name data
        await common.sendKeysById('last_name', 'Petrosyan');

        // Fill Company data
        await common.sendKeysById('company', 'Google');

        // Fill Address 1  data
        await common.sendKeysById('address1', 'Arno Babajanyan');

        // Fill Address 2 data
        await common.sendKeysById('address2', 'Arno Babajanyan 98/4');

        // Fill country data
        await common.sendKeysByXpath('//*[@id="country"]', 'United States');

        // Fill state data
        await common.sendKeysById('state', 'California');

        // Fill city data
        await common.sendKeysById('city', 'LA');

        // Fill zipcode data
        await common.sendKeysById('zipcode', '0011');

        // Fill mobile number  data
        await common.sendKeysById('mobile_number', '055929229');

        // Click on button
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/button');

        // Verify that 'ACCOUNT CREATED!' is visible
        await common.makeSureElementIsVisibleByClassName('title text-center');

        //Verify 'ACCOUNT CREATED!' and click 'Continue' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

        // Verify that 'Logged in as username' is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Logged in as");

        // Click 'Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Click 'Proceed To Checkout' button
        await common.clickElementByXpath('//*[@id="do_action"]/div[1]/div/div/a')

        // Verify Address Details and Review Your Order
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');

        // Enter description in comment text area and click 'Place Order'
        await common.sendKeysByXpath('//*[@id="ordermsg"]/textarea', "Խնդրում եմ առաքել հնարավորինս արագ։");
        await common.clickElementByXpath('//*[@id="cart_items"]/div/div[7]/a');


        // Enter payment details: Name on Card, Card Number, CVC, Expiration date
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[1]/div/input', 'TATEVIK PETROSYAN');
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[2]/div/input', '4565288558699654');
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[1]/input', '321');
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[2]/input', '12');
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[3]/input', '2027');
        //Click 'Pay and Confirm Order' button
        await common.clickElementByXpath('//*[@id="submit"]');
        //Verify success message 'Your order has been placed successfully!'
       // PROBLEM
        //await common.makeSureElementIsVisibleByXpath('/html/body/script[7]/text()');

        //Click 'Delete Account' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');

        //Verify 'ACCOUNT DELETED!' and click 'Continue' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div/h2/b');
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await common.quit();
    }
}

runTests();