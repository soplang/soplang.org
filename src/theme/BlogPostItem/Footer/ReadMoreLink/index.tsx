import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/BlogPostItem/Footer/ReadMoreLink";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

function ReadMoreLabel() {
  return (
    <button className="border-2 border-black/20 dark:border-white/10 px-3 py-2 rounded-full group transition-all cursor-pointer dark:hover:border-white/20 ">
      Read more
      <ArrowRight className="group-hover:translate-x-2.5 duration-300 group-hover:scale-[1.1]  ease-out  " />
    </button>
  );
}

export default function BlogPostItemFooterReadMoreLink(
  props: Props
): ReactNode {
  const { blogPostTitle, ...linkProps } = props;
  return (
    <Link
      aria-label={translate(
        {
          message: "Read more about {title}",
          id: "theme.blog.post.readMoreLabel",
          description:
            "The ARIA label for the link to full blog posts from excerpts",
        },
        { title: blogPostTitle }
      )}
      {...linkProps}
    >
      <ReadMoreLabel />
    </Link>
  );
}
