const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const getDriver = async () => {
  const options = new chrome.Options(); // Remove `.headless()` if you want visible browser
  options.addArguments('--headless'); 
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  return driver;
};

module.exports = { getDriver };