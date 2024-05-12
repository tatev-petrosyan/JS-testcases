
const SeleniumCommon = require('./common');

async function runTests() {
    const common = new SeleniumCommon();
    try {

        // Go to site
        await common.openUrl('http://automationexercise.com');

        // Make sure home is visible
        await common.makeSureElementIsVisibleByPartialLinkText("Home");

        // Find signup button and click     
        await common.clickElementByXpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');
        await common.makeSureElementIsVisibleByClassName('signup-form');

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

        // Verify that the delivery address is same address filled at the time registration of account
        //  await common.inputValueByXpath('//*[@id="address_delivery"]/li[2]', 'Mrs.'+ name + ' ' + sureName);
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[3]', company);
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[4]', address1);
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[5]', address2);
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[6]', 'LA California 0011');
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[7]', country);
        await common.inputValueByXpath('//*[@id="address_delivery"]/li[8]', '055929229');
        await common.makeSureElementIsVisibleByXpath('//*[@id="cart_info"]');

        await common.inputValueByXpath('//*[@id="address_invoice"]/li[2]', "Mrs. Tatevik Petrosyan");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[3]', "Google");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[4]', "Arno Babajanyan");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[5]', "Arno Babajanyan 98/4");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[6]', "LA California 0011");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[7]', "United States");
        await common.inputValueByXpath('//*[@id="address_invoice"]/li[8]', "055929229");

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