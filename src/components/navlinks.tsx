import { fetchNewsApi } from "../lib/news-api";
import NavLinkItem from "./navlinkitem";

type TNavs = {
  slug: string;
  title: string;
  topicId: null | string;
  url: string;
  scrapable: boolean;
};

const NavLinks = async () => {
  const res = await fetchNewsApi("/api/categories");
  const data = res ? await res.json() : null;
  const allNav: TNavs[] = data?.data ?? [];
  const filterNavs = allNav.filter((n: TNavs) => n.scrapable);

  return (
    <nav aria-label="প্রধান নেভিগেশন" className="w-full border-y border-slate-200">
      <div className="mx-auto w-full max-w-screen-2xl overflow-x-auto px-3 sm:px-4 lg:px-6">
        <div className="flex w-max min-w-full items-center justify-start gap-4 py-3 text-sm text-slate-700 sm:justify-center sm:gap-5 sm:text-base">
          <NavLinkItem href="/" title="হোম" />
          {filterNavs.map((n: TNavs) => (
            <NavLinkItem key={n.title} href={`/category/${n.slug}`} title={n.title} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
