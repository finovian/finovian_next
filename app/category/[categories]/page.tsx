import ArticlesByCategory from "@/imports/category/pages/CategoryPage";
import { postsByCategorySlugQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";

type Props = {
  params: Promise<{
    categories: string;
    article: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;



  const posts = await client.fetch(postsByCategorySlugQuery, {
    slug: `category/${resolvedParams.categories}`,
  });


  return <ArticlesByCategory posts={posts} />;
}
