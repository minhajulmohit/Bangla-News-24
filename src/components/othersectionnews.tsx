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
//
const OtherSectionNews = ({
  otherSections,
}: {
  otherSections: INewsSection[];
}) => {
  return (
    <div className="my-15">
      {otherSections.map((os: INewsSection) => (
        <div key={os.curationId}>
          <p className="border-b-2 border-b-red-700 text-[17px] font-semibold">
            {" "}
            {os.title}
          </p>
          <div className="grid grid-cols-3 gap-4 my-8">
            {" "}
            {os.articles.map((a) => (
              <NewsCard key={a.id} a={a}></NewsCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherSectionNews;
