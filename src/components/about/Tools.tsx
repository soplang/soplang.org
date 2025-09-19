import { Activity, Code, Globe, Terminal } from "lucide-react";
import Card from "../shared/Card";

const tools = [
  {
    title: "CLI Tool (sop)",
    description: "For running code, managing projects, and package management",
    icon: (
      <Terminal className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-green/40" />
    ),
  },
  {
    title: "VS Code Extension",
    description: "Syntax highlighting, inline docs, and code execution",
    icon: (
      <Code className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-green/40" />
    ),
  },
  {
    title: "REPL (Interactive)",
    description: "Terminal-based environment with history and highlighting",
    icon: (
      <Activity className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-green/40" />
    ),
  },
  {
    title: "SopScript (Browser Runtime)",
    description: "For online execution and learning demos",
    icon: (
      <Globe className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-green/40" />
    ),
  },
];

export default function Tools() {
  return <Card cards={tools} />;
}
