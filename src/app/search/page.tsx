import { Metadata } from 'next';
import { getAllContent, ContentMetadata } from '@/lib/content';
import SearchClient, { SearchItem, SearchType } from './SearchClient';

import { siteStructure } from '@/constants/sitemap';

export const metadata: Metadata = {
  title: 'Search Soplang - Find Documentation, Blogs, and News',
  description:
    "Search through Soplang's documentation, tutorials, and examples to find the information you need.",
};

// Helper to map content to search items
function mapContentToSearchItem(content: ContentMetadata, type: SearchType, baseUrl: string): SearchItem {
  return {
    title: content.title,
    description: content.description,
    slug: content.slug,
    type,
    url: `${baseUrl}/${content.slug}`,
  };
}

export default function SearchPage() {
  // Fetch all content at request time/build time
  const docs = getAllContent('docs');
  const tutorials = getAllContent('tutorials');
  const examples = getAllContent('examples');

  // Extract static pages from sitemap
  const staticPages: SearchItem[] = [];

  siteStructure.forEach(section => {
    section.links.forEach(link => {
      // Only include internal links and exclude the search page itself
      if (link.href.startsWith('/') && link.href !== '/search') {
        // Check if it's already covered by docs/tutorials/examples to avoid duplicates, 
        // although strict equality check might miss some if slugs differ slightly.
        // For now, simple inclusion is safer, but let's exclude pure docs/ links if we index them separately?
        // Actually, sitemap includes /docs/getting-started. 
        // docs array has full content. Sitemap has just links.
        // We should prioritize the rich content from 'docs' array if available.
        // But 'docs' array gives us /docs/[slug]. Sitemap might have that too.
        // Let's filter out anything that looks like a doc/tutorial/example URL from staticPages
        // to prefer the content-based indexing which likely has better descriptions.

        const isContent =
          link.href.startsWith('/docs/') ||
          link.href.startsWith('/tutorials') ||
          link.href.startsWith('/examples');

        if (!isContent) {
          const slug = link.href.replace(/^\//, ''); // remove leading slash
          staticPages.push({
            title: link.name,
            description: `Navigate to ${link.name}`, // Fallback description
            slug: slug || 'home',
            type: 'page',
            url: link.href
          });
        }
      }
    });
  });

  // Add Home manually if not in sitemap keys (it usually isn't)
  if (!staticPages.find(p => p.url === '/')) {
    staticPages.push({ title: 'Home', description: 'The official home of Soplang.', slug: '', type: 'page', url: '/' });
  }


  // Combine and map to search items
  const allContent: SearchItem[] = [
    ...docs.map(item => mapContentToSearchItem(item, 'documentation', '/docs')),
    ...tutorials.map(item => mapContentToSearchItem(item, 'tutorial', '/tutorials')),
    ...examples.map(item => mapContentToSearchItem(item, 'example', '/examples')),
    ...staticPages
  ];

  return <SearchClient initialItems={allContent} />;
}
