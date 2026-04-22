"use client";

import Dash from "@/component/Dash";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const DashboardPage = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <p className="text-center my-10">Loading</p>;
  }

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col gap-5">
        <h2 className="text-center text-2xl">You are not signed in</h2>
        <Link
          className="py-2 px-5 bg-purple-500 font-bold rounded-4xl"
          href={"/auth/signin"}
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Dash></Dash>
    </div>
  );
};

export default DashboardPage;
