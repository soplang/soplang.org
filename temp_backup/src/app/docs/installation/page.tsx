import Link from "next/link";

export const metadata = {
  title: 'Soplang Installation Guide - Documentation',
  description: 'Learn how to install Soplang on Windows, macOS, and Linux. Step-by-step instructions for getting started with Soplang.',
};

export default function InstallationPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Installing Soplang</h1>
      
      <p>
        This guide will walk you through the process of installing Soplang on
        your system. Soplang is available for Windows, macOS, and Linux.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-6">
        <h3 className="text-primary dark:text-blue-400 mt-0">Prerequisites</h3>
        <p className="mb-0">
          Before installing Soplang, ensure your system meets the following
          requirements:
        </p>
        <ul className="mb-0">
          <li>Windows 10 or later, macOS 10.15+, or a modern Linux distribution</li>
          <li>4GB RAM (minimum)</li>
          <li>500MB of free disk space</li>
          <li>Internet connection for package installation</li>
        </ul>
      </div>

      <h2 id="windows">Windows Installation</h2>

      <h3>Using the Installer (Recommended)</h3>

      <ol>
        <li>
          Download the latest Windows installer (.msi file) from the{" "}
          <Link href="/downloads" className="text-primary hover:underline">
            downloads page
          </Link>
          .
        </li>
        <li>Run the installer by double-clicking the downloaded file.</li>
        <li>
          Follow the installation wizard instructions. We recommend keeping all
          default options.
        </li>
        <li>
          The installer will automatically add Soplang to your PATH environment
          variable.
        </li>
        <li>
          To verify the installation, open Command Prompt or PowerShell and run:
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>soplang --version</code>
          </pre>
        </li>
      </ol>

      <h3>Using Chocolatey</h3>

      <p>
        If you use Chocolatey package manager, you can install Soplang with the
        following command:
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>choco install soplang</code>
      </pre>

      <h2 id="macos">macOS Installation</h2>

      <h3>Using the Installer Package</h3>

      <ol>
        <li>
          Download the latest macOS installer (.pkg file) from the{" "}
          <Link href="/downloads" className="text-primary hover:underline">
            downloads page
          </Link>
          .
        </li>
        <li>Open the downloaded .pkg file.</li>
        <li>Follow the installation wizard instructions.</li>
        <li>
          To verify the installation, open Terminal and run:
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>soplang --version</code>
          </pre>
        </li>
      </ol>

      <h3>Using Homebrew</h3>

      <p>
        If you use Homebrew package manager, you can install Soplang with the
        following command:
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>brew install soplang</code>
      </pre>

      <h2 id="linux">Linux Installation</h2>

      <h3>Debian/Ubuntu</h3>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>sudo apt-get update
sudo apt-get install soplang</code>
      </pre>

      <h3>Fedora</h3>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>sudo dnf install soplang</code>
      </pre>

      <h3>Arch Linux</h3>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>sudo pacman -S soplang</code>
      </pre>

      <h3>Using the Tarball</h3>

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
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>tar -xzf soplang-1.2.0-linux-x86_64.tar.gz</code>
          </pre>
        </li>
        <li>
          Navigate to the extracted directory:
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>cd soplang-1.2.0</code>
          </pre>
        </li>
        <li>
          Run the installation script:
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>./configure
make
sudo make install</code>
          </pre>
        </li>
        <li>
          To verify the installation, run:
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>soplang --version</code>
          </pre>
        </li>
      </ol>

      <h2 id="docker">Using Docker</h2>

      <p>
        Soplang is also available as a Docker image. You can pull the latest
        image with:
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>docker pull soplang/soplang:latest</code>
      </pre>

      <p>To run Soplang in a Docker container:</p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>docker run -it --rm soplang/soplang</code>
      </pre>

      <h2 id="virtual-environments">Virtual Environments</h2>

      <p>
        It's recommended to use virtual environments for Soplang projects to
        manage dependencies and isolate your project environment.
      </p>

      <h3>Creating a Virtual Environment</h3>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>soplang -m venv myenv</code>
      </pre>

      <h3>Activating the Virtual Environment</h3>

      <p>On Windows:</p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>myenv\Scripts\activate</code>
      </pre>

      <p>On macOS and Linux:</p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>source myenv/bin/activate</code>
      </pre>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <h3>Common Issues</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-bold">Command not found error</h4>
          <p>
            If you get a "command not found" error when trying to run Soplang,
            ensure that the installation directory is in your PATH environment
            variable.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Permission denied error</h4>
          <p>
            On Linux and macOS, you might need to add execute permissions to the
            Soplang binary:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code>chmod +x /path/to/soplang</code>
          </pre>
        </div>

        <div>
          <h4 className="font-bold">Dependency issues</h4>
          <p>
            If you encounter dependency issues, try reinstalling Soplang or
            check the{" "}
            <Link href="/community" className="text-primary hover:underline">
              community forums
            </Link>{" "}
            for help.
          </p>
        </div>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <p>
        Now that you have Soplang installed, you can start learning the basics
        and writing your first program:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link
          href="/docs/quick-start"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Quick Start</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Write your first Soplang program and learn the basics.
          </p>
        </Link>
        <Link
          href="/docs/syntax-basics"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Syntax Basics</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Learn the fundamental syntax of Soplang.
          </p>
        </Link>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <Link
            href="/docs"
            className="inline-flex items-center text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous: Introduction
          </Link>
          <Link
            href="/docs/quick-start"
            className="inline-flex items-center text-primary hover:underline"
          >
            Next: Quick Start
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 