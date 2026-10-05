

const LoadingPage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5">
      {" "}
      <div className="flex flex-col items-center justify-center text-center">
        {" "}
        {/* Logo */}{" "}
        <div className="mb-8">
          {" "}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            {" "}
            বাংলা<span className="text-red-600">নিউজ</span>{" "}
          </h1>{" "}
        </div>{" "}
        {/* Loader */}{" "}
        <div className="relative h-14 w-14 sm:h-16 sm:w-16">
          {" "}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />{" "}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-600" />{" "}
        </div>{" "}
        {/* Loading Text */}{" "}
        <div className="mt-6">
          {" "}
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            {" "}
            খবর লোড হচ্ছে...{" "}
          </p>{" "}
          <p className="mt-1 text-xs sm:text-sm text-gray-400">
            {" "}
            অনুগ্রহ করে একটু অপেক্ষা করুন{" "}
          </p>{" "}
        </div>{" "}
        {/* Small dots */}{" "}
        <div className="flex items-center gap-1.5 mt-5">
          {" "}
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce" />{" "}
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:150ms]" />{" "}
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-bounce [animation-delay:300ms]" />{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default LoadingPage;
