"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
};

const NavLinkItem = ({ href, title }: Props) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`shrink-0 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-black/5 ${
        isActive ? "font-semibold text-red-600" : "text-slate-700"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLinkItem;
