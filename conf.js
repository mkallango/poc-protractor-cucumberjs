exports.config = {
    defaultTimeoutInterval: 250000,
    getPageTimeout: 600000,
    allScriptsTimeout: 5000000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    params: {
        login: {
            email: 'default',
            password: 'default'
        }
    },

    baseUrl: 'https://www.gmail.com/',
        
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    chromeDriver: 'node_modules/chromedriver/bin/chromedriver',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['no-sandbox']
        }
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();    
        browser.ignoreSynchronization = true;
    },
    specs: ['./**/*.feature'],
    exclude: ['./node_modules/**'],
    suites: {},
    cucumberOpts: {
        tags: [  ],
        format: ['json:reports/results.json', 'pretty'],
        require: [
            './**/*steps.js'
        ],
        profile: false,
        'no-source': true,
        keepAlive: false
    },
    
    resultJsonOutputFile: 'reports/report.json'
};
