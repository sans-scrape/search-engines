import { Engines, search } from "../src";

const scraper = search(Engines.Yahoo.google_bot);

scraper("javascript")
  .request(2)
  .then((pages) => {
    pages.map((page) => {
      console.log(page.title);
    });
  });
