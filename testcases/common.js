
const { Builder, By, Select, until, LocalFileDetector } = require('selenium-webdriver');
const fs = require('fs')

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
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async quit() {
        await this.driver.quit();
    }

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
        await element.click();
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
}


module.exports = SeleniumCommon;