import { CardType } from "@site/lib/types";
import { Activity, Code, Globe, Terminal } from "lucide-react";
import Card from "./Card";

const tools: CardType[] = [
  {
    title: "CLI Tool (sop)",
    shorterDesc: "For running code, managing projects, and package management.",
    longerDesc: `Manage packages, run programs, and handle project scaffolding
 This is a level of polish rarely seen in small-language ecosystems — a promising sign of future growth.`,
    icon: (
      <Terminal className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "VS Code Extension",
    shorterDesc: "Syntax highlighting, inline docs, and code execution.",
    longerDesc:
      "Includes syntax highlighting, inline docs, and code suggestions.",
    icon: (
      <Code className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "REPL (Interactive)",
    shorterDesc: "Terminal-based environment with history and highlighting.",
    longerDesc: "Command-line interface with history and syntax coloring.",
    icon: (
      <Activity className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "SopScript (Browser Runtime)",
    shorterDesc: "For online execution and learning demos.",
    longerDesc: `For embedding Soplang in web applications and learning platforms`,
    icon: (
      <Globe className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
];
interface Props {
  shorerOrLongerDesc?: boolean;
}
export default function Tools({ shorerOrLongerDesc }: Props) {
  return <Card shorerOrLongerDesc={shorerOrLongerDesc} cards={tools} />;
}
