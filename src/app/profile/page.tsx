"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import { useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = (
    session as unknown as {
      user?: {
        image?: string | null;
        name?: string | null;
        email?: string | null;
        emailVerified?: boolean | null;
      };
    } | null
  )?.user;

  const handleSignout = async () => {
    await authClient.signOut({});
    router.push("/signin");
  };
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      password: string;
    };
    await authClient.updateUser({ ...newUserData });

    setShow(false);
  };

  const [show, setShow] = useState(false);
  const handleShowEditForm = () => {
    setShow(!show);
  };
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-0">
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-5 md:col-span-3">
          {/* Profile Picture */}
          <Link href={"/profile"} className="sm:col-span-1">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>

          {/* User Information */}
          <div className="sm:col-span-2">
            <h2 className="text-xl">
              <span className="text-xl font-bold">{user?.name}</span>
            </h2>

            <h2 className="font-bold">{user?.email}</h2>

            <p className="font-black">
              {user?.emailVerified ? (
                <small className="font-semibold text-green-500">
                  Verified ✓
                </small>
              ) : (
                <small className="font-semibold text-red-500">
                  Not Verified
                </small>
              )}
            </p>
          </div>

          {/* Edit Button / Edit Form */}
          <div className="sm:col-span-2">
            {!show && (
              <button
                onClick={handleShowEditForm}
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base"
              >
                প্রোফাইল এডিট করুন
              </button>
            )}

            {show && (
              <form onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset w-full rounded-box p-1">
                  <label className="label">নাম</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full focus-within:border-red-500 focus-within:outline-red-500"
                    placeholder="আপনার পরিবর্তীত নাম"
                  />

                  <label className="label">ছবি</label>
                  <input
                    type="text"
                    name="image"
                    className="input w-full focus-within:border-red-500 focus-within:outline-red-500"
                    placeholder="আপনার নতুন ছবির ইউ আর এল"
                  />

                  <label className="label">পাসওয়ার্ড</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full focus-within:border-red-500 focus-within:outline-red-500"
                    placeholder="আপনার নতুন পাসোয়ার্ড"
                  />

                  <div className="my-4 flex gap-2">
                    <button
                      type="submit"
                      className="rounded-md border-none bg-red-600 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base"
                    >
                      আপডেট প্রোফাইল
                    </button>

                    <button
                      type="button"
                      onClick={() => setShow(false)}
                      className="rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100 sm:px-4 sm:text-base"
                    >
                      বাতিল
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </div>

        {/* Logout Button */}
        <div className="md:col-span-1 md:text-end">
          <button
            onClick={handleSignout}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base"
          >
            লগ আউট
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
