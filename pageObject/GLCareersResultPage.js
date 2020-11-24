const { Builder, By, until, Key } = require('selenium-webdriver');

const BasePage = require('./BasePage');
const config = require('./config');

class GLCareersResultPage extends BasePage {

    constructor(browser) {
        super(browser);
    }

    async open(byKeyword) {
        await this.pageOpen(`${config.URL_CAREER}${byKeyword}`, true);
        try {
            await this.click(config.COOKIE_ALLOW_ALL_BUTTON);
        }
        catch (e) {
            console.log('cookie is not present')
        }
    }

    async getFirst() {
        return await this.getText(config.SEARCH_RESULT);
    }
}

module.exports = GLCareersResultPage;