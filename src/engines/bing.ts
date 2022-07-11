import { Engine } from "../types";

export const bing_bot: Engine = {
  keywords: { queryString: "q", value: "" },
  index: { options: { increment: 10, initial: null }, queryString: "first" },
  request: {
    url: "https://www.bing.com/search",
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    },
  },
  strategy: {
    description: ($, push) => {
      $("div.b_caption p")
        .find("b")
        .remove()
        .end()
        .each((i, el) => {
          push($(el).text());
        });
    },
    link: ($, push) => {
      $("div.b_title,li.b_algo > h2 > a[href]").each((i, el) => {
        push($(el).attr("href") || "");
      });
    },
    title: ($, push) => {
      $("div.b_title,li.b_algo > h2").each((i, el) => {
        push($(el).text());
      });
    },
  },
};
