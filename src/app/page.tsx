import MainNews from "../components/mainnews";
import MostReadNews from "../components/mostreadnews";
import OtherSectionNews from "../components/othersectionnews";
import { fetchNewsApi } from "../lib/news-api";

export default async function Home() {
  const [sectionsRes, mostReadRes] = await Promise.all([
    fetchNewsApi("/api/news/sections"),
    fetchNewsApi("/api/news/most-read"),
  ]);

  const sections = sectionsRes ? (await sectionsRes.json()).data : null;

  if (!Array.isArray(sections) || sections.length === 0) {
    return (
      <main className="container mx-auto w-full max-w-screen-2xl px-3 py-16 text-center sm:px-4 lg:px-6">
        <h1 className="text-xl font-bold text-red-700">
          খবর লোড করা যায়নি
        </h1>
        <p className="mt-2 text-slate-600">
          সাময়িক সমস্যা হয়েছে। একটু পর আবার চেষ্টা করুন।
        </p>
      </main>
    );
  }

  const mostRead = mostReadRes ? (await mostReadRes.json()).data : [];
  const mainNews = sections[0].articles;
  const otherSections = sections.slice(1);

  return (
    <main className="container mx-auto w-full max-w-screen-2xl px-3 sm:px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
        <section className="min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />
          <OtherSectionNews otherSections={otherSections} />
        </section>

        <aside className="min-w-0 lg:col-span-1">
          <MostReadNews mostRead={mostRead ?? []} />
        </aside>
      </div>
    </main>
  );
}
