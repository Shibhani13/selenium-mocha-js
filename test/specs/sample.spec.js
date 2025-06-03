const { getDriver } = require('../helpers/driver');
const { expect } = require('chai');
const SamplePage = require('../pages/sample.page');

describe('Demo QA', function () {
  let driver;
  let samplePage;

  before(async function () {
    driver = await getDriver();
    samplePage = new SamplePage(driver); 
  });

  after(async function () {
    await driver.quit();
  });

  it('Text Box page', async function () {
    await driver.get('https://demoqa.com/text-box');
    const title = await driver.getTitle();
    await samplePage.clickRadioButton();
    await driver.sleep(5000); // sleeps for 2000 milliseconds = 2 seconds
    console.log('title', title);
    // expect(title).to.include('Login');
  });
});