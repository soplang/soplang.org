import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { ReactNode, useRef } from "react";
import { Button } from "../ui/moving-border";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title?: string;
  description: string;
  children?: ReactNode;
}
export default function MovingBorderComponent({
  title,
  description,
  children,
}: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useGSAP(function () {
    if (!elementRef.current) return;

    // hide element first, with y:50 and sacle of 80%
    gsap.set(elementRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8,
    });

    // animate to y:0 and when top of element is 80% from top, means
    // 20% was in already.
    gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        end: "top bottom",
        snap: 1.2,
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      scale: 1,
      y: 0,
    });
  });

  return (
    <Button
      ref={elementRef}
      borderRadius="1.75rem"
      className="w-full h-fit px-4 py-3 flex flex-col items-center justify-center text-black dark:text-white border border-black/10 rounded-[10px] pb-6 dark:border-white/10 bg-white dark:bg-background "
    >
      {title && <h2 className="font-bold "> {title}</h2>}
      <p className="italic opacity-80 text-center ">{description}</p>
      <div className="flex gap-4 mt-4">{children}</div>
    </Button>
  );
}
