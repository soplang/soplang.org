import { ReactNode } from "react";
import { DownloadButton } from "../shared/Buttons";
import { LinuxOS, MacOS, WindowOS } from "../shared/SVGLinks";

const linuxOSInstructions = [
  {
    code: "sudo apt-get install soplang",
    text: " For Debian/Ubuntu:",
  },
  {
    code: "sudo dnf install soplang",
    text: "For Fedora:",
  },
  {
    code: "sudo pacman -S soplang",
    text: "For Arch Linux:",
  },
  {
    alternative: "Alternatively, download the tarball and extract it",
  },
  {
    code: "./configure && make && sudo make install",
    text: "Run ",
  },
  {
    code: "soplang --version",
    text: "Verify installation with",
  },
];
const windowOSInstructions = [
  {
    text: "Download the Windows installer (.msi file)",
  },
  {
    text: "Run the installer and follow the on-screen instructions",
  },
  {
    text: "Open Command Prompt or PowerShell and type 'soplang --version' to verify",
  },
];
const macOSInstructions = [
  {
    text: "Download the macOS installer (.pkg file)",
  },
  {
    text: "Open the installer package and follow the installation wizard",
  },
  {
    alternative: " Alternatively, use Homebrew:",
  },
  {
    text: "Like this",
    code: "brew install soplang",
  },
  {
    text: "Run this on terminal",
    code: "soplang --version",
  },
];

export default function Platforms() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
      <PlatformItem
        oSName={"Linux Operating System"}
        osInfo={"Version 2.0 (23.8 MB)"}
        instructions={linuxOSInstructions}
        downloadButtonText={"Download For linux"}
        icon={<LinuxOS />}
      />

      <PlatformItem
        oSName={"Windows Operating System"}
        osInfo={"Version 2.0 (28.6 MB)"}
        instructions={windowOSInstructions}
        downloadButtonText={"Download For Window"}
        icon={<WindowOS />}
      />

      <PlatformItem
        oSName={"MacOS Operating System"}
        osInfo={"Version 2.0 (26.2 MB)"}
        instructions={macOSInstructions}
        downloadButtonText={"Download For MacOs"}
        icon={<MacOS />}
      />
    </section>
  );
}

interface Props {
  oSName: string;
  osInfo: string;
  instructions: Array<{
    text?: string;
    code?: string;
    alternative?: string;
  }>;
  downloadButtonText: string;
  icon: ReactNode;
}

function PlatformItem({
  oSName,
  osInfo,
  instructions,
  downloadButtonText,
  icon,
}: Props) {
  return (
    <div className="bg-white flex-[1] shadom-1x dark:bg-background rounded-[8px] py-[.9rem] px-[.3rem] flex flex-col min-w-[400px] max-w-[500px] ">
      <div className="text-primary items-center flex-col justify-center flex  pb-3 mx-auto w-fit gap-3  p-3 bg-primary/10 rounded-full">
        {icon}
        <h3 className="font-bold text-center text-2xl text-black dark:text-white">
          {oSName}
        </h3>
      </div>

      <p className="italic font-normal">{osInfo}</p>

      <h4>Installation Instructions:</h4>
      <ol className="w-full !px-[10px]  flex flex-col gap-[20px] ">
        {instructions.map(({ code, text, alternative }, index) => {
          if (alternative) {
            return <li key={index}>{alternative}</li>;
          }
          return (
            <li key={index} className="flex text-[.8rem] items-center gap-1">
              <span className=" grid place-content-center px-1 py-1  bg-soft-blue text-white size-[18px] rounded-full">
                {index + 1}
              </span>
              {text}
              {code && <code className="!py-1 !px-1">{code}</code>}
            </li>
          );
        })}
        {}
      </ol>
      <div className="w-fit mx-auto mt-auto h-fit">
        <DownloadButton text={downloadButtonText} href="" />
      </div>
    </div>
  );
}
