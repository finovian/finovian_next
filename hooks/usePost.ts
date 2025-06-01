import useSWR from "swr";
import { client } from "@/lib/sanity";

const query = `*[_type == "article"]{
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{name},
  category->{title},
  readTime,
  body
}`;

const fetcher = (query: string) => client.fetch(query);

const simpleQuery = `*[_type == "article"]{ title }`;
client
  .fetch(simpleQuery)
  .then(console.log)
  .finally(() => console.log("first"));

export function useArticles() {
  const { data, error, isLoading } = useSWR(query, fetcher);
  return { articles: data, isLoading, isError: error };
}
