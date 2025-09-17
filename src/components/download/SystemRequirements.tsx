import { ArrowRight } from "lucide-react";

interface Props {
  operatingSystem: string;
  oSInfo: string;
  ramDescription: string;
  diskDescription: string;
  cpuDescription: string;
}

export default function SystemRequirements() {
  return (
    <div className="flex items-center justify-center md:justify-start flex-wrap  gap-[20px] h-fit">
      <RequirementItem
        operatingSystem={"Linux"}
        oSInfo={"Ubuntu 20.04 or later"}
        ramDescription={"4 GB RAM minimum"}
        diskDescription={"1 GB disk space"}
        cpuDescription={"Intel/AMD 64-bit processor"}
      />

      <RequirementItem
        operatingSystem={"Windows"}
        oSInfo={"Windows 10/11 (64-bit)"}
        ramDescription={"4 GB RAM minimum"}
        diskDescription={"1 GB disk space"}
        cpuDescription={"Intel/AMD processor"}
      />

      <RequirementItem
        operatingSystem={"macOS"}
        oSInfo={"macOS 11.0 (Big Sur) or later"}
        ramDescription={"4 GB RAM minimum"}
        diskDescription={"1 GB disk space"}
        cpuDescription={"Intel or Apple Silicon"}
      />
    </div>
  );
}

function RequirementItem({
  operatingSystem,
  oSInfo,
  ramDescription,
  diskDescription,
  cpuDescription,
}: Props) {
  return (
    <div className="dark:text-white shadom-1x py-[1.5rem] px-[.6rem] text-left flex-[1] grow hover:scale-[1.01] transition-transform duration-300 hover:duration-500 ease-in-out rounded-[10px] min-w-[200px]  bg-white border border-black/10 text-black dark:bg-background h-fit">
      <h2 className="font-black text-center">{operatingSystem} </h2>
      <p className="flex items-start gap-[10px]">
        <ArrowRight className="text-black scale-[.8] dark:text-white" />
        {oSInfo}.
      </p>
      <p className="flex items-start gap-[10px]">
        <ArrowRight className="text-black scale-[.8] dark:text-white" />
        {ramDescription}.
      </p>
      <p className="flex items-start gap-[10px]">
        <ArrowRight className="text-black scale-[.8] dark:text-white" />
        {diskDescription}.
      </p>
      <p className="flex items-start gap-[10px]">
        <ArrowRight className="text-black scale-[.8] dark:text-white" />
        {cpuDescription}.
      </p>
    </div>
  );
}
