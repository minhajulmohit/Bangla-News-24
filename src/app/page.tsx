import MainNews from "../components/mainnews";
import MostReadNews from "../components/mostreadnews";

//
export default async function Home() {
  //
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  //
  const res2 = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data2 = await res2.json();
  const mostRead = data2.data;
  //
  console.log(mostRead);

  return (
    <div className="container mx-auto grid  grid-cols-3 gap-10">
      {/* news section */}
      <div className="col-span-2">
        <MainNews news={mainNews}></MainNews>
      </div>
      {/* most read section */}
      <div className="col-span-1">
        <MostReadNews mostRead={mostRead}></MostReadNews>
      </div>
    </div>
  );
}
