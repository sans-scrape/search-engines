import { Engine } from "../types";

export const google_bot: Engine = {
  keywords: { queryString: "p", value: "" },
  index: { options: { increment: 7, initial: 1 }, queryString: "b" },
  request: {
    url: "https://search.yahoo.com/search",
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
  },
  strategy: {
    description: ($, push) => {
      $("div#web p.d-box").each((i, el) => {
        push($(el).text());
      });
    },
    link: ($, push) => {
      $("div#web a.d-ib[href]").each((i, el) => {
        push($(el).attr("href") || "");
      });
    },
    title: ($, push) => {
      $("div#web a.d-ib")
        .find("span")
        .remove()
        .end()
        .each((i, el) => {
          push($(el).text());
        });
    },
  },
};
