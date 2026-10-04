import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

export type THeadline = {
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
};

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines = data.data;

  return (
    <div className="sticky top-0 z-50 my-3 w-full bg-red-600 text-white sm:my-5">
      <div className="container mx-auto flex w-full max-w-screen-2xl items-center px-3 sm:px-4 lg:px-6">
        <p className="py-3 shrink-0 bg-red-700 px-2 text-sm sm:px-3 sm:text-base">
          সর্বশেষ
        </p>
        <div className="min-w-0 flex-1 overflow-hidden">
          <MarqueeText
            className="py-1 text-sm sm:text-base"
            direction="right"
            duration={8}
          >
            {headlines.map((h: THeadline) => (
              <span key={h.id} className="whitespace-nowrap">
                <Link href={`/news/${h.id}`} className="hover:underline">
                  {h.title}
                </Link>
                <span className="mx-3 sm:mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
