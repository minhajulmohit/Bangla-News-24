import Link from "next/link";

type TNavs = {
  slug: string;
  title: string;
  topicId: null | string;
  url: string;
  scrapable: boolean;
};

//
const NavLinks = async () => {
  //
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allNav = data.data;
  const filterNavs = allNav.filter((n: TNavs) => n.scrapable);

  //
  return (
    <div className="flex justify-center gap-5 text-slate-700">
      {filterNavs.map((n: TNavs) => (
        <Link key={n.title} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
