import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { SlideBackroundButton } from "../shared/Buttons";
import { Button } from "../ui/moving-border";

gsap.registerPlugin(ScrollTrigger);
export default function GetInvolved() {
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
      <h2 className="font-bold "> Get Involved</h2>
      <p className="italic opacity-80 text-center ">
        Soplang is open-source and community-driven. You can contribute to its
        development, documentation, or help grow the community. Contribute to
        Soplang
      </p>
      <div className="flex gap-4 mt-4">
        <SlideBackroundButton
          className="text-white"
          text="Contribute to Soplang"
        />
        <SlideBackroundButton
          text="Join Our Community"
          className="bg-transparent border text-black dark:text-white border-black/20 dark:border-white/20"
        />
      </div>
    </Button>
  );
}
