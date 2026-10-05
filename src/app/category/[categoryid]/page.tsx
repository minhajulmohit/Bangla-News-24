import { notFound } from "next/navigation";
import { THeadline } from "../../../components/marquee";
import NewsCard from "../../../components/newscard";

type SingleCategoryPageProps = {
  params: Promise<{ categoryid: string }>;
};

const SingleCategoryNews = async ({ params }: SingleCategoryPageProps) => {
  const { categoryid: categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews = data.data;
  if (!categoryNews) {
    notFound();
  }

  return (
    <main className="container mx-auto w-full max-w-screen-2xl px-3 sm:px-4 lg:px-6">
      <h2 className="mb-4 border-b-2 border-b-red-700 pb-2 text-xl font-bold text-red-700 sm:text-2xl">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {categoryNews.map((d: THeadline) => (
          <NewsCard key={d.id} a={d} />
        ))}
      </div>
    </main>
  );
};

export default SingleCategoryNews;
