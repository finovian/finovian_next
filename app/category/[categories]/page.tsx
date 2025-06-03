import ArticlesByCategory from "@/imports/category/pages/CategoryPage";
import { postsByCategorySlugQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";

type Props = {
  params: {
    categories: string;
    article: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const posts = await client.fetch(postsByCategorySlugQuery, {
    slug: `/${params.categories}`,
  });

  return <ArticlesByCategory posts={posts} />;
}
