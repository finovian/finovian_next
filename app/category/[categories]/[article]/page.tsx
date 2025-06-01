import { client } from "@/lib/sanity";
import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";

type ArticleParams = {
  params: {
    article: string;
    categories: string;
  };
};

// Portable Text serializers/components
const components = {
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      // Sanity image URLs need asset URL
      if (!value?.asset?._ref) return null;
      const imageUrl = value.asset.url || "";

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || "Article Image"}
            width={800}
            height={450}
            className="rounded-lg object-cover"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> {
  const query = `*[_type == "article" && slug.current == $slug][0]{ title, excerpt }`;
  const article = await client.fetch(query, { slug: params.article });

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  const query = `*[_type == "article"]{
    "article": slug.current,
    "categories": category->title
  }`;

  const articles = await client.fetch(query);

  return articles.map((article: { article: string; categories: string }) => ({
    article: article.article,
    categories: article.categories,
  }));
}

// Page component
export default async function ArticlePage({ params }: ArticleParams) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{url} },
    author->{name},
    category->{title},
    readTime,
    body
  }`;

  const article = await client.fetch(query, { slug: params.article });

  if (!article) {
    return <main className="text-center py-10">Article not found.</main>;
  }

  let parsedBody;

  try {
    // Check if body is an array of blocks or a stringified JSON inside first block
    if (
      Array.isArray(article.body) &&
      article.body.length > 0 &&
      typeof article.body[0].text === "string" &&
      article.body[0].text.trim().startsWith("[")
    ) {
      // parse the string inside the first block's text field as JSON
      parsedBody = JSON.parse(article.body[0].text);
    } else {
      parsedBody = article.body;
    }
  } catch (e) {
    console.error("Failed to parse Portable Text body:", e);
    parsedBody = article.body;
  }



  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {article.author?.name} · {article.readTime} ·{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {article.mainImage?.asset?.url && (
        <div className="my-6">
          <Image
            src={article.mainImage.asset.url}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 mb-8">{article.excerpt}</p>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={parsedBody} />

      </article>
    </main>
  );
}


// "use client";

// import React from "react";
// import Image from "next/image";
// import {

//   MessageCircle,
//   Heart,
// } from "lucide-react";

// const Page = () => {
//   return (
//     <div className="bg-white text-[#141414]">
//       {/* Header Image */}
//       <div
//         className="w-full h-[300px] bg-cover bg-center rounded-b-xl bg-[url('https://images.unsplash.com/photo-1639389016105-2fb11199fb6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJ0fGVufDB8fDB8fHww')]"
//       />

//       {/* Content Wrapper */}
//       <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
//         {/* Article Title */}
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Market Cycles & Emotional Discipline: A Deep Dive into Investment
//           Psychology
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg text-neutral-700 italic">
//           Discover how understanding your emotional patterns and biases can
//           unlock stronger returns over decades, not just years.
//         </p>

//         {/* Author Info */}
//         <p className="text-sm text-neutral-500">
//           By <strong>Jane Carter</strong> · May 30, 2025 · 14 min read
//         </p>

//         {/* Social Share Icons */}
//         <div className="flex gap-3 pt-2">
//           <a href="#" className="text-gray-500 hover:text-black transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.773-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//             </svg>
//           </a>
//           <a href="#" className="text-gray-500 hover:text-black transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.8 0c-2.73 0-4.94 2.18-4.94 4.87 0 .39.05.76.13 1.12A13.94 13.94 0 0 1 1.67 1.12a4.82 4.82 0 0 0-.67 2.45 4.87 4.87 0 0 0 2.18 4.06 4.9 4.9 0 0 1-2.23-.6v.06c0 2.4 1.73 4.4 4.02 4.85a4.97 4.97 0 0 1-2.22.08 4.9 4.9 0 0 0 4.6 3.37A9.86 9.86 0 0 1 0 19.53 13.93 13.93 0 0 0 7.55 21.9c9.05 0 14-7.25 14-13.54 0-.21-.01-.42-.02-.63A9.84 9.84 0 0 0 23 3z" />
//             </svg>
//           </a>
//           <a href="#" className="text-gray-500 hover:text-black transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2.04c-5.52 0-10 4.48-10 10.01 0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.72c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.52 2.37 1.08 2.95.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.12-4.55-4.98 0-1.1.39-2.01 1.02-2.72-.1-.25-.44-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.49 9.49 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.71 1.02 1.62 1.02 2.72 0 3.87-2.33 4.73-4.56 4.97.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 22 12.05c0-5.53-4.48-10.01-10-10.01z" />
//             </svg>
//           </a>
//         </div>

//         {/* Article Body */}
//         <div className="space-y-6 text-base leading-loose text-neutral-800">
//           <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-600">
//             &quot;In investing, what is comfortable is rarely profitable.&quot;
//           </blockquote>

//           <p>
//             Investing is often presented as a purely logical process, one based
//             on formulas, technical indicators, and ratios. But at its core,
//             investing is a <strong>deeply emotional experience</strong>. It
//             involves fear, hope, greed, and doubt.
//           </p>

//           <Image
//             src="https://images.unsplash.com/photo-1639389016105-2fb11199fb6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJ0fGVufDB8fDB8fHww"
//             alt="Chart"
//             width={800}
//             height={400}
//             className="w-full rounded-lg shadow-md"
//           />

//           <p>
//             Consider this: during a bull market,{" "}
//             <em>optimism and overconfidence</em> creep in. People begin to
//             believe that markets only move up. In contrast, during market
//             crashes, panic takes over. This cycle repeats every few years.
//           </p>

//           <Image
//             src="https://images.unsplash.com/photo-1639389016105-2fb11199fb6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJ0fGVufDB8fDB8fHww"
//             alt="Stock Chart"
//             width={800}
//             height={400}
//             className="w-full rounded-lg shadow-md"
//           />

//           <p>
//             One of the most dangerous biases is the{" "}
//             <strong>recency bias</strong> — assuming that the recent trend will
//             continue indefinitely.
//           </p>

//           <p>
//             Another psychological trap is <strong>loss aversion</strong>.
//             Studies show that the pain of losing $1,000 is twice as powerful as
//             the joy of gaining the same amount.
//           </p>

//           <h2 className="text-2xl font-semibold pt-6">
//             Why Long-Term Thinking Wins
//           </h2>
//           <p>
//             Markets reward those who remain consistent. Long-term investors
//             understand that short-term volatility is <em>just noise</em>.
//           </p>

//           <p>
//             For example, someone who invested $10,000 in an S&P 500 index fund
//             in 1990 and didn&apos;t touch it — not even during the Dot-com crash, the
//             2008 financial crisis, or COVID — would have seen their portfolio
//             grow significantly.
//           </p>

//           <h2 className="text-2xl font-semibold pt-6">Key Takeaways</h2>
//           <ul className="list-disc list-inside text-neutral-700 space-y-2">
//             <li>
//               <strong>Stick to a plan</strong> — even during downturns.
//             </li>
//             <li>
//               <strong>Recognize emotional triggers</strong> and prepare.
//             </li>
//             <li>
//               Stop checking your portfolio <em>daily</em>.
//             </li>
//             <li>Stay diversified, avoid hype.</li>
//             <li>
//               Review goals <strong>annually</strong>.
//             </li>
//           </ul>

//           <div className="border p-4 rounded-md bg-neutral-50">
//             <p className="italic">Tweeted by @marketpro:</p>
//             <p className="mt-2">
//               &quot;Most people miss big gains not because they chose the wrong
//               stocks, but because they sold too soon. Emotions are the true cost
//               investing.&quot;
//             </p>
//           </div>

//           {/* Simulated Comments */}
//           <div className="pt-6 space-y-4">
//             <div className="flex items-start gap-3">
//               <Image
//                 src="https://i.pravatar.cc/40"
//                 width={40}
//                 height={40}
//                 className="w-10 h-10 rounded-full"
//                 alt="Avatar"
//               />
//               <div>
//                 <p className="font-semibold">Alex M.</p>
//                 <p className="text-sm text-neutral-700">
//                   Really insightful! Emotional investing is underrated as a
//                   skill.
//                 </p>
//                 <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
//                   <Heart className="w-4 h-4" /> <span>12</span>
//                   <MessageCircle className="w-4 h-4 ml-4" /> <span>Reply</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold pt-6">Sources & References</h2>
//           <ul className="list-disc list-inside space-y-2 text-blue-600">
//             <li>
//               <a
//                 href="https://www.investopedia.com/articles/markets/082619/how-investors-can-avoid-emotional-trading.asp"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Investopedia: Emotional Trading
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.fool.com/investing/how-to-invest/behavioral-finance/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Motley Fool: Behavioral Finance
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
