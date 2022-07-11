import { Scraper, ScraperConfiguration } from "@sans-scrape/scraper";
import { Engine, SearchItems } from "./types";

export function search(engine: Engine) {
  return (keywords: string) => {
    engine.keywords!.value = keywords;
    return new Scraper(<ScraperConfiguration<SearchItems>>engine);
  };
}
