import { Engine } from "../types";

export const google_bot: Engine = {
  keywords: { queryString: "q", value: "" },
  index: { options: { increment: 10, initial: null }, queryString: "start" },
  request: {
    url: "https://www.google.com/search",
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
  },
  strategy: {
    description: ($, push) => {
      $("#main div a h3")
        .parent()
        .parent()
        .parent()
        .find("span")
        .remove()
        .end()
        .find("br")
        .remove()
        .end()
        .find("div[class] > div > div > div[class] > div > div > div")
        .each((i, el) => {
          !String($(el).text() || " ")[0].includes(" ") && push($(el).text());
        });
    },
    link: ($, push) => {
      $("#main div a h3")
        .parent()
        .parent()
        .find("a[href]")
        .each((i, el) => {
          push($(el).attr("href")?.substring(7) || "");
        });
    },
    title: ($, push) => {
      $("#main div a h3").each((i, el) => {
        push($(el).text());
      });
    },
  },
};
