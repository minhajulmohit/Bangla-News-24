"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
};

const NavLinkItem = ({ href, title }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-300 ${
        isActive ? "text-red-600 font-semibold" : "text-slate-700"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLinkItem;