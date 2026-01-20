
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Map content types to their directories
const CONTENT_DIRECTORIES: Record<string, string> = {
    docs: path.join(process.cwd(), 'src/docs'),
    tutorials: path.join(process.cwd(), 'src/tutorials'),
    examples: path.join(process.cwd(), 'src/examples'),
};

export interface ContentMetadata {
    title: string;
    description?: string;
    date?: string;
    slug: string;
    [key: string]: any;
}

export interface ContentItem {
    meta: ContentMetadata;
    content: string;
}

/**
 * Get all content items for a specific type (docs, tutorials, examples)
 */
export function getAllContent(type: string): ContentMetadata[] {
    let directory = CONTENT_DIRECTORIES[type];

    // Dynamic directory resolution: check if src/<type> exists
    if (!directory) {
        const dynamicPath = path.join(process.cwd(), 'src', type);
        if (fs.existsSync(dynamicPath) && fs.statSync(dynamicPath).isDirectory()) {
            directory = dynamicPath;
        }
    }

    if (!directory || !fs.existsSync(directory)) {
        // Return empty array instead of warning to avoid noise for invalid routes
        return [];
    }

    const fileNames = fs.readdirSync(directory);
    const items = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(directory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                ...data,
            } as ContentMetadata;
        });

    const sortedItems = items.sort((a, b) => {
        // Sort by order if present, otherwise alpha
        if (a.order !== undefined && b.order !== undefined) {
            return a.order - b.order;
        }
        return 0; // Keep file system order or implement alpha sort if needed
    });

    return sortedItems;
}

/**
 * Get specific content item by slug
 */
export function getContentBySlug(type: string, slug: string): ContentItem | null {
    let directory = CONTENT_DIRECTORIES[type];

    // Dynamic resolution
    if (!directory) {
        const dynamicPath = path.join(process.cwd(), 'src', type);
        if (fs.existsSync(dynamicPath) && fs.statSync(dynamicPath).isDirectory()) {
            directory = dynamicPath;
        }
    }

    if (!directory) {
        return null;
    }

    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(directory, `${realSlug}.mdx`);

    try {
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            meta: {
                slug: realSlug,
                title: data.title || realSlug,
                ...data,
            } as ContentMetadata,
            content,
        };
    } catch (e) {
        console.error(`Error reading content for ${type}/${slug}:`, e);
        return null;
    }
}

// Backward compatibility helpers (optional, but good for transition)
export const getAllDocs = () => getAllContent('docs');
export const getDocBySlug = (slug: string) => getContentBySlug('docs', slug);
