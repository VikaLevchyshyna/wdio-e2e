export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.spec.js'],

    suites: {
        checkout: ['./test/specs/checkout.e2e.spec.js'],
        login: ['./test/specs/login.data-driven.spec.js']
    },

    maxInstances: 2,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--window-size=1440,1000']
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-width=1440', '-height=1000']
            }
        }
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function () {
        await browser.setWindowSize(1440, 1000);
    },

    afterTest: async function (test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
