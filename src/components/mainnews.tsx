"use client";
 
import { useEffect, useState } from "react";
import NewsCard from "./newscard";
import Link from "next/link";
//
export interface INews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
//

//
const MainNews = ({ news }: { news: INews[] }) => {
  //
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 10 * 3000);
    return () => clearInterval(interval);
  }, [news.length]);
  const currentNews = news[currentIndex];
  //
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 5;

        if (next >= news.length) {
          return 0;
        }

        return next;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [news.length]);

  const currentNewsHeadlines = news.slice(startIndex, startIndex + 5);
  //
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* main news card */}
      <div className="col-span-1">
        <NewsCard a={currentNews}></NewsCard>
      </div>
      {/* main news titles */}
    <div className="col-span-1 border border-slate-300 rounded-2xl p-4">
  <div className="grid gap-4">
    {currentNewsHeadlines.map((n) => (
      <Link
        href={`/news/${n.id}`}
        key={n.id}
        className="group"
      >
        <div className="grid gap-2 border-b border-b-slate-300 pb-4">
          <p className="text-red-700">{n.category}</p>

          <h3 className="text-xl font-bold">
            {n.title}
          </h3>
        </div>
      </Link>
    ))}
  </div>
</div>
    </div>
  );
};

export default MainNews;
