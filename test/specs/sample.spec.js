const { getDriver } = require('../helpers/driver');
const { expect } = require('chai');

describe('Demo QA', function () {
  let driver;

  before(async function () {
    driver = await getDriver();
  });

  after(async function () {
    await driver.quit();
  });

  it('Text Box page', async function () {
    await driver.get('https://demoqa.com/text-box');
    const title = await driver.getTitle();
    console.log('title', title);
    // expect(title).to.include('Login');
  });
});