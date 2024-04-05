import type { MDXComponents } from "mdx/types";
import { A as a } from "./components/mdx/a";
import { H1 as h1 } from "./components/mdx/h1";
import { H2 as h2 } from "./components/mdx/h2";
import { HR as hr } from "./components/mdx/hr";
import { Image } from "./components/mdx/image";
import { LI as li } from "./components/mdx/li";
import { P as p } from "./components/mdx/p";
import { UL as ul } from "./components/mdx/ul";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a,
    h1,
    h2,
    p,
    ul,
    li,
    hr,
    img: Image,
    Image,
  };
}
