import Image from "next/image";
import Link from "next/link";
import { INews } from "./mainnews";

const NewsCard = ({ a }: { a: INews }) => {
  return (
    <Link href={`/news/${a.id}`} className="group block h-full min-w-0">
      <article className="h-full overflow-hidden rounded-2xl border border-slate-300 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            src={a.imageUrl}
            alt={a.imageAlt || a.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex h-full flex-col gap-3 p-3 sm:gap-4 sm:p-4">
          <p className="text-sm text-red-600 sm:text-base">{a.category}</p>
          <h2 className="text-base font-bold leading-snug transition-colors duration-300 group-hover:text-red-600 sm:text-lg">
            {a.title}
          </h2>
          <p className="line-clamp-3 text-sm leading-6 text-slate-500 sm:line-clamp-2 sm:text-[15px]">
            {a.description}
          </p>
          <small className="mt-auto text-xs leading-5 text-slate-400 sm:text-sm">
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
      </article>
    </Link>
  );
};

export default NewsCard;
