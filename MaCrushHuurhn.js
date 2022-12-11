const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto("https://readtheory.org/app/sign-up/summary");
  await page.click(
    "#app > div:nth-child(2) > div > div > div > div > a:nth-child(2)"
  );

  await page.waitForTimeout(1000);
  await page.type("#username", "Bayarjavkhlan1114");
  await page.type("#password", "Lol999za");
  await page.click("#ajaxLogin");
  await page.waitForTimeout(1000);

  const Yamatee = async () => {
    while (true) {
      await page.click(
        "#app > div.app-body > div > div.quiz-page-main-container > div.page-card-wrapper.student-quiz-page-wrapper.medium.relative-ads > div.page-card.student-quiz-page > div > div > div.student-quiz-page__question-wrapper > div:nth-child(2) > div > div > div:nth-child(1) > div"
      );
      await page.waitForTimeout(3000);
      await page.click(
        "#app > div.app-body > div > div.quiz-page-main-container > div.page-card-wrapper.student-quiz-page-wrapper.medium > div.page-card.student-quiz-page > div > div > div.student-quiz-page__question-wrapper > div.student-quiz-page__question-buttons > div"
      );
      if (page.url() == "https://readtheory.org/app/student/quiz/results") {
        await page.waitForTimeout(4000);
        await page.click(
          "#app > div.app-body > div > div.quiz-page-main-container > div.page-card-wrapper.student-quiz-page-wrapper.medium.result-page > div.page-card.student-quiz-page > div > div.panel__header.flex-between-wrapper > div.primary-button.btn-next-quiz"
        );
        const grabParagraph = await page.evaluate(() => {
          const pgTag = document.querySelector(".quiz-points b");
          return pgTag.innerHTML;
        });
        console.log(`Knowledge points for this quiz: ${grabParagraph}`);
        await page.waitForTimeout(10000);

        await Yamatee();
      }
      await page.waitForTimeout(3000);
      await page.click(
        "#app > div.app-body > div > div.quiz-page-main-container > div.page-card-wrapper.student-quiz-page-wrapper.medium > div.page-card.student-quiz-page > div > div > div.student-quiz-page__question-wrapper > div.student-quiz-page__question-buttons > div"
      );
    }
  };
  Yamatee();
})();
