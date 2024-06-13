import { Playfair_Display } from "next/font/google";

// import { Posts } from "./posts";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <p
        className={`pt-48 text-xl leading-snug md:text-4xl md:leading-relaxed ${playfair.className}`}
      >
        I&rsquo;m Ryan, an engineering leader and entrepreneur.
      </p>
      <p className="mt-8">
        Over the past two decades I&rsquo;ve helped build and scale four
        companies, two of them to acquisition. I&rsquo;m currently on the search
        for something new.
      </p>

      {/* <div className="pt-20">
        <Posts posts={[]} />
      </div> */}
    </>
  );
}
