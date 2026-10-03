"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
//
interface INews {
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
      <div className="col-span-1 border border-slate-300 rounded-2xl ">
        <Image
          height={500}
          width={510}
          src={currentNews.imageUrl}
          alt={currentNews.imageAlt}
          className="w-full h-64 overflow-hidden rounded-t-2xl object-cover"
        />
        <div className="flex flex-col gap-4 p-4">
          <p className="text-red-600">{currentNews.category}</p>
          <h1 className="text-xl font-bold">{currentNews.title}</h1>
          <p className="text-slate-500 text-[15px]">
            {currentNews.description}
          </p>
          <small className="text-slate-400">
            {new Date(currentNews.firstPublished).toLocaleString("bn-BD", {
              timeZone: "Asia/Dhaka",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </small>
        </div>
      </div>
      {/* main news titles */}
      <div className="col-span-1 border border-slate-300 rounded-2xl p-4">
        <div className="grid gap-4">
          {currentNewsHeadlines.map((n) => (
            <div
              className="grid gap-2 border-b border-b-slate-300 pb-4 "
              key={n.id}
            >
              <p className="text-red-700">{n.category}</p>
              <h3 className="text-x font-bold">{n.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;
