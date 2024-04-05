import { A } from "@/components/mdx/a";

export function Footer() {
  return (
    <footer className="mt-3 flex p-6 pb-6 pt-3 text-center text-xs text-gray-500 dark:text-gray-400">
      <div className="grow text-left">
        Ryan Quigley (<A href="https://twitter.com/ryanquigley">twitter</A>,{" "}
        <A href="https://www.linkedin.com/in/drquigley/">linkedin</A>,{" "}
        <A href="https://instagram.com/rquigley">instagram</A>)
      </div>
      <div>
        <A href="https://github.com/rquigley/quigleyr.com">Source</A>
      </div>
    </footer>
  );
}
