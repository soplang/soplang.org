const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const PROJECT_ROOT = process.cwd();
const SRC_PATH = path.join(PROJECT_ROOT, 'src');
const APP_PATH = path.join(SRC_PATH, 'app');
const OUTPUT_FILE = path.join(SRC_PATH, 'constants', 'sitemap.ts');

/**
 * Converts a slug to Title Case (e.g., 'getting-started' -> 'Getting Started')
 */
function toTitleCase(slug) {
    return slug
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Gets all MDX files in a directory and extracts metadata
 */
function getMdxItems(route) {
    const contentDir = path.join(SRC_PATH, route);
    if (!fs.existsSync(contentDir)) return [];

    return fs.readdirSync(contentDir)
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
            try {
                const fullPath = path.join(contentDir, file);
                const content = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(content);
                const slug = file.replace('.mdx', '');
                return {
                    name: data.title || toTitleCase(slug),
                    href: `/${route}/${slug}`,
                    order: data.order !== undefined ? data.order : 999
                };
            } catch (e) {
                return null;
            }
        })
        .filter(Boolean);
}

/**
 * Recursively crawls the app directory to find valid routes
 */
function crawlRoutes(dir, baseRoute = '') {
    const sections = [];
    if (!fs.existsSync(dir)) return sections;

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            const folderName = item.name;
            // Ignore special Next.js folders
            if (folderName.startsWith('[') || folderName.startsWith('(') || folderName === 'api') continue;

            const fullPath = path.join(dir, folderName);
            const routePath = baseRoute ? `${baseRoute}/${folderName}` : folderName;

            // If it's a top-level folder, it's a potential section
            if (!baseRoute) {
                const section = {
                    title: toTitleCase(folderName),
                    links: []
                };

                // Add the main page of the section if it exists
                if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
                    section.links.push({
                        name: toTitleCase(folderName) + ' Home',
                        href: `/${routePath}`,
                        order: 0
                    });
                }

                // Check for MDX content
                const mdxItems = getMdxItems(routePath);
                section.links.push(...mdxItems);

                // Check for nested static routes (sub-folders with page.tsx)
                const subItems = fs.readdirSync(fullPath, { withFileTypes: true });
                for (const subItem of subItems) {
                    if (subItem.isDirectory()) {
                        const subFolderName = subItem.name;
                        if (subFolderName.startsWith('[') || subFolderName.startsWith('(') || subFolderName === 'api') continue;

                        const subRoutePath = `${routePath}/${subFolderName}`;
                        if (fs.existsSync(path.join(fullPath, subFolderName, 'page.tsx'))) {
                            section.links.push({
                                name: toTitleCase(subFolderName),
                                href: `/${subRoutePath}`,
                                order: 100
                            });
                        }
                    }
                }

                if (section.links.length > 0) {
                    sections.push(section);
                }
            }
        }
    }
    return sections;
}

function generateSitemap() {
    console.log('Running pure dynamic crawler...');

    // 1. Crawl src/app for top-level routes and their children
    const siteStructure = crawlRoutes(APP_PATH);

    // 2. Sort sections by title
    siteStructure.sort((a, b) => a.title.localeCompare(b.title));

    // 3. Sort links within each section
    siteStructure.forEach(section => {
        section.links.sort((a, b) => (a.order || 999) - (b.order || 999) || a.name.localeCompare(b.name));
        // Cleanup order property for final output
        section.links = section.links.map(({ name, href }) => ({ name, href }));
    });

    // 4. Write to file
    const output = `export const siteStructure = ${JSON.stringify(siteStructure, null, 4)};\n`;
    fs.writeFileSync(OUTPUT_FILE, output);

    console.log(`Pure dynamic sitemap generated at ${OUTPUT_FILE}`);
}

generateSitemap();
