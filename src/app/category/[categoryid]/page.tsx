import { notFound } from "next/navigation";
import { THeadline } from "../../../components/marquee";
import NewsCard from "../../../components/newscard";
import { fetchNewsApi } from "../../../lib/news-api";

type SingleCategoryPageProps = {
  params: Promise<{ categoryid: string }>;
};

const SingleCategoryNews = async ({ params }: SingleCategoryPageProps) => {
  const { categoryid: categoryId } = await params;
  const res = await fetchNewsApi(`/api/category/${categoryId}`);

  if (!res) {
    return (
      <main className="container mx-auto w-full max-w-screen-2xl px-3 py-16 text-center sm:px-4 lg:px-6">
        <h1 className="text-xl font-bold text-red-700">খবর লোড করা যায়নি</h1>
        <p className="mt-2 text-slate-600">
          সাময়িক সমস্যা হয়েছে। একটু পর আবার চেষ্টা করুন।
        </p>
      </main>
    );
  }

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
