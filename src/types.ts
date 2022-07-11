import { ScraperConfiguration } from "@sans-scrape/scraper";

export type SearchItems = { description: string; link: string; title: string };

export type Engine = ScraperConfiguration<SearchItems>;
