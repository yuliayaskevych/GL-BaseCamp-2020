const { Builder, By, until, Key } = require('selenium-webdriver');

const BasePage = require('./BasePage');

class GLCareersResultPage extends BasePage {
    SEARCH_RESULT = (By.css('#carersearchpage .career-pagelink p'));
    COOKIE_ALLOW_ALL_BUTTON = (By.id('CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'));

    constructor(browser) {
        super(browser);
    }

    async open(byKeyword) {
        await this.pageOpen(`https://www.globallogic.com/ua/career-search-page/?keywords=${byKeyword}&experience=&locations=&c=`, true);
        try {
            await this.click(this.COOKIE_ALLOW_ALL_BUTTON);
        }
        catch (e) {
            console.log('cookie is not present')
        }
    }

    async getFirst() {
        return await this.getText(this.SEARCH_RESULT);
    }
}

module.exports = GLCareersResultPage;