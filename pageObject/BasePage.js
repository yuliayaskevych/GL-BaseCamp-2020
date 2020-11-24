const { until } = require('selenium-webdriver');

class BasePage {
    constructor(browser) {
        this.browser = browser;
    }

    async pageOpen(url, maximize = false) {
        await this.browser.get(url);
        if (maximize) {
            await this.browser.manage().window().maximize();
        }
    }
    
    async isPresent(locator) {
        await this.browser.wait(until.elementLocated(locator));
    }

    async getElement(locator) {
        let el = await this.browser.wait(until.elementLocated(locator), 10000);
        await this.browser.wait(until.elementIsVisible(el), 10000);
        return el;
    }

    async click(locator) {
        try {
            (await this.getElement(locator)).click();
        }
        catch (e) {
            console.log('from click: ', e);
            throw e;
        }
    }

    async sendText(locator, text) {
        (await this.getElement(locator)).sendKeys(text);
    }

    async getText(locator) {
        return (await this.getElement(locator)).getText();
    }
}

module.exports = BasePage;