const { Builder, By, until, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.globallogic.com/ua/careers/');
        await driver.wait(until.elementLocated(By.id('by_keyword')));
        await driver.findElement(By.id('by_keyword')).sendKeys('QA', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('carersearchpage')));
        console.log(await driver.findElement(By.css('#carersearchpage .career-pagelink p')).getText());
    } catch (e) {
        console.log(e);
    }
    finally {
        await driver.quit();
    }
})();