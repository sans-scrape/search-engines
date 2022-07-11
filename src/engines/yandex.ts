import { Engine } from "../types";

export const yandex_bot: Engine = {
  keywords: { queryString: "text", value: "" },
  index: { options: { increment: null, initial: null }, queryString: "p" },
  request: {
    url: "https://yandex.com/search",
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
    },
  },
  strategy: {
    description: ($, push) => {
      $("ul#search-result div.TextContainer")
        .find("b")
        .remove()
        .end()
        .each((i, el) => {
          push($(el).text());
        });
    },
    link: ($, push) => {
      $("ul#search-result a[href].OrganicTitle-Link").each((i, el) => {
        push($(el).attr("href") || "");
      });
    },
    title: ($, push) => {
      $("ul#search-result h2 > span").each((i, el) => {
        push($(el).text());
      });
    },
  },
};
