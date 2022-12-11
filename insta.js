const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/", { waitUntil: "networkidle2" });
  await page.type(
    "#loginForm > div > div:nth-child(1) > div > label > input",
    "SharsanMANTUU"
  );
  await page.type(
    "#loginForm > div > div:nth-child(2) > div > label > input",
    "Battamir123"
  );
  await page.click("#loginForm > div > div:nth-child(3) > button");
  await page.waitForTimeout(10000);
  await page.screenshot({ path: "bata.png" });
})();
