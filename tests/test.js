const { Builder } = require('selenium-webdriver');

const LoginPage = require('../pageObject/LoginPage');

(async function () {
    const driver = await new Builder().forBrowser('chrome').build();
    //const driver = await new Builder().forBrowser('firefox').build();

    const loginPage = new LoginPage(driver);
    try {
        await loginPage.open();
        await loginPage.inputEmail('sample@f.com');
        await loginPage.inputPassword('samplePass');
        await loginPage.loginBtnPress();

    } catch (e) {
        console.error(e);
    }
    finally {
        await driver.quit();
    }
})()
