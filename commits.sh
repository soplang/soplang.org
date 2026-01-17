#!/bin/bash

# Configuration and Global Styles
git add tailwind.config.js
git commit -m "Updated tailwind configuration"

git add src/styles/globals.css
git commit -m "Updated global styles"

git add tsconfig.json
git commit -m "Updated typescript configuration"

# Components - UI and Core
git add src/components/ui/icon.tsx
git commit -m "Added icon component wrapper"

git add src/components/CodeWindow.tsx
git commit -m "Added codewindow component for syntax highlighting"

git add src/components/SoplangHighlighter.tsx
git commit -m "Updated soplang syntax highlighter"

git add src/components/TerminalCard.tsx
git commit -m "Updated terminal card component"

git add src/components/ui/mode-switcher.tsx
git commit -m "Updated mode switcher theme logic"

git add src/components/ui/Typewriter.tsx
git commit -m "Added typewriter effect component"

# New Component Structure (Navbar, Home, Docs)
git add src/components/navbar/
git commit -m "Refactored navbar components structure"

git add src/components/home/
git commit -m "Refactored home page components"

git add src/components/DocsSidebar.tsx
git commit -m "Added documentation sidebar component"

# Main Pages
git add src/app/page.tsx
git commit -m "Updated landing page design"

git add src/app/about/
git commit -m "Added about page with premium ui"

git add src/app/docs/
git commit -m "Added documentation pages and layout"

git add src/lib/docs.ts
git commit -m "Added docs content fetching logic"

# Blog & Posts System (Recent Work)
git add src/lib/blog.ts
git commit -m "Updated blog logic to sort by git history"

git add src/app/blog/BlogList.tsx
git commit -m "Created blog list component with search and filters"

git add src/app/blog/page.tsx
git commit -m "Refactored blog page to use client list component"

git add src/app/blog/\[slug\]/
git commit -m "Updated blog post layout and enabled codewindow"

git add src/posts/
git commit -m "Added and updated blog post mdx content"

# Data and Constants
git add src/constants/
git commit -m "Added project constants"

git add src/lib/schema.ts
git commit -m "Added data schemas"

# Cleanup
git rm src/components/Navbar.tsx
git commit -m "Removed legacy navbar file"

git add .
git commit -m "Committed remaining changes"
