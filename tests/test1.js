const { Builder } = require('selenium-webdriver');

const GLCareersPage = require('../pageObject/GLCareersPage');

(async function () {
    const driver = await new Builder().forBrowser('firefox').build();

    const careersPage = new GLCareersPage(driver);
    try {
        await careersPage.open();
        await careersPage.searchVacancy('QA');
        console.log('test 1: ', await careersPage.getFirst());
    } catch (e) {
        console.error(e);
    }
    finally {
        await driver.quit();
    }
})()
