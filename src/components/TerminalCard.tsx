'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface BaseOption {
  id: string;
  name: string;
  description: string;
}

interface OSOption extends BaseOption {
  type: 'os';
  icon: React.ReactNode;
  downloadUrl: string;
}

interface PackageOption extends BaseOption {
  type: 'package';
  command: string;
}

type Option = OSOption | PackageOption;

interface TerminalInstallerProps {
  title?: string;
  command?: string;
  introText?: string;
  options?: Option[];
  footerText?: string;
  className?: string;
  type?: 'os' | 'package';
}

const defaultOptions = {
  os: [
    {
      type: 'os' as const,
      id: '1',
      name: 'Windows',
      icon: <Icon icon="fa6-brands:windows" className="text-blue-400 mr-3 text-xl" />,
      description: 'Compatible with Windows 10 and later (64-bit)',
      downloadUrl: '/downloads/latest'
    },
    {
      type: 'os' as const,
      id: '2',
      name: 'macOS',
      icon: <Icon icon="fa6-brands:apple" className="text-blue-400 mr-3 text-xl" />,
      description: 'Compatible with macOS 10.15+ (Intel & Apple Silicon)',
      downloadUrl: '/downloads/latest'
    },
    {
      type: 'os' as const,
      id: '3',
      name: 'Linux',
      icon: <Icon icon="fa6-brands:linux" className="text-blue-400 mr-3 text-xl" />,
      description: 'Compatible with major distributions (Ubuntu, Fedora, etc.)',
      downloadUrl: '/downloads/latest'
    }
  ],
  package: [
    {
      type: 'package' as const,
      id: '1',
      name: 'npm',
      description: 'Node.js Package Manager',
      command: 'npm install -g soplang'
    },
    {
      type: 'package' as const,
      id: '2',
      name: 'Homebrew',
      description: 'macOS Package Manager',
      command: 'brew install soplang'
    },
    {
      type: 'package' as const,
      id: '3',
      name: 'apt',
      description: 'Ubuntu/Debian Package Manager',
      command: 'sudo apt-get install soplang'
    }
  ]
};

const TerminalCard: React.FC<TerminalInstallerProps> = ({
  title = 'soplang-installer',
  command = 'soplang --install',
  introText = 'Welcome to the Soplang installer. Please select your operating system:',
  options,
  footerText = 'After downloading, run the installer and follow the on-screen instructions. For advanced installation options, use soplang --install --help',
  className = '',
  type = 'os'
}) => {
  const currentOptions = options || defaultOptions[type];
  return (
    <div className={`terminal-window overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between dark:border dark:border-gray-700 rounded-tr-lg rounded-tl-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-gray-300 font-mono">{title}</div>
        <div className="w-4"></div>
      </div>

      {/* Terminal content */}
      <div className="bg-[#1e1e1e] text-gray-100 p-6 font-mono text-sm">
        <p className="text-green-400 mb-4">$ <span className="typing-animation">{command}</span></p>
        <p className="text-white mb-6">{introText}</p>

        <div className="space-y-3 mb-6">
          {currentOptions.map((option) => (
            option.type === 'os' ? (
              <Link
                key={option.id}
                href={option.downloadUrl}
                className="terminal-option p-3 border border-gray-600 rounded hover:bg-gray-700 hover:border-blue-400 transition-all flex items-center"
              >
                {option.icon}
                <div>
                  <span className="text-blue-400">{option.id}.</span> <span className="text-white font-semibold">{option.name}</span>
                  <p className="text-gray-400 text-xs mt-1">{option.description}</p>
                </div>
              </Link>
            ) : (
              <div
                key={option.id}
                className="terminal-option p-3 border border-gray-600 rounded hover:bg-gray-700 hover:border-blue-400 transition-all"
              >
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">{option.id}.</span>
                  <span className="text-white font-semibold">{option.name}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">{option.description}</p>
                <code className="block mt-2 text-yellow-400">$ {option.command}</code>
              </div>
            )
          ))}
        </div>

        <p className="text-gray-400 border-t border-gray-700 pt-4 text-xs">
          {footerText.split('soplang').map((part, i, arr) =>
            i === arr.length - 1 ? part : (
              <React.Fragment key={i}>
                {part}<span className="text-yellow-400">soplang</span>
              </React.Fragment>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default TerminalCard;
