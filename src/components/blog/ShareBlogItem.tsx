import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

interface Props {
  title: string;
  hashtags: string;
}
export default function ShareBlogItem({ title, hashtags }: Props) {
  return (
    <div className="flex items-center gap-[6px]">
      <strong className="me-2.5">Share this article:</strong>
      <FacebookShareButton
        hashtag={hashtags}
        title={title}
        url={window.location.href}
      >
        <FacebookIcon className="size-[30px] rounded-full" />
      </FacebookShareButton>
      <TwitterShareButton title={title} url={window.location.href}>
        <TwitterIcon className="size-[30px] rounded-full" />
      </TwitterShareButton>
      <LinkedinShareButton title={title} url={window.location.href}>
        <LinkedinIcon className="size-[30px] rounded-full" />
      </LinkedinShareButton>
    </div>
  );
}
