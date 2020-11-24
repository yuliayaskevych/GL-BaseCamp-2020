const { Builder } = require('selenium-webdriver');

const GLCareersResultPage = require('../pageObject/GLCareersResultPage');

(async function () {
    const driver = await new Builder().forBrowser('firefox').build();
    const resultPage = new GLCareersResultPage(driver);
    try {
        await resultPage.open('QA');
        console.log('test 2: ', await resultPage.getFirst());
    } catch (e) {
        console.log(e)
    }
    finally {
        await driver.quit();
    }
})();
