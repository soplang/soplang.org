import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import type { Props } from "@theme/BlogPostItem/Header/Title";
import clsx from "clsx";
import { type ReactNode } from "react";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderTitle({
  className,
}: Props): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";
  return (
    <TitleHeading className={clsx(styles.title, className)}>
      {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
    </TitleHeading>
  );
}
