
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const DOCS_DIRECTORY = path.join(process.cwd(), 'src/docs');

export interface DocMetadata {
    title: string;
    description?: string;
    date?: string;
    slug: string;
    [key: string]: any;
}

export interface DocContent {
    meta: DocMetadata;
    content: string;
}

export function getAllDocs(): DocMetadata[] {
    if (!fs.existsSync(DOCS_DIRECTORY)) {
        return [];
    }

    const fileNames = fs.readdirSync(DOCS_DIRECTORY);
    const docs = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(DOCS_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                ...data,
            } as DocMetadata;
        });

    const sortedDocs = docs.sort((a, b) => {
        // Sort by order if present, otherwise alpha
        if (a.order !== undefined && b.order !== undefined) {
            return a.order - b.order;
        }
        return 0;
    });

    // Manually add Introduction page
    const introDoc: DocMetadata = {
        title: 'Introduction',
        slug: '', // Represents /docs/
        description: 'Introduction to Soplang',
        order: 0
    };

    return [introDoc, ...sortedDocs];
}

export function getDocBySlug(slug: string): DocContent | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(DOCS_DIRECTORY, `${realSlug}.mdx`);

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
            } as DocMetadata,
            content,
        };
    } catch (e) {
        return null;
    }
}
