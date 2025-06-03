const { By } = require('selenium-webdriver');

const DYNAMIC_LOCATORS = {
  getButtonByLabel: (label) => By.xpath(`//button[text()='${label}']`),
  getInputByPlaceholder: (placeholder) => By.css(`input[placeholder='${placeholder}']`),
  getRadioButtonSection: By.xpath('(//ul[@class="menu-list"])[1]//li[3]')
};

module.exports = { DYNAMIC_LOCATORS };