import { createClient } from "@sanity/client";

const config = {
  projectId: "ju8y98v2",
  dataset: "production",
  apiVersion: "2023-01-01",

  useCdn: false,
  token:
    "skJPWCHKu2ibiDy9IuQIF7iOQFi5gIlmqvAZBP6N3P2skXE99RTonG3utWEkDImXVyOkhsdiAi2oHzhz4kqYMdj16x2sDVd0M0MHokYShpojKRae2eH6YTxMWTxlXa20dKyGFwQcDVfbUCShipdoviL07mrs0FDC1UJfG0C4TdjAzG4AVwf4",
};

export const client = createClient(config);
