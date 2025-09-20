import Link from "@docusaurus/Link";
import { SOPLANG_COMMUNITY_LINKS } from "@site/lib";
import { SlideBackroundButton } from "../shared/Buttons";
import MovingBorderComponent from "../shared/MovingBorderComponent";

export default function LearnMore() {
  return (
    <MovingBorderComponent description="Soplang is open-source and community-driven. You can contribute to its development, documentation, or help grow the community. Contribute to Soplang">
      <>
        <Link href={SOPLANG_COMMUNITY_LINKS.Contribute_link}>
          <SlideBackroundButton
            className="text-white"
            text="Contribute to Soplang"
          />
        </Link>

        <Link href={SOPLANG_COMMUNITY_LINKS.discord}>
          <SlideBackroundButton
            text="Join Our Community"
            className="bg-transparent border text-black dark:text-white border-black/20 dark:border-white/20"
          />
        </Link>
        <Link href={"/docs"}>
          <SlideBackroundButton
            text="Head to Docs"
            className="bg-transparent border text-black dark:text-white border-black/20 dark:border-white/20"
          />
        </Link>
      </>
    </MovingBorderComponent>
  );
}
