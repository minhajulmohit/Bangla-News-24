"use client";

import { useEffect, useState } from "react";
import NewsCard from "./newscard";
import Link from "next/link";

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

const MainNews = ({ news }: { news: INews[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (news.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 30_000);
    return () => clearInterval(interval);
  }, [news.length]);

  useEffect(() => {
    if (news.length <= 3) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3 >= news.length ? 0 : prev + 3));
    }, 10_000);
    return () => clearInterval(interval);
  }, [news.length]);

  const currentNews = news[currentIndex];
  const currentNewsHeadlines = news.slice(startIndex, startIndex + 3);

  if (!currentNews) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
      <div className="min-w-0">
        <NewsCard a={currentNews} />
      </div>

      <div className="min-w-0 rounded-2xl border border-slate-300 p-3 sm:p-4">
        <div className="grid gap-2 sm:gap-3">
          {currentNewsHeadlines.map((n) => (
            <Link
              href={`/news/${n.id}`}
              key={n.id}
              className="group rounded-xl p-2 transition-colors duration-200 hover:bg-black/5"
            >
              <div className="grid gap-2 border-b border-slate-300 pb-3 sm:pb-4">
                <p className="text-sm text-red-700 sm:text-base">{n.category}</p>
                <h3 className="text-base font-bold leading-snug transition-colors sm:text-lg">
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
