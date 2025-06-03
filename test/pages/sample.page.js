const locators = require('../locators/sample.locator');
class SamplePage {
  constructor(driver) {
    this.driver = driver;
  }

  getMenuItemByName(name) {
    return this.driver.findElement(By.xpath(`//ul[@id='menu']//li[text()='${name}']`));
  }

  getUserRowByEmail(email) {
    return this.driver.findElement(By.xpath(`//tr[td[text()='${email}']]`));
  }

  async clickRadioButton() {
    const ele = await this.driver.findElement(locators.DYNAMIC_LOCATORS.getRadioButtonSection);
    return await ele.click();
  }
}

module.exports = SamplePage;