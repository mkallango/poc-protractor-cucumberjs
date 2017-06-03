var aux = require("../scripts/aux-scripts");

class Login {
    constructor() {
        this.username = element(by.id('identifierId'));
        this.password = element(by.css('[name="password"]'));
        this.nextFromEmail = element(by.id('identifierNext')).element(by.css('span.RveJvd.snByac'));    
        this.nextFromPass = element(by.id('passwordNext')).element(by.css('span.RveJvd.snByac'));
    }

    navigateToGmail() {
        browser.get('http://www.gmail.com');
    }

    credentials(user,pass) {
        //Fill email field
        browser
            .wait(aux.isClickable(this.username),10000)
            .then(this.username.sendKeys(user));
        
        //Click Next button
        browser
            .wait(aux.isClickable(this.nextFromEmail),10000)
            .then(this.nextFromEmail.click());
        
        //Fill password field
        browser
            .wait(aux.isClickable(this.password),10000)
            .then(this.password.sendKeys(pass));
        
        //Click Next button
        browser
            .wait(aux.isClickable(this.nextFromPass),10000)
            .then(this.nextFromPass.click());
        
        browser.sleep(1000);

    }

    pageLogin(){
        this.navigateToGmail();
        this.credentials(browser.params.login.email, browser.params.login.password);
    }
}

module.exports = new Login();