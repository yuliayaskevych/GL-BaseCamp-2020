const { By } = require('selenium-webdriver');
config = {
    URL: 'https://www.globallogic.com/ua/careers/',
    URL_CAREER: 'https://www.globallogic.com/ua/career-search-page/?keywords=',
    SEARCH_FIELD: (By.id('by_keyword')),
    SEARCH_BUTTON: (By.xpath('//*[@id="hero"]/div/div/div/div/div/div/div/form/div/button')),
    COOKIE_ALLOW_ALL_BUTTON: (By.id('CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')),
    SEARCH_RESULT: (By.css('#carersearchpage .career-pagelink p')),
};

module.exports = config;