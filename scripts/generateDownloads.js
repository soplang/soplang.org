const fs = require('fs');
const path = require('path');
const https = require('https');

// --- Configuration ---
const PLATFORMS_CONFIG = [
    {
        id: 'windows',
        name: 'Windows',
        icon: '<Icon icon="fa6-brands:windows" className="w-12 h-12 text-blue-500" />',
        extensions: ['.msi', '.exe'],
        type: 'Installer',
        requirements: [
            { icon: 'lucide:cpu', text: 'Windows 10/11 (64-bit)' },
            { icon: 'lucide:hard-drive', text: '500MB Disk Space' }
        ],
        instructions: [
            'Download the installer.',
            'Run the .exe or .msi file.',
            'Follow the setup wizard.'
        ],
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'group-hover:border-blue-500/50',
    },
    {
        id: 'mac',
        name: 'macOS',
        icon: '<Icon icon="fa6-brands:apple" className="w-12 h-12 text-gray-500 dark:text-gray-100" />',
        extensions: ['.pkg', '.dmg'],
        type: 'Installer',
        requirements: [
            { icon: 'lucide:cpu', text: 'macOS 11.0+ (Apple Silicon/Intel)' },
            { icon: 'lucide:hard-drive', text: '500MB Disk Space' }
        ],
        instructions: [
            'Download the package.',
            'Open the .pkg or .dmg file.',
            'Drag to Applications or Install.'
        ],
        gradient: 'from-gray-500/20 to-slate-500/20',
        border: 'group-hover:border-white/50',
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: '<Icon icon="devicon:linux" className="w-12 h-12" />',
        extensions: ['.tar.gz', '.deb', '.rpm'],
        type: 'Archive/Package',
        requirements: [
            { icon: 'lucide:cpu', text: 'Linux (x86_64)' },
            { icon: 'lucide:terminal', text: 'GLIBC 2.27+' }
        ],
        instructions: [
            'Download the package.',
            'Extract tarball or install .deb/.rpm.',
            'Add to PATH if needed.'
        ],
        gradient: 'from-green-500/20 to-emerald-500/20',
        border: 'group-hover:border-green-500/50',
    },
];

const OUTPUT_FILE = path.join(__dirname, '../src/constants/downloadData.tsx');
const GITHUB_API_URL = 'https://api.github.com/repos/soplang/soplang/releases/latest';

// --- Logic ---

function fetchLatestRelease() {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Soplang-Download-Generator'
            }
        };

        https.get(GITHUB_API_URL, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`GitHub API Error: ${res.statusCode} ${res.statusMessage}`));
                }
            });
        }).on('error', err => reject(err));
    });
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

async function generateData() {
    try {
        console.log('Fetching latest release from GitHub...');
        const release = await fetchLatestRelease();

        const version = release.tag_name;

        console.log(`Found version: ${version}`);

        const generatedPlatforms = PLATFORMS_CONFIG.map(config => {
            // Find assets matching extensions
            const matchingAssets = release.assets.filter(asset =>
                config.extensions.some(ext => asset.name.endsWith(ext))
            );

            // Construct files array
            const files = matchingAssets.map(asset => ({
                name: asset.name,
                url: asset.browser_download_url,
                size: formatBytes(asset.size),
                extension: path.extname(asset.name)
            }));

            // Include source code for Linux if no binaries found (or always)
            if (config.id === 'linux' && release.tarball_url) {
                files.push({
                    name: `source-${version}.tar.gz`,
                    url: release.tarball_url,
                    size: 'Source',
                    extension: '.tar.gz'
                });
            }

            // Fallback for size/type if no assets found (or assume first one if available)
            const mainAsset = files[0] || {};

            return {
                ...config,
                version: version,
                files: files, // Array of available downloads
                // Keep these for UI display if needed, but files array is primary
                size: mainAsset.size || 'Unknown',
                type: config.type, // Base type description
                downloadUrl: mainAsset.url || release.html_url
            };
        }).filter(platform => platform.files.length > 0);

        // Generate File Content
        const fileContent = `import React from 'react';
import { Icon } from '@iconify/react';

// This file is auto-generated by scripts/generateDownloads.js
// Do not edit manually. Last generated: ${new Date().toISOString()}

export const platforms = [
    ${generatedPlatforms.map(p => {
            return `{
        id: '${p.id}',
        name: '${p.name}',
        icon: ${p.icon},
        version: '${p.version}',
        type: '${p.type}',
        size: '${p.size}',
        requirements: ${JSON.stringify(p.requirements, null, 12).replace(/"/g, "'")},
        instructions: ${JSON.stringify(p.instructions, null, 12).replace(/"/g, "'")},
        gradient: '${p.gradient}',
        border: '${p.border}',
        downloadUrl: '${p.downloadUrl}',
        files: ${JSON.stringify(p.files, null, 12).replace(/"/g, "'")}
    }`;
        }).join(',\n    ')}
];
`;

        // Ensure directory exists
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, fileContent);
        console.log(`Successfully generated ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error generating download data:', error);
        process.exit(1);
    }
}

generateData();
