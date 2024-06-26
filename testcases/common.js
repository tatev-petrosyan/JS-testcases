const { Builder, By, Select, until, Key, Options, } = require('selenium-webdriver');
const fs = require('fs')
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

/*
* Common class holding all repeating actions shared across all testcases
*/
class SeleniumCommon {
    constructor() {
        let options = new chrome.Options();
        this.driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }

    async findElementWithRetry(locator, maxRetries = 5, retryDelay = 2000) {
        let retries = 0;
        while (retries < maxRetries) {
            try {
                const element = await this.driver.findElement(locator);
                return element;
            } catch (error) {
                console.log(`Attempt ${retries + 1} failed for ${locator} . Retrying...`);
                await this.sleep(retryDelay); // Wait for a short duration before retrying
                retries++;
            }
        }
        throw new Error(`Element ${locator} not found after ${maxRetries} attempts.`);
    }

    async wait() {
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async quit() {
        await this.driver.quit();
    }

    async openUrl(url) {
        this.driver.manage().window().maximize();
        await this.driver.get(url);
    }

    async clickElementById(id) {
        let element = await this.findElementWithRetry(By.id(id));
        await element.click();
    }

    async clickElementByXpath(xpath) {
        let element = await this.findElementWithRetry(By.xpath(xpath));
        await element.click();
    }

    async clickElementByName(name) {
        let element = await this.findElementWithRetry(By.name(name));
        await element.click();
    }

    async clickCheckBoxByXpath(xpath) {
        let element = await this.findElementWithRetry(By.xpath(xpath));
        await this.driver.executeScript("arguments[0].click();", element);
    }

    async clickElementByClassName(className) {
        let element = await this.findElementWithRetry(By.className(className));
        await element.click();
    }

    async clickElementByPartialLinkText(partialLinkText) {
        let element = await this.findElementWithRetry(By.partialLinkText(partialLinkText));
    }

    async makeSureElementIsVisibleByPartialLinkText(locator) {
        await this.driver.wait(until.elementIsVisible(await this.findElementWithRetry(By.partialLinkText(locator))));
    }

    async makeSureElementIsVisibleByClassName(locator) {
        await this.driver.wait(until.elementIsVisible(await this.findElementWithRetry(By.className(locator))));
    }

    async makeSureElementIsVisibleByXpath(locator) {
        await this.driver.wait(until.elementIsVisible(await this.findElementWithRetry(By.xpath(locator))));
    }

    async sendKeysByName(locator, text) {
        let element = await this.findElementWithRetry(By.name(locator));
        await element.sendKeys(text);
    }

    async sendKeysByXpath(locator, text) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        await element.sendKeys(text);
    }

    async sendKeysByXpathAndClick(locator, text) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        await element.sendKeys(text);
        await element.click();
    }

    async sendKeysById(locator, text) {
        let element = await this.findElementWithRetry(By.id(locator));
        await element.sendKeys(text);
    }

    async selectDropDownValueById(locator, value) {
        let element = await this.findElementWithRetry(By.id(locator));
        let select = new Select(element)
        await select.selectByValue(value);
    }

    async selectLocatorByXpath(locator, xpath) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        let select = new Select(element)
        await select.selectDropDownValueByXpath(xpath);
    }

    async navigateTo(url) {
        await this.driver.navigate(url);
    }

    async clickAlert() {
        let alert = await this.driver.wait(until.alertIsPresent());
        let alert1 = await this.driver.switchTo().alert();
        let alertText = await alert1.getText();
        await alert1.accept();
        consol.log(Tat)
    }

    async scrollDownByXpath(locator) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        await this.driver.executeScript('arguments[0].scrollIntoView();', element);
    }

    async hoverOverByXpath(locator) {
        let hoverElement = await this.findElementWithRetry(By.xpath(locator));
        await this.driver.actions({ bridge: true }).move({ origin: hoverElement }).perform();
    }

    async increaseSpinboxValue(locator, val) {
        let box = await this.findElementWithRetry(By.xpath(locator));
        await this.driver.executeScript((element, incVal) => {
            element.value = parseInt(element.value) + incVal;
        }, box, val);
    }

    async elementIsVisibleByXpath(locator) {
        const element = await this.driver.wait(until.elementLocated(By.xpath(locator)), 10000);
        await this.driver.wait(until.elementIsVisible(element), 20000);
        await element.click();
    }

    // Retrieve the quantity from the cart or wherever it's displayed
    async verifyingExactQuantityByXpath(locator, number) {
        const quantityElement = await this.driver.findElement(By.xpath(locator));
        const displayedQuantity = await quantityElement.getText();

        // Verify that the retrieved quantity matches the expected quantity
        const expectedQuantity = (number); // Change this to your expected quantity
        if (displayedQuantity === expectedQuantity) {
            console.log('Quantity is correct.');
        } else {
            console.log('Quantity is incorrect.');
        }
    }

    async hoverElementByXpath(locator1, locator2, locator3) {
        // Find the element to hover over
        const elementToHover = await this.findElementWithRetry(By.xpath(locator1));
        const actions = this.driver.actions();
        // Move to the element to trigger the hover action
        await actions.move({ origin: elementToHover }).perform();
        // Find the button element on the hovered element
        const popup = await this.driver.wait(until.elementLocated(By.xpath(locator2)), 3000);
        // Click on the button
        const buttonOnPopup = await popup.findElement(By.xpath(locator3));
        await buttonOnPopup.click();
    }

    async inputValueByXpath(locator1, input) {
        // Locate input elements
        const valueInput = await this.driver.findElement(By.xpath(locator1)).getText();
        assert.strictEqual(valueInput, input);
    }

    async scrollByXpath(locator1) {
        const element = await this.driver.findElement(By.xpath(locator1));
        await this.driver.executeScript('arguments[0].scrollIntoView();', element);
    }

    async listByXpath(locator, text) {
        let listElement = await this.driver.findElement(By.xpath(locator, text));
        await listElement.click();
    }

    async waitUntilProductIsVisibleByXpath(locator) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), 10000); // Adjust the timeout as needed
    }

    async waitUntilProductIsClickableByXpath(locator) {
        let element = await this.driver.wait(until.elementLocated(By.xpath(locator)), 20000); // Adjust the timeout as needed
        await element.click();
    }

    catch(error) {
        console.error('Selenium Common: An error occurred:', error);
    }
}

module.exports = SeleniumCommon;