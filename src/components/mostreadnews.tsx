import Link from "next/link";

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

const MostReadNews = ({ mostRead }: { mostRead: IMostRead[] }) => {
  return (
    <aside className="rounded-2xl border border-slate-300 p-3 sm:p-5">
      <h2 className="mb-4 text-lg font-bold sm:text-xl">সর্বাধিক পঠিত</h2>
      <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-red-600 sm:space-y-4">
        {mostRead.map((mr) => (
          <li
            key={mr.id}
            className="text-sm leading-6 transition-colors duration-300 hover:text-red-600 sm:text-base"
          >
            <Link href={`/news/${mr.id}`} className="rounded-sm">
              {mr.title}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default MostReadNews;
