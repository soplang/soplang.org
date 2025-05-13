import Link from "next/link";
import { FaWindows, FaApple, FaLinux, FaDocker } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { VscTerminalBash } from "react-icons/vsc";
import CodeSnippet from "@/components/CodeSnippet";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Installation Guide - Documentation",
  description:
    "Learn how to install Soplang on Windows, macOS, and Linux. Step-by-step instructions for getting started with Soplang.",
};

export default function InstallationPage() {
  return (
    <div className="px-4 py-8 prose prose-lg dark:prose-invert max-w-none sm:px-6 lg:px-8 sm:py-12">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">Installing Soplang</h1>

      <p className="mb-8 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        This guide will walk you through the process of installing{" "}
        <span className="font-bold">Soplang</span> on your system.{" "}
        <span className="font-bold">Soplang</span> is available for Windows, macOS, and Linux.
      </p>

      <div className="p-4 my-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 sm:p-6">
        <h3 className="mt-0 mb-4 text-xl sm:text-2xl text-primary dark:text-blue-400">
          Prerequisites
        </h3>
        <p className="mb-4 text-base text-gray-700 sm:text-lg dark:text-gray-300">
          Before installing <span className="font-bold">Soplang</span>, ensure your system meets the
          following requirements:
        </p>
        <ul className="mb-0 space-y-2 text-base text-gray-700 sm:text-lg dark:text-gray-300">
          <li>Windows 10 or later, macOS 10.15+, or a modern Linux distribution</li>
          <li>4GB RAM (minimum)</li>
          <li>500MB of free disk space</li>
          {/* <li>Internet connection for package installation</li> */}
        </ul>
      </div>

      <h2 id="windows" className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <FaWindows className="mr-3 text-primary dark:text-blue-400" /> Windows Installation
      </h2>

      <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Using the Installer (Recommended)</h3>

      <ol className="pl-0 space-y-2 list-none">
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            1
          </span>
          <div>
            Download the latest Windows installer (.msi file) from the{" "}
            <Link href="/downloads" className="font-medium text-primary hover:underline">
              downloads page
            </Link>
            .
          </div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            2
          </span>
          <div>Run the installer by double-clicking the downloaded file.</div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            3
          </span>
          <div>
            Follow the installation wizard instructions. We recommend keeping all default options.
          </div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            4
          </span>
          <div>
            The installer will automatically add <span className="font-bold">Soplang</span> to your
            PATH environment variable.
          </div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            5
          </span>
          <div>
            To verify the installation, open Command Prompt or PowerShell and run:
            <CodeSnippet code="soplang --version" />
          </div>
        </li>
      </ol>

      <h3 className="mt-8 mb-4 text-xl font-semibold sm:text-2xl">Using Chocolatey</h3>

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        If you use Chocolatey package manager, you can install{" "}
        <span className="font-bold">Soplang</span> with the following command:
      </p>

      <CodeSnippet code="choco install soplang" className="mt-5" />

      <h2 id="macos" className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <FaApple className="mr-3 text-primary dark:text-blue-400" /> macOS Installation
      </h2>

      <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Using the Installer Package</h3>

      <ol className="pl-0 space-y-2 list-none">
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            1
          </span>
          <div>
            Download the latest macOS installer (.pkg file) from the{" "}
            <Link href="/downloads" className="font-medium text-primary hover:underline">
              downloads page
            </Link>
            .
          </div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            2
          </span>
          <div>Open the downloaded .pkg file.</div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            3
          </span>
          <div>Follow the installation wizard instructions.</div>
        </li>
        <li className="flex items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 font-bold mr-4 flex-shrink-0 mt-0.5">
            4
          </span>
          <div>
            To verify the installation, open Terminal and run:
            <CodeSnippet code="soplang --version" />
          </div>
        </li>
      </ol>

      <h3 className="mt-8 mb-4 text-xl font-semibold sm:text-2xl">Using Homebrew</h3>

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        If you use Homebrew package manager, you can install{" "}
        <span className="font-bold">Soplang</span> with the following command:
      </p>

      <CodeSnippet code="brew install soplang" />

      <h2 id="linux" className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <FaLinux className="mr-3 text-primary dark:text-blue-400" /> Linux Installation
      </h2>

      <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Debian/Ubuntu</h3>

      <CodeSnippet
        code="sudo apt-get update
sudo apt-get install soplang"
      />

      <h3 className="mt-6 mb-4 text-xl font-semibold sm:text-2xl">Fedora</h3>

      <CodeSnippet code="sudo dnf install soplang" />

      <h3 className="mt-6 mb-4 text-xl font-semibold sm:text-2xl">Arch Linux</h3>

      <CodeSnippet code="sudo pacman -S soplang" />

      <h3 className="mt-8 mb-4 text-xl font-semibold sm:text-2xl">Using the Tarball</h3>

      <ol>
        <li>
          Download the latest Linux tarball (.tar.gz file) from the{" "}
          <Link href="/downloads" className="text-primary hover:underline">
            downloads page
          </Link>
          .
        </li>
        <li>
          Extract the tarball:
          <CodeSnippet code="tar -xzf soplang-1.2.0-linux-x86_64.tar.gz" />
        </li>
        <li>
          Navigate to the extracted directory:
          <CodeSnippet code="cd soplang-1.2.0" />
        </li>
        <li>
          Run the installation script:
          <CodeSnippet
            code="./configure
make
sudo make install"
          />
        </li>
        <li>
          To verify the installation, run:
          <CodeSnippet code="soplang --version" />
        </li>
      </ol>

      <h2 id="docker" className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <FaDocker className="mr-3 text-primary dark:text-blue-400" /> Using Docker
      </h2>

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        <span className="font-bold">Soplang</span> is also available as a Docker image. You can pull
        the latest image with:
      </p>

      <CodeSnippet code="docker pull soplang/soplang:latest" />

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        To run <span className="font-bold">Soplang</span> in a Docker container:
      </p>

      <CodeSnippet code="docker run -it --rm soplang/soplang" title="docker" />

      <h2
        id="virtual-environments"
        className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl"
      >
        <BiPackage className="mr-3 text-primary dark:text-blue-400" /> Virtual Environments
      </h2>

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        It's recommended to use virtual environments for <span className="font-bold">Soplang</span>{" "}
        projects to manage dependencies and isolate your project environment.
      </p>

      <h3 className="mt-6 mb-4 text-xl font-semibold sm:text-2xl">
        Creating a Virtual Environment
      </h3>

      <CodeSnippet code="soplang -m venv myenv" title="terminal" />

      <h3 className="mt-6 mb-4 text-xl font-semibold sm:text-2xl">
        Activating the Virtual Environment
      </h3>

      <p className="text-base font-medium text-gray-700 sm:text-lg dark:text-gray-300">
        On Windows:
      </p>

      <CodeSnippet code="myenv\Scripts\activate" title="cmd.exe" />

      <p className="text-base font-medium text-gray-700 sm:text-lg dark:text-gray-300">
        On macOS and Linux:
      </p>

      <CodeSnippet code="source myenv/bin/activate" title="bash" />

      <h2
        id="troubleshooting"
        className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl"
      >
        <VscTerminalBash className="mr-3 text-primary dark:text-blue-400" /> Troubleshooting
      </h2>

      <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Common Issues</h3>

      <div className="mt-6 space-y-6">
        <div className="p-4 my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            Command not found error
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            If you get a "command not found" error when trying to run{" "}
            <span className="font-bold">Soplang</span>, ensure that the installation directory is in
            your PATH environment variable.
          </p>
        </div>

        <div className="p-4 my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            Permission denied error
          </h4>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            On Linux and macOS, you might need to add execute permissions to the
            <span className="font-bold">Soplang</span> binary:
          </p>
          <CodeSnippet code="chmod +x /path/to/soplang" title="bash" />
        </div>

        <div className="p-4 my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            Dependency issues
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            If you encounter dependency issues, try reinstalling{" "}
            <span className="font-bold">Soplang</span> or check the{" "}
            <Link href="/community" className="text-primary hover:underline">
              community forums
            </Link>{" "}
            for help.
          </p>
        </div>
      </div>

      <DocNavigation
        prevPage={{
          href: "/docs",
          title: "Introduction",
          description: "Return to the Soplang introduction",
        }}
        nextPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the fundamental syntax of Soplang",
        }}
      />
    </div>
  );
}
