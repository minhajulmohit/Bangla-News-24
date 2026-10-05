"use client";
import Link from "next/link";

const HomeIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 10 9-7 9 7" />
    <path d="M5 9v12h14V9" />
    <path d="M9 21v-8h6v8" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-[110px] sm:text-[150px] md:text-[190px] font-black leading-none tracking-tight text-red-600">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="mt-34 sm:mt-42 md:mt-50 text-sm sm:text-base font-semibold tracking-[0.55em] text-gray-400 uppercase">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="max-w-lg mx-auto text-sm sm:text-base leading-7 text-gray-500 mb-8">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে
          অথবা এই মুহূর্তে পাওয়া যাচ্ছে না।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 hover:-translate-y-0.5"
          >
            <HomeIcon />
            হোমে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5"
          >
            <ArrowLeftIcon />
            আগের পেজে ফিরে যান
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
