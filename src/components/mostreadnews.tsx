interface IMostRead {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string | null;
  source: string;
  rank: number;
}
//
const MostReadNews = ({ mostRead }: { mostRead: IMostRead[] }) => {
  //
  return (
    <div className="border border-slate-300 rounded-2xl p-5">
      <h3 className="font-bold text-xl mb-4">সর্বাধিক পঠিত</h3>
      <ol className="list-decimal pl-5  marker:text-red-600 marker:font-semibold space-y-4">
        {mostRead.map((mr) => (
          <li key={mr.id}>{mr.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default MostReadNews;
