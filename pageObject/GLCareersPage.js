
const { By } = require('selenium-webdriver');

const BasePage = require('./BasePage');

class GLCareersPage extends BasePage {
    URL = 'https://www.globallogic.com/ua/careers/'
    SEARCH_FIELD = (By.id('by_keyword'));
    SEARCH_BUTTON = (By.xpath('//*[@id="hero"]/div/div/div/div/div/div/div/form/div/button'));
    COOKIE_ALLOW_ALL_BUTTON = (By.id('CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'));
    SEARCH_RESULT = (By.css('#carersearchpage .career-pagelink p'));

    constructor(browser) {
        super(browser);
    }
    // get allowCookieButton() {
    //     this.isPresent(this.COOKIE_ALLOW_ALL_BUTTON);
    //     return this.browser.findElement(this.COOKIE_ALLOW_ALL_BUTTON);
    // }
    // get searchField() {
    //     // this.isPresent(this.SEARCH_FIELD);
    //     // return this.browser.findElement(this.SEARCH_FIELD);
    //     return this.getElement(this.SEARCH_FIELD);
    // }

    // get searchButton() {
    //     this.isPresent(this.SEARCH_BUTTON);
    //     return this.browser.findElement(this.SEARCH_BUTTON);
    // }

    // get searchResult() {
    //     // this.isPresent(this.SEARCH_RESULT);
    //     // return this.browser.findElement(this.SEARCH_RESULT);
    //     return this.getElement(this.SEARCH_RESULT);
    // }

    async open() {
        await this.pageOpen(this.URL, true);
        try {
            await this.click(this.COOKIE_ALLOW_ALL_BUTTON);
        }
        catch (e) {
            console.log('cookie is not present', e);
        }
    }
    async searchVacancy(vacancy) {
        await this.sendText(this.SEARCH_FIELD, vacancy);
        //await this.sendText(this.SEARCH_FIELD, Key.ENTER);
        await this.click(this.SEARCH_BUTTON);
    }

    async getFirst() {
        return await this.getText(this.SEARCH_RESULT);
    }
}

module.exports = GLCareersPage;