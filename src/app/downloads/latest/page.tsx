import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import CodeWindow from "../../../components/CodeWindow";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: 'Download Latest Version of Soplang',
  description: 'Download the latest version of Soplang programming language for your platform.',
};

export default function DownloadLatestPage() {
  const latestVersion = "1.2.0";
  const releaseDate = "June 15, 2023";
  
  const downloadOptions = [
    {
      platform: "Windows",
      architecture: "64-bit",
      fileName: `soplang-${latestVersion}-win64.exe`,
      size: "24.5 MB",
    },
    {
      platform: "Windows",
      architecture: "32-bit",
      fileName: `soplang-${latestVersion}-win32.exe`,
      size: "22.1 MB",
    },
    {
      platform: "macOS",
      architecture: "Intel",
      fileName: `soplang-${latestVersion}-macos-intel.pkg`,
      size: "26.3 MB",
    },
    {
      platform: "macOS",
      architecture: "Apple Silicon",
      fileName: `soplang-${latestVersion}-macos-arm64.pkg`,
      size: "25.8 MB",
    },
    {
      platform: "Linux",
      architecture: "x86_64",
      fileName: `soplang-${latestVersion}-linux-x86_64.tar.gz`,
      size: "18.7 MB",
    },
    {
      platform: "Linux",
      architecture: "ARM64",
      fileName: `soplang-${latestVersion}-linux-arm64.tar.gz`,
      size: "17.9 MB",
    },
  ];

  return (
    <>
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            Download Soplang {latestVersion}
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-primary">Latest Release: {latestVersion}</h2>
                <p className="text-gray-600 dark:text-gray-300">Released on {releaseDate}</p>
              </div>
              <Link 
                href="/docs/getting-started" 
                className="mt-4 md:mt-0 btn-primary"
              >
                Get Started Guide
              </Link>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What's New in {latestVersion}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Improved performance for large dataset processing</li>
                <li>Enhanced type inference system</li>
                <li>New built-in functions for string manipulation</li>
                <li>Bug fixes and stability improvements</li>
                <li>Updated standard library documentation</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <Link 
                href="/downloads/changelog" 
                className="text-primary hover:underline"
              >
                View full changelog →
              </Link>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Download Options</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {downloadOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{option.platform} ({option.architecture})</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{option.size}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{option.fileName}</p>
                <a 
                  href={`/downloads/files/${option.fileName}`}
                  className="btn-primary inline-block text-center w-full"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Other Installation Options</h2>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Package Managers</h3>
              <div className="space-y-4">
                <CodeWindow 
                  code={`pip install soplang==${latestVersion}`} 
                  title="Python (pip)" 
                  className="shadow-lg"
                />
                <CodeWindow 
                  code="brew install soplang" 
                  title="macOS (Homebrew)" 
                  className="shadow-lg"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Source Code</h3>
              <p className="mb-2">For developers who want to build from source:</p>
              <div className="mt-3">
                <CodeWindow 
                  code="git clone https://github.com/soplang/soplang.git" 
                  title="Git" 
                  className="shadow-lg"
                />
              </div>
              <a 
                href="https://github.com/soplang/soplang/releases/tag/v1.2.0"
                className="text-primary hover:underline block mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository →
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Need help with installation?
            </p>
            <Link 
              href="/docs/installation" 
              className="text-primary hover:underline"
            >
              View Installation Guide →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 