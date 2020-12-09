const { By } = require('selenium-webdriver');

const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    EMAIL_FIELD = (By.id('email'));
    PASSWORD_FIELD = (By.id('password'));
    LOGIN_BTN = (By.id('loginbtn'));

    constructor(browser) {
        super(browser);
    }

    async open() {
        await this.pageOpen(`https://www.fakepage.com/`, true);

    }

    async inputEmail(value) {
        await this.sendText(this.EMAIL_FIELD, value);
    }

    async inputPassword(value) {
        await this.sendText(this.PASSWORD_FIELD, value);
    }

    async loginBtnPress() {
        await this.click(this.LOGIN_BTN);
    }

}

module.exports = LoginPage;