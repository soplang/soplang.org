import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { execSync } from 'child_process';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/posts');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    updatedAt: string; // New field for Git updated time
    author: string;
    authorRole?: string;
    category?: string;
    // Removed image and readTime as per request
    content: string;
}

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
        return [];
    }

    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(POSTS_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            // Try to get last modified date from git
            let updatedAt = data.date || new Date().toISOString();
            try {
                // Get the last commit date for this file
                const gitDate = execSync(`git log -1 --format=%ai -- "${fullPath}"`).toString().trim();
                if (gitDate) {
                    updatedAt = gitDate;
                } else {
                    // Fallback to file system stats if git returns empty (e.g. new file not in git yet)
                    const stats = fs.statSync(fullPath);
                    updatedAt = stats.mtime.toISOString();
                }
            } catch (e) {
                // Fallback to fs stats if git fails
                const stats = fs.statSync(fullPath);
                updatedAt = stats.mtime.toISOString();
            }

            return {
                slug,
                content,
                title: data.title || slug,
                description: data.description || '',
                date: data.date || new Date().toISOString(),
                updatedAt: updatedAt,
                author: data.author || 'Soplang Team',
                ...data,
            } as BlogPost;
        });

    // Sort by LAST UPDATED (Git/File updated)
    return posts.sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(POSTS_DIRECTORY, `${realSlug}.mdx`);

    try {
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Try to get last modified date from git (logic duplicated for specific post)
        let updatedAt = data.date || new Date().toISOString();
        try {
            const gitDate = execSync(`git log -1 --format=%ai -- "${fullPath}"`).toString().trim();
            if (gitDate) updatedAt = gitDate;
            else updatedAt = fs.statSync(fullPath).mtime.toISOString();
        } catch (e) {
            updatedAt = fs.statSync(fullPath).mtime.toISOString();
        }

        return {
            slug: realSlug,
            content,
            title: data.title || realSlug,
            description: data.description || '',
            date: data.date || new Date().toISOString(),
            updatedAt: updatedAt,
            author: data.author || 'Soplang Team',
            ...data,
        } as BlogPost;
    } catch (e) {
        return null;
    }
}

