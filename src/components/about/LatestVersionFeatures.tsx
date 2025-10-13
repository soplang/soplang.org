import { ChevronRight } from "lucide-react";

const features = [
  {
    header: "Dual Typing",
    description: "door for dynamic, tiro, qoraal, etc. for static",
  },
  {
    header: "Object-Oriented Programming:",
    description: "with fasalka, ka_dhaxal, cusub, nafta",
  },
  {
    header: "Control Flow:",
    description: "haddii, haddii_kale, haddii_kalena, loops (ku_celi, inta_ay)",
  },
  {
    header: "Error Handling:",
    description: "isku_day iyo qabasho ciladaha dhaca xilliga falka coding-ka",
  },
  {
    header: "Package Manager:",
    description: "Coming soon via the sop CLI",
  },
  {
    header: "Standard Library:",
    description: "Includes Math, File System, Network, and Date/Time",
  },
  {
    header: "Interpreter:",
    description: "Python-based (compiler planned for future release)",
  },
];
export default function latestVersionFeatures() {
  return (
    <ul className="w-full flex flex-col gap-[20px] border border-black/5 dark:border-white/5 rounded-[10px] py-3 px-2">
      {features.map(({ header, description }, index) => {
        return (
          <li
            key={index}
            className="flex text-sm md:text-[1.4rem] items-center gap-[6px]"
          >
            <ChevronRight className="scale-[.9] text-soft-blue " />
            <strong className="font-bold">{header}</strong>
            <i className="text-xs md:text-[1.1rem]">{description}</i>
          </li>
        );
      })}
    </ul>
  );
}
