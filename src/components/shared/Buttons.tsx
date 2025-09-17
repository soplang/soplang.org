import Link from "@docusaurus/Link";

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
