import React from 'react';
import { Icon } from '@iconify/react';

export const packageManagers = [
    {
        name: 'winget',
        icon: <Icon icon="logos:microsoft-windows-icon" className="w-4 h-4 text-blue-500" />,
        command: 'winget install soplang',
        desc: 'Windows Package Manager',
    },
    // {
    //     name: 'npm',
    //     icon: <Icon icon="fa6-brands:npm" className="w-6 h-6 text-red-500" />,
    //     command: 'npm install -g soplang',
    //     desc: 'Node.js Package Manager',
    // },
    // {
    //     name: 'pip',
    //     icon: <Icon icon="vscode-icons:file-type-pypi" className="w-6 h-6 text-blue-500" />,
    //     command: 'pip install soplang',
    //     desc: 'Python Package Manager',
    // },
    // {
    //     name: 'Homebrew',
    //     icon: <Icon icon="logos:homebrew" className="w-5 h-5 text-amber-500" />,
    //     command: 'brew install soplang',
    //     desc: 'macOS Package Manager',
    // },
    // {
    //     name: 'APT',
    //     icon: <Icon icon="fa6-brands:ubuntu" className="w-5 h-5 text-purple-500" />,
    //     command: 'sudo apt install soplang',
    //     desc: 'Debian/Ubuntu Linux',
    // },
    {
        name: 'Docker',
        icon: <Icon icon="fa6-brands:docker" className="w-6 h-6 text-blue-400" />,
        command: `# Run the interactive shell
docker run -it --rm soplang/soplang

# Run a Soplang script
docker run -it --rm -v $(pwd):/scripts soplang/soplang my_script.sop`,
        desc: 'Container Image',
    },
];
