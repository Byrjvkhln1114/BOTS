const puppy = require("puppeteer");
(async () => {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();
  page.goto("https://www.explorant.space/", {
    waitUntil: "load",
    timeout: 0,
  });
  await page.setViewport({
    width: 1122,
    height: 833,
  });
  await page.waitForTimeout(2000);
  await page.click(
    "#root > div > div.landing-page > div.main-container > div.landing-page-nav.headroom-wrapper > div > nav > div > ul > li:nth-child(4) > a"
  );
  await page.waitForTimeout(2000);
  await page.type(
    "#root > div > main > div > div > div > div > div > form > div:nth-child(1) > input",
    "battamir08@gmail.com"
  );
  await page.waitForTimeout(2000);
  await page.type(
    "#root > div > main > div > div > div > div > div > form > div:nth-child(2) > input",
    "Lol999za"
  );
  await page.click(
    "#root > div > main > div > div > div > div > div > form > div.d-flex.justify-content-between.align-items-center > button"
  );
  // await page.waitForTimeout(2000);
  // await page.click(
  //   "#app-container > main > div > div > div:nth-child(2) > div.col-md-6.col-lg-6.col-xl-8 > div > div > a"
  // );

  // await page.waitForTimeout(2000);
  // await page.click(
  //   "#app-container > main > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > button"
  // );
  // await page.waitForTimeout(1000);
  // await page.type("#addAccountForm > div:nth-child(1) > input", "8lems2");
  // await page.type("#addAccountForm > div:nth-child(2) > input", "Lol999za");
  // await page.click(
  //   "body > div:nth-child(9) > div > div.modal.fade.show > div > div > div.modal-footer > button.btn-shadow.btn-multiple-state.btn.btn-primary.btn-md"
  // );
  // await page.waitForTimeout(2000);
  // await page.click(
  //   "#app-container > main > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div.position-relative > a"
  // );
  // await page.waitForTimeout(2000);
  // await page.click(
  //   "#app-container > main > div > div > div > div > ul > li:nth-child(2) > a"
  // );
  // await page.waitForTimeout(2000);
  // await page.screenshot({ path: "store.png" });
  // await browser.close();
})();
