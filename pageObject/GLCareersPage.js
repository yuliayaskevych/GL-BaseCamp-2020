const BasePage = require('./BasePage');
const config = require('./config');

class GLCareersPage extends BasePage {

    constructor(browser) {
        super(browser);
    }

    async open() {
        await this.pageOpen(config.URL, true);
        try {
            await this.click(config.COOKIE_ALLOW_ALL_BUTTON);
        }
        catch (e) {
            console.log('cookie is not present', e);
        }
    }
    
    async searchVacancy(vacancy) {
        await this.sendText(config.SEARCH_FIELD, vacancy);
        await this.click(config.SEARCH_BUTTON);
    }

    async getFirst() {
        return await this.getText(config.SEARCH_RESULT);
    }
}

module.exports = GLCareersPage;