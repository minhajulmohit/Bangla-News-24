import Image from "next/image";

import { INews } from "./mainnews";
import Link from "next/link";

const NewsCard = ({ a }: { a: INews }) => {
  return (
  <Link href={`/news/${a.id}`} className="group block">
  <div className="border border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-red-200">
    <Image
      height={550}
      width={550}
      src={a.imageUrl}
      alt={a.imageAlt}
      className="w-full h-50 rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="flex flex-col gap-4 p-4">
      <p className="text-red-600">{a.category}</p>

      <h1 className="text-x font-bold transition-colors duration-300 group-hover:text-red-600">
        {a.title}
      </h1>

      <p className="text-slate-500 text-[15px] line-clamp-2">
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
</Link>
  );
};

export default NewsCard;
