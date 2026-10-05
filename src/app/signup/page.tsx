"use client";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/",
    });
    if (data) {
      toast.success("User Created. Redirecting to sign in");
    }
    if (error) {
      const message =
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
          ? error.message
          : "An error occurred";
      toast.error(message);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-red-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">সাইন আপ</legend>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input focus-within:border-red-500 focus-within:outline-red-500"
            placeholder="আপনার নাম"
          />
          <label className="label">ই-মেইল</label>
          <input
            type="email"
            name="email"
            className="input focus-within:border-red-500 focus-within:outline-red-500"
            placeholder="আপনার ই-মেইল"
          />
          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input focus-within:border-red-500 focus-within:outline-red-500"
            placeholder="আপনার নতুন পাসোয়ার্ড"
          />

          <button
            type="submit"
            className="btn btn-neutral bg-red-600 border-none my-4 font-bold"
          >
            রেজিস্টার
          </button>
          <p className="text-center">
            একাউন্ট আছে ?{" "}
            <Link className="text-red-600" href={"/signin"}>
              সাইন-ইন
            </Link>
          </p>
        </fieldset>
      </form>
      <div className="text-center">
        <p className="text-center my-2">অথবা,</p>
        <div className="flex gap-2 items-center justify-center">
          <button onClick={handleGoogleSignIn} className="btn bg-red-100">
            গুগল দিয়ে সাইন ইন করুন
          </button>{" "}
          <button onClick={handleGithubSignIn} className="btn bg-red-100">
            গিটহাব দিয়ে সাইন ইন করুন
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
