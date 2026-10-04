import Image from "next/image";
import Logo from "../app/logo.webp";
import NavLinks from "./navlinks";

const NavBar = async () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <header className="w-full">
      <div className="container mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-3 px-3 py-3 sm:grid-cols-3 sm:px-4 sm:py-4 lg:px-6">
        <div className="hidden sm:block" />

        <div className="flex min-w-0 items-center justify-center gap-2">
          <Image
            className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            height={100}
            width={100}
            src={Logo}
            alt="Bangla News 24 logo"
            priority
          />
          <div className="min-w-0 text-center sm:text-left">
            <h1 className="text-xl font-bold leading-tight text-red-600 sm:text-2xl lg:text-3xl">
              Bangla News 24
            </h1>
            <small className="block text-xs text-slate-500 sm:text-sm">{date}</small>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:justify-end sm:gap-3">
          <button className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-black/5 sm:text-base">
            সাইন ইন
          </button>
          <button className="rounded-md bg-red-600 px-3 py-2 text-sm text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default NavBar;
