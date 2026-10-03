import Image from "next/image";
interface DescriptionFragment {
  type: string;
  model: {
    text: string;
    attributes: unknown[];
  };
}

interface DescriptionParagraph {
  type: string;
  model: {
    text: string;
    blocks: DescriptionFragment[];
  };
}

interface DescriptionBlock {
  type: string;
  model: {
    blocks: DescriptionParagraph[];
  };
}

interface Description {
  blocks: DescriptionBlock[];
}

interface Byline {
  name: string;
  role: string;
}

interface Topic {
  id: string;
  name: string;
}

interface BodyImage {
  type: "image";
  url: string;
  width: number;
  height: number;
  caption: string;
  altText: string;
  copyrightHolder: string;
}

interface BodyText {
  type: "text";
  text: string;
}

interface BodySubheading {
  type: "subheading";
  text: string;
}

type BodyItem = BodyImage | BodyText | BodySubheading;

interface ArticleData {
  id: string;
  title: string;
  description: Description;
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: Byline[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyItem[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

interface IndividualNewsResponse {
  success: boolean;
  cachedAt: string;
  data: ArticleData;
}
interface PageProps {
  params: Promise<{
    newsid: string;
  }>;
}

//
const NewsDetailsPage = async ({ params }: PageProps) => {
  //
  const { newsid } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Article fetch failed");
  }
  const data: IndividualNewsResponse = await res.json();
  const article: ArticleData = await data.data;

  const publishedDate = new Date(article.firstPublished).toLocaleString(
    "bn-BD",
    {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  );
  //
  return (
    <main className="min-h-screen bg-white text-gray-900 ">
      {/* Article Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
          {/* Title */}
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {article.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600 md:text-xl">
            {article.description.blocks[0]?.model.blocks[0]?.model.text}
          </p>

          {/* Author + Date */}
          <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {article.byline.map((author, index) => (
                <div key={index}>
                  <p className="font-semibold text-gray-900">{author.name}</p>

                  <p className="text-sm text-gray-500">{author.role}</p>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              <p>{publishedDate}</p>
              <p className="mt-1">{article.wordCount} শব্দ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="mx-auto max-w-3xl px-4 pb-16 md:px-6">
        <article className="text-lg leading-9 text-gray-800">
          {article.body.map((item, index) => {
            if (index === 0 && item.type === "image") {
              return null;
            }

            if (item.type === "image") {
              return (
                <figure key={index} className="my-10">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={item.url}
                      alt={item.altText}
                      width={item.width}
                      height={item.height}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}

                  {item.copyrightHolder && (
                    <p className="mt-1 text-xs text-gray-400">
                      © {item.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            if (item.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-5 mt-10 text-2xl font-bold md:text-3xl"
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "text") {
              return (
                <p key={index} className="mb-6">
                  {item.text}
                </p>
              );
            }

            return null;
          })}
        </article>

        {/* Tags */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Source */}
        <div className="mt-10 rounded-xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">সূত্র</p>

          <p className="mt-1 font-semibold">{article.source}</p>

          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-red-600 hover:underline"
          >
            মূল প্রতিবেদন দেখুন →
          </a>
        </div>
      </section>
    </main>
  );
};

export default NewsDetailsPage;
