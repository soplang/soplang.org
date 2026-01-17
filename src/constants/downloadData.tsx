import React from 'react';
import { Icon } from '@iconify/react';

export const platforms = [
    {
        id: 'windows',
        name: 'Windows',
        icon: <Icon icon="fa6-brands:windows" className="w-12 h-12 text-blue-500" />,
        version: 'v2.0.0',
        type: 'Installer (.msi)',
        size: '28.6 MB',
        requirements: 'Windows 10/11 (64-bit)',
        downloadUrl: 'https://github.com/soplang/soplang/releases/download/v2.0.0/soplang-setup.exe',
        instructions: 'Run the installer and follow the wizard.',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'group-hover:border-blue-500/50',
    },
    {
        id: 'mac',
        name: 'macOS',
        icon: <Icon icon="fa6-brands:apple" className="w-12 h-12 text-gray-500 dark:text-gray-100" />,
        version: 'v2.0.0',
        type: 'Installer (.pkg)',
        size: '26.2 MB',
        requirements: 'macOS 11.0+ (Apple Silicon/Intel)',
        downloadUrl: '#',
        instructions: 'Open the .pkg file to install.',
        gradient: 'from-gray-500/20 to-slate-500/20',
        border: 'group-hover:border-white/50',
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: <Icon icon="devicon:linux" className="w-12 h-12" />,
        version: 'v2.0.0',
        type: 'Tarball (.tar.gz)',
        size: '23.8 MB',
        requirements: 'Ubuntu 20.04+, Debian, Arch',
        downloadUrl: '#',
        instructions: 'Extract and run install script.',
        gradient: 'from-green-500/20 to-emerald-500/20',
        border: 'group-hover:border-green-500/50',
    },
];

export const packageManagers = [
    {
        name: 'npm',
        icon: <Icon icon="fa6-brands:npm" className="w-6 h-6 text-red-500" />,
        command: 'npm install -g soplang',
        desc: 'Node.js Package Manager',
    },
    {
        name: 'Homebrew',
        icon: <Icon icon="simple-icons:homebrew" className="w-5 h-5 text-amber-500" />,
        command: 'brew install soplang',
        desc: 'macOS Package Manager',
    },
    {
        name: 'APT',
        icon: <Icon icon="fa6-brands:ubuntu" className="w-5 h-5 text-purple-500" />,
        command: 'sudo apt install soplang',
        desc: 'Debian/Ubuntu Linux',
    },
    {
        name: 'Docker',
        icon: <Icon icon="fa6-brands:docker" className="w-6 h-6 text-blue-400" />,
        command: 'docker pull soplang/soplang:latest',
        desc: 'Container Image',
    },
];
