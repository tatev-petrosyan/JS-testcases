
const { Builder, By, Select, until, Key, } = require('selenium-webdriver');
const fs = require('fs')
const chrome = require('selenium-webdriver/chrome');


class SeleniumCommon {
    constructor() {

        this.driver = new Builder().forBrowser('chrome').build();
    }

    async findElementWithRetry(locator, maxRetries = 5, retryDelay = 1500) {
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
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async quit() {
        await this.driver.quit();

    };

    async openUrl(url) {
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

    async clickElementCheckboxByXpath(xpath) {
        let element = await this.findElementWithRetry(By.xpath(xpath));
        await this.driver.executeScript("arguments[0].click();", element);
    }

    async clickElementByClassName(className) {
        let element = await findElementWithRetry(By.className(className));
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
        console.log("raz: element found");
        await element.sendKeys(text);
    }

    async sendKeysByXpathAndClick(locator, text) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        console.log("raz: element found");
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

    async sendKeysByXpath(locator, text) {
        let element = await this.findElementWithRetry(By.xpath(locator));
        await element.sendKeys(text);
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

    async spinBox(locator) {
        let box = await this.findElementWithRetry(By.xpath(locator));
        await this.driver.executeScript((element) => {
            element.value = parseInt(element.value) + 3;
        }, box);
    }

    async elementIsVisibleByXpath(locator) {
        const element = await this.driver.wait(until.elementLocated(By.xpath(locator)), 10000);
        await this.driver.wait(until.elementIsVisible(element), 10000);
        await this.driver.wait(until.elementIsEnabled(element), 10000);
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
    async hoverElementByXpath(locator1, locator2) {
        const targetElement = await this.driver.findElement(By.xpath(locator1));
        const hover = await this.driver.actions().move({ origin: targetElement }).perform();

        // Click on the target element
        await this.driver.findElement(By.xpath(locator2)).click();
    } catch(error) {
        console.error('An error occurred:', error);
    }


}
module.exports = SeleniumCommon;