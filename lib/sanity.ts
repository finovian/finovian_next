import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "eumx4wot",
  dataset: "jay-dataset", // 👈 Or your actual dataset
  apiVersion: "2023-01-01", // 👈 Use the same version across the app
  useCdn: false,
  token:
    "skWRcSjhgm7O5tdBUsNPVNlwL3TXjmY7fAN0HJeJL3UX4qyyDQeX3rxiIfwsiFfHoUg43sHjZu7FOxV3pqpJwjwWycvoXvVVK8QH77g4SSG98XAEmEAtfLvm8ONxI3fCdoIi1c9saswDxt9SbQ6L696LZQu7alpl4SbfXwYYt3DEwMJTP8pa",
});
