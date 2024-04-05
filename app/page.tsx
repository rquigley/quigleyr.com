import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div
      className={`pt-48 text-xl leading-snug md:text-4xl md:leading-relaxed ${playfair.className}`}
    >
      Ryan Quigley is a software engineer and entrepreneur. I&rsquo;m passionate
      about scaling ideas into profitable businesses.
    </div>
  );
}
