import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="mb-5 flex items-center md:mb-10">
      <Logo />
      <nav className="flex grow items-center justify-end gap-1 text-sm md:gap-3">
        <Link
          href="/about"
          className="inline-flex rounded-md px-3 py-1 transition-[background-color] hover:bg-gray-50 active:bg-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:active:bg-gray-400"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
