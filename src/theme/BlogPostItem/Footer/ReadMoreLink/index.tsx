import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostItem/Footer/ReadMoreLink";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

function ReadMoreLabel() {
  return (
    <button className="border-2 border-black/20 dark:border-white/10 px-3 py-2 rounded-full group min-w-[150px] transition-all cursor-pointer dark:hover:border-white/20 flex gap-[5px] ">
      <span> Read more</span>
      <ArrowRight className="group-hover:translate-x-2.5 duration-300 group-hover:scale-[1.1]  ease-out  " />
    </button>
  );
}

export default function BlogPostItemFooterReadMoreLink(
  props: Props
): ReactNode {
  const { blogPostTitle, ...linkProps } = props;
  return (
    <Link {...linkProps}>
      <ReadMoreLabel />
    </Link>
  );
}
