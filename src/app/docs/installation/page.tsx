import Link from "next/link";
import { FaDocker } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import CodeSnippet from "@/components/CodeSnippet";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Installation Guide - Documentation",
  description:
    "Download Soplang and run it via Docker. A simple, universal setup guide.",
};

export default function InstallationPage() {
  return (
    <div className="px-4 py-8 prose prose-lg lg:py-4 dark:prose-invert max-w-none sm:px-6 lg:px-4 sm:py-12">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-4xl text-primary">
        Installing Soplang
      </h1>

      <p className="mb-8 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        This guide shows two easy ways to get started with <strong>Soplang</strong>: 
        downloading a prebuilt release or using the official Docker image.
      </p>

      {/* General Download (All Platforms) */}
      <h2 className="mt-12 mb-4 text-2xl font-bold sm:text-3xl">General Download (All Platforms)</h2>
      <ol className="space-y-3">
        <li>
          <strong>Download:</strong> Grab the latest release for your platform from the{" "}
          <Link href="/downloads" className="text-primary hover:underline">
            downloads page
          </Link>
          .
        </li>
        <li>
          <strong>Extract / Install:</strong> Unzip or install the package as provided by the release.
          If it’s a single binary, place it somewhere in your PATH (e.g., <code>~/bin</code> on UNIX-like systems).
        </li>
        <li>
          <strong>(Optional) Add to PATH:</strong> Ensure the <code>soplang</code> binary is available on your PATH.
          For example (bash/zsh):
          <CodeSnippet code={`echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc`} />
        </li>
        <li>
          <strong>Verify:</strong> Open your terminal and run:
          <CodeSnippet code="soplang --version" />
        </li>
      </ol>

      <h3 className="mt-10 mb-3 text-xl font-semibold">Run Your First Program</h3>
      <CodeSnippet
        title="hello.sop"
        code={`qor("Hello, World!")`}
      />
      <p className="mt-3">Execute the file:</p>
      <CodeSnippet code="soplang hello.sop" />

      {/* Docker */}
      <h2 className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <FaDocker className="mr-3 text-primary dark:text-blue-400" /> Use Docker (No Local Install)
      </h2>

      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        If you already have Docker, you can run Soplang without installing anything else.
      </p>

      <h3 className="mb-3 text-xl font-semibold">1) Pull the Image</h3>
      <CodeSnippet code="docker pull soplang/soplang:latest" />

      <h3 className="mt-6 mb-3 text-xl font-semibold">2) Run an Interactive Session</h3>
      <CodeSnippet code="docker run -it --rm soplang/soplang" title="docker" />

      <h3 className="mt-6 mb-3 text-xl font-semibold">3) Run a Local File</h3>
      <p className="text-base text-gray-700 sm:text-lg dark:text-gray-300">
        Mount your project directory and execute a file:
      </p>
      <CodeSnippet
        code={`# from your project directory
docker run -it --rm -v "$PWD":/app -w /app soplang/soplang soplang hello.sop`}
      />

      {/* Checksums & Offline */}
      <h2 className="mt-12 mb-4 text-2xl font-bold sm:text-3xl">Checksums & Offline Install</h2>
      <ul className="space-y-2">
        <li>
          <strong>Verify downloads:</strong> Compare the file’s checksum with the one on the{" "}
          <Link href="/downloads" className="text-primary hover:underline">
            downloads page
          </Link>
          .
        </li>
        <li>
          <strong>Offline:</strong> Keep the extracted folder/binary and run directly—no internet required after download.
        </li>
      </ul>

      {/* Troubleshooting */}
      <h2 className="flex items-center mt-12 mb-6 text-2xl font-bold sm:text-3xl">
        <VscTerminalBash className="mr-3 text-primary dark:text-blue-400" /> Troubleshooting
      </h2>

      <div className="mt-6 space-y-6">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            “command not found”
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Make sure <code>soplang</code> is on your PATH, or run it via Docker as shown above.
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            Permission denied (UNIX-like)
          </h4>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            If you downloaded a binary, grant execute permissions:
          </p>
          <CodeSnippet code="chmod +x /path/to/soplang" title="bash" />
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h4 className="mb-2 text-lg font-bold text-primary dark:text-blue-400">
            Still stuck?
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Check the <Link href="/downloads" className="text-primary hover:underline">downloads</Link> page notes or ask in{" "}
            <Link href="/community" className="text-primary hover:underline">community support</Link>.
          </p>
        </div>
      </div>

      <DocNavigation
        prevPage={{
          href: "/docs",
          title: "Introduction",
          description: "What is Soplang?",
        }}
        nextPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Learn the core syntax of Soplang",
        }}
      />
    </div>
  );
}
