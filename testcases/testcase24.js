const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");
        //Add products to cart
        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[5]/div', '/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div/div[5]/div/div[1]/div[2]/div/a');
        common.wait()
        //Click 'Continue Shopping' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[3]', '/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div/div[3]/div/div[1]/div[2]/div/a');
        common.wait();
        //Click 'Continue Shopping' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        await common.hoverElementByXpath('/html/body/section[2]/div/div/div[2]/div/div[4]/div', '/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]', '/html/body/section[2]/div/div/div[2]/div/div[4]/div/div[1]/div[2]/div/a');
        common.wait();
        //Click 'Continue Shopping' button
        await common.makeSureElementIsVisibleByXpath('//*[@id="cartModal"]/div/div');
        await common.clickElementByXpath('//*[@id="cartModal"]/div/div/div[3]/button');
        common.wait();

        //Click 'Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Verify that cart page is displayed
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_items"]');

        //Click Proceed To Checkout
        await common.clickElementByXpath('//*[@id="do_action"]/div[1]/div/div/a');
        common.wait();

        // Click 'Register / Login' button   
        await common.clickElementByXpath('//*[@id="checkoutModal"]/div/div/div[2]/p[2]/a/u');

        //Fill all details in Signup and create account
        await common.sendKeysByName('name', 'Tatevik');
        await common.sendKeysByXpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]', 'tatev-petrosyan-96@mail.ru');
        await common.clickElementByXpath('/html/body/section/div/div/div[3]/div/form/button');
        await common.wait();

        let name = 'Tatevik';
        let sureName = 'Petrosyan';
        let address1 = 'Arno Babajanyan';
        let address2 = 'Arno Babajanyan 98/4';
        let country = 'United States';
        let company = 'Google';
        let state = 'California';
        let city = 'LA';

        await common.makeSureElementIsVisibleByXpath('//*[@id="form"]/div/div/div/div/h2/b');
        await common.clickElementByXpath('//*[@id="id_gender2"]');
        await common.sendKeysByName('password', 'Tatev2022..');
        await common.selectDropDownValueById('days', '6');
        await common.selectDropDownValueById('months', '2');
        await common.selectDropDownValueById('years', '1996');
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/div[6]/label');
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/div[7]/label');
        await common.sendKeysById('first_name', name);
        await common.sendKeysById('last_name', sureName);
        await common.sendKeysById('company', company);
        await common.sendKeysById('address1', address1);
        await common.sendKeysById('address2', address2);
        await common.sendKeysByXpath('//*[@id="country"]', country);
        await common.sendKeysById('state', state);
        await common.sendKeysById('city', city);
        await common.sendKeysById('zipcode', '0011');
        await common.sendKeysById('mobile_number', '055929229');
        await common.clickElementCheckboxByXpath('//*[@id="form"]/div/div/div/div/form/button');

        // Verify 'ACCOUNT CREATED!' and click 'Continue' button
        await common.makeSureElementIsVisibleByClassName('title text-center');
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

        // Verify ' Logged in as username' at top
        await common.makeSureElementIsVisibleByPartialLinkText("Logged in as");

        //Click 'Cart' button
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');

        //Click Proceed To Checkout
        await common.clickElementByXpath('//*[@id="do_action"]/div[1]/div/div/a');
        common.wait();

        //Verify Address Details and Review Your Order
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[2]', 'Mrs. Tatevik Petrosyan');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[3]', 'Google');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[4]', 'Arno Babajanyan');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[5]', 'Arno Babajanyan 98/4');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[6]', 'LA California 0011');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[7]', 'United States');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[8]', '055929229');
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_info"]');

        //Enter description in comment text area and click 'Place Order'
        await common.sendKeysByXpath('//*[@id="ordermsg"]/textarea', " I want to receive the order as soon as possible.");
        await common.clickElementByXpath('//*[@id="cart_items"]/div/div[7]/a');
        common.wait();

        // Enter payment details: Name on Card, Card Number, CVC, Expiration date
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[1]/div/input', "TATEVIK PETROSYAN");
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[2]/div/input', "4355053923125027");
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[1]/input', "152");
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[2]/input', "002");
        await common.sendKeysByXpath('//*[@id="payment-form"]/div[3]/div[3]/input', "2028");

        //Click 'Pay and Confirm Order' button
        await common.clickElementByXpath('//*[@id="submit"]');
        common.wait();

        // Click 'Download Invoice' button and verify invoice is downloaded successfully.
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/a');
        const fs = require('fs');
        const filePath = 'C:\Users\Acer\Downloads\invoice.txt';

        // Click 'Continue' button
        await common.clickElementByXpath('//*[@id="form"]/div/div/div/div/a');

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