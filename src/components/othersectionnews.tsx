import { INews } from "./mainnews";
import NewsCard from "./newscard";

export interface INewsSection {
  articles: INews[];
  count: number;
  curationId: string;
  curationType: string;
  link: string | null;
  title: string;
}

const OtherSectionNews = ({
  otherSections,
}: {
  otherSections: INewsSection[];
}) => {
  return (
    <div className="my-8 space-y-8 sm:my-12 sm:space-y-10">
      {otherSections.map((os: INewsSection) => (
        <section key={os.curationId} className="min-w-0">
          <h2 className="border-b-2 border-b-red-700 pb-2 text-base font-semibold sm:text-lg">
            {os.title}
          </h2>
          <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:my-6">
            {os.articles.map((a) => (
              <NewsCard key={a.id} a={a} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default OtherSectionNews;
