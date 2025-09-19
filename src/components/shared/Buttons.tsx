import Link from "@docusaurus/Link";
import { cn } from "@site/lib/util";

interface Props {
  href: string;
  text: string;
}
export function DownloadButton({ href, text }: Props) {
  return (
    <Link
      href={href}
      className="button button--primary my-[1rem] !bg-green !text-white decoration-0 inline-block rounded-[8px] hover:!bg-green/90 transition-colors duration-300 ease-out   text-[1.1rem] p-[0.75rem_2rem]"
    >
      {text}
    </Link>
  );
}

export function SlideBackroundButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "relative overflow-hidden px-6 py-3 font-semibold text-white bg-gradient-to-b  from-green-700 via-green-800 to-green-600 rounded-lg transition-all cursor-pointer duration-500 hover:scale-105 group",
        className
      )}
    >
      <span className="absolute inset-0 w-0 bg-footer transition-all duration-300 group-hover:w-full " />
      <span className="relative z-10  group-hover:text-white">{text}</span>
    </button>
  );
}
