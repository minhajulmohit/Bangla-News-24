"use client";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import Image from "next/image";

const NavBtn = () => {
  const { data: session } = authClient.useSession();
  const user = (
    session as unknown as { user?: { image?: string | null } } | null
  )?.user;

  return (
    <div className="flex items-center justify-center gap-2 sm:justify-end sm:gap-3">
      {user ? (
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <Link href={"/signin"}>
            <button className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-black/5 sm:text-base">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="rounded-md bg-red-600 px-3 py-2 text-sm text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBtn;
