import { THeadline } from "../../../components/marquee";
import NewsCard from "../../../components/newscard";

type SingleCategoryPageProps = {
  params: Promise<{ categoryid: string }>;
};
//
const SingleCategoryNews = async ({ params }: SingleCategoryPageProps) => {
  //
  const { categoryid: categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();

  const categoryNews = data.data;
  //

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl text-red-700 border-b-2 border-b-red-700 pb-2 mb-4">
        {data.title}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {" "}
        {categoryNews.map((d: THeadline) => (
          <NewsCard key={d.id} a={d}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryNews;
