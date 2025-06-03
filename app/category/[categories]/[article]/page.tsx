import ArticlesPage from "@/imports/articles/pages/ArticlesPage";
import { singlePostQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";

type Props = {
  params: Promise<{
    categories: string;
    article: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;

  const post = await client.fetch(singlePostQuery, {
    slug: resolvedParams.article,
  });

  return <ArticlesPage post={post} />;
}
