import Link from "next/link";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const Facebook = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.3v2.3H7.5v3.2h2.8V21h3.2Z" />
  </svg>
);

const Youtube = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 12s0-3.5-.5-5.2a2.7 2.7 0 0 0-1.9-1.9C17.9 4.4 12 4.4 12 4.4s-5.9 0-7.6.5a2.7 2.7 0 0 0-1.9 1.9C2 8.5 2 12 2 12s0 3.5.5 5.2a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.7 2.7 0 0 0 1.9-1.9C22 15.5 22 12 22 12Z" />
    <path d="m10 15 5-3-5-3v6Z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const Mail = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const Phone = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
  </svg>
);

const MapPin = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-10">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo / About */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl sm:text-3xl font-extrabold text-white"
            >
              বাংলা<span className="text-red-500">নিউজ</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400 max-w-sm">
              দেশের সর্বশেষ খবর, সংবাদ এবং গুরুত্বপূর্ণ আপডেট জানতে আমাদের সঙ্গে
              থাকুন। সত্য ও নির্ভরযোগ্য সংবাদ পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-red-600 hover:text-white"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-red-600 hover:text-white"
              >
                <Instagram size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-red-600 hover:text-white"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-red-500">
                  হোম
                </Link>
              </li>

              <li>
                <Link href="/news" className="transition hover:text-red-500">
                  সর্বশেষ খবর
                </Link>
              </li>

              <li>
                <Link
                  href="/category/world"
                  className="transition hover:text-red-500"
                >
                  আন্তর্জাতিক
                </Link>
              </li>

              <li>
                <Link
                  href="/category/sports"
                  className="transition hover:text-red-500"
                >
                  খেলাধুলা
                </Link>
              </li>

              <li>
                <Link
                  href="/category/technology"
                  className="transition hover:text-red-500"
                >
                  প্রযুক্তি
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              আমাদের সম্পর্কে
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="transition hover:text-red-500">
                  আমাদের সম্পর্কে
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-red-500">
                  যোগাযোগ
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-red-500">
                  গোপনীয়তা নীতি
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-red-500">
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">যোগাযোগ</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-red-500" />

                <span>ঢাকা, বাংলাদেশ</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-red-500" />

                <span>+880 1XXX-XXXXXX</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-red-500" />

                <span className="break-all">info@banglanews.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} বাংলা নিউজ। সর্বস্বত্ব সংরক্ষিত।
            </p>

            <p className="text-xs sm:text-sm text-gray-600">
              Designed & Developed by Minhajul Islam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
