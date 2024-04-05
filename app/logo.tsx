"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-md whitespace-nowrap font-bold md:text-lg">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">Ryan Quigley</span>
      ) : (
        <Link
          href="/"
          className="-ml-2 rounded-sm px-2 py-1 transition-[background-color] hover:bg-gray-50 active:bg-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:active:bg-gray-400"
        >
          Ryan Quigley
        </Link>
      )}
    </span>
  );
}
