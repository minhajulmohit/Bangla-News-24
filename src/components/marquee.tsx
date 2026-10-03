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

//
const Marquee = async () => {
  //
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines = data.data;
  return (
    <div className="bg-red-600 text-white my-5 ">
      <div className="container mx-auto flex">
        <p className="bg-red-700 px-3 py-2">সর্বশেষ</p>
        <MarqueeText className="py-2" direction="right" duration={8}>
          {headlines.map((h: THeadline) => (
            <span key={h.id}>
              <Link href={h.link}>
                <span>{h.title}</span>
              </Link>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
