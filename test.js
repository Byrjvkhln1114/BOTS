const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  await page.goto("https://devexpress.github.io/testcafe/example/");

  // The text of H1 element..
  const Message = await page.$eval("H1", (ele) => ele.textContent);
  console.log("Heading text: " + Message);
  const count = await page.$$eval("p", (ele) => ele.length);
  console.log("Count p tag in the page: " + count);

  await page.close();
})();
