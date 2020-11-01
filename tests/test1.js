const { Builder, By, until, Key } = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('selenium install ubuntu python', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.partialLinkText('pypi.org')).click();
        await driver.findElement(By.id('search')).sendKeys('selenium', Key.RETURN);
        await (await driver.findElement(By.css('[aria-label="Search results"] li:nth-child(2)'))).click();
    } catch (e) {
        console.log(e);
    }
    finally {
        await driver.quit();
    }
})();