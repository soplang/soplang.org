#!/bin/bash

# Function to commit a file with a message
commit_file() {
    FILE=$1
    MSG=$2
    if [ -e "$FILE" ] || [ -L "$FILE" ]; then
        git add "$FILE"
        git commit -m "$MSG"
    else
        # File might be deleted, check git status
        if git status --porcelain | grep -q "D $FILE"; then
            git rm "$FILE"
            git commit -m "$MSG"
        fi
    fi
}

# New Scripts
commit_file "scripts/generateCommunityStats.js" "Added community stats generator script"
commit_file "scripts/generateContributors.js" "Added contributors discovery script"
commit_file "scripts/generateDownloads.js" "Added downloads data generator script"
commit_file "scripts/generateSitemap.js" "Added dynamic sitemap crawler script"

# New App Routes & Layouts
commit_file "src/app/[collection]/layout.tsx" "Added layout for dynamic collections"
commit_file "src/app/[collection]/page.tsx" "Added index page for dynamic collections"
commit_file "src/app/[collection]/[...slug]/page.tsx" "Added catch-all page for collection content"

commit_file "src/app/about/help/page.tsx" "Added help center page"
commit_file "src/app/contact/page.tsx" "Created modern contact page"

commit_file "src/app/examples/layout.tsx" "Added layout for examples section"
commit_file "src/app/examples/page.tsx" "Added index page for examples"
commit_file "src/app/examples/[...slug]/page.tsx" "Added detail page for examples"

commit_file "src/app/faq/FaqClient.tsx" "Implemented interactive FAQ client component"
commit_file "src/app/faq/page.tsx" "Added FAQ page"

commit_file "src/app/tutorials/layout.tsx" "Added layout for tutorials section"
commit_file "src/app/tutorials/page.tsx" "Added index page for tutorials"
commit_file "src/app/tutorials/[...slug]/page.tsx" "Added detail page for tutorials"

# New Components & Clients
commit_file "src/app/search/SearchClient.tsx" "Implemented search client with z-index fixes"
commit_file "src/components/ui/Table.tsx" "Added reusable table component"
commit_file "src/lib/content.ts" "Implemented dynamic content fetching library"

# New Constants & Data
commit_file "src/constants/communityStats.tsx" "Generated initial community stats data"
commit_file "src/constants/contributorsData.tsx" "Generated initial contributors data"
commit_file "src/constants/packageManagersData.tsx" "Added package managers constants"

# New Content Files
commit_file "src/examples/hello-world.mdx" "Added hello-world example content"
commit_file "src/tutorials/index.mdx" "Added tutorial index content"

# Modified App Pages
commit_file "src/app/about/page.tsx" "Updated about page design"
commit_file "src/app/blog/BlogList.tsx" "Updated blog list with search and filters"
commit_file "src/app/community/page.tsx" "Refined community page layout"
commit_file "src/app/contribute/page.tsx" "Updated contribute page with contributors grid"
commit_file "src/app/contribute/security/page.tsx" "Redesigned security policy page"
commit_file "src/app/docs/layout.tsx" "Updated documentation layout"
commit_file "src/app/docs/[...slug]/page.tsx" "Updated documentation catch-all route"
commit_file "src/app/downloads/page.tsx" "Updated downloads page with tabbed interface"
commit_file "src/app/page.tsx" "Refined landing page hero and sections"
commit_file "src/app/privacy/page.tsx" "Updated privacy policy page"
commit_file "src/app/search/page.tsx" "Updated search page structure"
commit_file "src/app/terms/page.tsx" "Updated terms of service page"
commit_file "src/app/trademarks/page.tsx" "Updated trademarks policy page"

# Modified Components
commit_file "src/components/CodeWindow.tsx" "Enhanced CodeWindow with themes and interactions"
commit_file "src/components/DocNavigation.tsx" "Updated documentation navigation buttons"
commit_file "src/components/DocsSidebar.tsx" "Improved documentation sidebar responsiveness"
commit_file "src/components/Footer.tsx" "Updated footer with new links and layout"
commit_file "src/components/home/Hero.tsx" "Refined homepage hero section animations"

# Modified Constants
commit_file "src/constants/codeSnippetData.ts" "Updated code snippets for homepage"
commit_file "src/constants/downloadData.tsx" "Updated download configuration"
commit_file "src/constants/sitemap.ts" "Updated sitemap with new routes"

# Modified Content (MDX)
commit_file "src/docs/built-in-functions.mdx" "Updated built-in functions documentation"
commit_file "src/docs/conditional-statements.mdx" "Updated conditional statements documentation"
commit_file "src/docs/control-flow.mdx" "Updated control flow documentation"
commit_file "src/docs/getting-started.mdx" "Updated getting started guide"
commit_file "src/docs/installation.mdx" "Updated installation instructions"
commit_file "src/docs/syntax-basics.mdx" "Updated syntax basics documentation"

commit_file "src/posts/building-web-server.mdx" "Updated web server blog post"
commit_file "src/posts/community-spotlight-jan.mdx" "Updated community spotlight post"
commit_file "src/posts/getting-started.mdx" "Updated getting started blog post"
commit_file "src/posts/loops-and-logic.mdx" "Updated loops and logic post"
commit_file "src/posts/soplang-2-0-release.mdx" "Updated version 2.0 release post"

# Deletions
commit_file "scripts/generate-news-images.js" "Removed legacy news image generator"
commit_file "scripts/generate-placeholders.js" "Removed legacy placeholder generator"
commit_file "src/app/community/contribute/page.tsx" "Removed redundant contribute subpage"
commit_file "src/app/community/forums/page.tsx" "Removed legacy forums page"
commit_file "src/app/downloads/archive/layout.tsx" "Removed legacy downloads archive layout"
commit_file "src/app/downloads/archive/page.tsx" "Removed legacy downloads archive page"
commit_file "src/app/downloads/latest/layout.tsx" "Removed legacy latest downloads layout"
commit_file "src/app/downloads/latest/page.tsx" "Removed legacy latest downloads page"
commit_file "src/app/news/page.tsx" "Removed legacy news page"
commit_file "src/app/news/not-found.tsx" "Removed legacy news not-found page"
commit_file "src/app/news/[id]/page.tsx" "Removed legacy news detail page"
commit_file "src/app/success-stories/page.tsx" "Removed legacy success stories page"
commit_file "src/app/test/page.tsx" "Removed test page"
commit_file "src/app/write/page.tsx" "Removed legacy write-us page"
commit_file "src/lib/docs.ts" "Removed outdated docs utility"

# Temporary Backups Cleanup
commit_file "temp_backup/src/app/about/page.tsx" "Removed temporary backup of about page"
commit_file "temp_backup/src/app/blog/page.tsx" "Removed temporary backup of blog page"
commit_file "temp_backup/src/app/community/page.tsx" "Removed temporary backup of community page"
commit_file "temp_backup/src/app/docs/installation/page.tsx" "Removed temporary backup of installation docs"
commit_file "temp_backup/src/app/docs/layout.tsx" "Removed temporary backup of docs layout"
commit_file "temp_backup/src/app/docs/page.tsx" "Removed temporary backup of docs page"
commit_file "temp_backup/src/app/downloads/page.tsx" "Removed temporary backup of downloads page"
commit_file "temp_backup/src/app/layout.tsx" "Removed temporary backup of root layout"
commit_file "temp_backup/src/app/page.tsx" "Removed temporary backup of landing page"
commit_file "temp_backup/src/components/Footer.tsx" "Removed temporary backup of footer"
commit_file "temp_backup/src/components/Navbar.tsx" "Removed temporary backup of navbar"
commit_file "temp_backup/src/components/ThemeProvider.tsx" "Removed temporary backup of theme provider"
commit_file "temp_backup/src/components/ThemeToggle.tsx" "Removed temporary backup of theme toggle"
commit_file "temp_backup/src/styles/globals.css" "Removed temporary backup of global styles"
commit_file "temp_backup/src/utils/formatDate.ts" "Removed temporary backup of date formatter"

# Miscellaneous
commit_file "download-page.png" "Added screenshot of updated downloads page"
commit_file "package.json" "Updated dependencies and scripts"
commit_file "commits.sh" "Updated commit automation script"

# Final check for any remaining files
git add .
MSG="Finalized remaining project meta changes"
if ! git diff --cached --quiet; then
    git commit -m "$MSG"
fi
