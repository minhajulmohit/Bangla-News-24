import MainNews from "../components/mainnews";
import MostReadNews from "../components/mostreadnews";
import OtherSectionNews from "../components/othersectionnews";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const res2 = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data2 = await res2.json();
  const mostRead = data2.data;

  const otherSections = sections.slice(1);

  return (
    <main className="container mx-auto w-full max-w-screen-2xl px-3 sm:px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
        <section className="min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />
          <OtherSectionNews otherSections={otherSections} />
        </section>

        <aside className="min-w-0 lg:col-span-1">
          <MostReadNews mostRead={mostRead} />
        </aside>
      </div>
    </main>
  );
}
