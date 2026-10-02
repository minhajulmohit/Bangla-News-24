import Image from "next/image";
import Logo from "../app/logo.webp";
import NavLinks from "./navlinks";
const NavBar = async () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <>
      <div className="container mx-auto grid grid-cols-3">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex justify-center items-center gap-2">
          <Image
            className="h-12 w-12"
            height={100}
            width={100}
            src={Logo}
            alt=""
          ></Image>
          <div>
            <h1 className="text-red-600 text-3xl font-bold">Bangla News 24</h1>
            <small className="text-slate-500">{date}</small>
          </div>
        </div>
        <div className="col-span-1 items-center flex gap-3 justify-end">
          <button>সাইন ইন</button>
          <button className="bg-red-600 text-white rounded-[5px] px-4 py-2">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </>
  );
};

export default NavBar;
