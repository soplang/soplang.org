import { CONTRIBUTORIS } from "@site/lib";
import { GithubIcon } from "../shared/SVGLinks";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function Contributors() {
  return (
    <div className="w-full flex h-full flex-col gap-[20px] border border-black/10 dark:border-white/10 rounded-[10px] px-2.5 py-3">
      <div className="w-full items-center justify-center flex ">
        <AnimatedTooltip items={CONTRIBUTORIS} />
      </div>
      <p className="opacity-80 italic text-center">
        Everyone is welcome to contribute!
      </p>
      <div className="w-fit mx-auto">
        <GithubIcon width={50} height={50} />
      </div>
    </div>
  );
}
