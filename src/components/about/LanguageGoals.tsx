import { CardType } from "@site/lib/types";
import { Accessibility, CheckCircle, Globe, GraduationCap } from "lucide-react";
import Card from "../shared/Card";
const languageGoals: CardType[] = [
  {
    title: "Simplicity",
    shorterDesc:
      "Clean, easy-to-read syntax designed to make programming concepts clear and approachable.",
    icon: (
      <CheckCircle className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "Education",
    shorterDesc:
      "Built with learners in mind, making programming accessible to students and new developers.",
    icon: (
      <GraduationCap className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "Localization",
    shorterDesc:
      "Native Somali throughout, embracing Somali language and cultural context in programming.",
    icon: (
      <Globe className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
  {
    title: "Accessibility",
    shorterDesc:
      "Removes English-language barriers, opening programming to a wider audience of Somali speakers.",
    icon: (
      <Accessibility className="scale-[2] group-hover:scale-[2.1] duration-300 will-change-transform transition-transform ease-out text-soft-blue" />
    ),
  },
];

export default function LanguageGoals() {
  return <Card cards={languageGoals} shorerOrLongerDesc />;
}
