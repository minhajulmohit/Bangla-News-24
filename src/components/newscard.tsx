import Image from "next/image";

import { INewsSection } from "./othersectionnews";

const NewsCard = ({ os }: { os: INewsSection }) => {
  return (
    <div className="grid grid-cols-3 gap-3 my-5">
      {os.articles.map((a) => (
        <div className="border border-slate-300 rounded-2xl" key={a.id}>
          <Image
            height={500}
            width={510}
            src={a.imageUrl}
            alt={a.imageAlt}
            className="w-full h-40 overflow-hidden rounded-t-2xl object-cover"
          />
          <div className="flex flex-col gap-4 p-4 ">
            <p className="text-red-600">{a.category}</p>
            <h1 className="text-x font-bold">{a.title}</h1>
            <p className="text-slate-500 text-[15px] line-clamp-3">
              {a.description}
            </p>
            <small className="text-slate-400">
              {new Date(a.firstPublished).toLocaleString("bn-BD", {
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
      ))}
    </div>
  );
};

export default NewsCard;
