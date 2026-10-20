import MainNews from "../components/mainnews";
import MostReadNews from "../components/mostreadnews";
import OtherSectionNews from "../components/othersectionnews";
import { fetchNewsApi } from "../lib/news-api";

// These BBC Bangla promo/social-media sections should not appear on the home page.
const HIDDEN_HOME_SECTION_IDS = new Set([
  "urn:bbc:tipo:list:0ad2eb5d-7a0e-4c74-b8b4-de3de9bc5137", // বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!
  "urn:bbc:tipo:list:0de6d7f8-ccae-45b6-b843-7329b6e521b7", // বিবিসি বাংলা এখন ইন্সটাগ্রামে!
  "urn:bbc:tipo:list:61a6be9c-5bb1-4ab5-ad6e-9855ff26a267", // সামাজিক মাধ্যমে বিবিসি বাংলা
]);

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
  const otherSections = sections
    .slice(1)
    .filter((section) => !HIDDEN_HOME_SECTION_IDS.has(section.curationId));

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
