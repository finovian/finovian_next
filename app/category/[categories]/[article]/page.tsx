import ArticlesPage from "@/imports/articles/pages/ArticlesPage";
import { singlePostQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";

type Props = {
  params: {
    categories: string;
    article: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  const post = await client.fetch(singlePostQuery, {
    slug: params.article,
  });

  return <ArticlesPage post={post} />;
}
