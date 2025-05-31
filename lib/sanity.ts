import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "zjcs9u5b",
  dataset: "production", // 👈 Or your actual dataset
  apiVersion: "2023-01-01", // 👈 Use the same version across the app
  useCdn: true, // Faster, but cached (fine for public data)
});
