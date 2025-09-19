# Soplang Documentation Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Prerequisites

- [Bun](https://bun.sh/) must be installed. You can install Bun by running:
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Installation

```bash
bun install
```

## Local Development

```bash
bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
bun build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

```
soplong-docs/
├── docs/                           # Documentation pages
├── blog/                           # Blog posts
├── static/                         # Static assets
│   └── img/                        # Images and icons
├── src/
│   ├── pages/                      # Custom pages (about, download, etc.)
│   ├── components/
│   │   ├── about/                  # About page specific components
│   │   ├── download/               # Download page specific components
│   │   ├── shared/                 # Shared components across pages
│   │   │   ├── Buttons.tsx         # All button components
│   │   │   ├── SVGLinks.tsx        # SVG icons and links
│   │   │   └── ...                 # Other shared components
│   │   └── ui/                     # UI library components
│   ├── css/                        # Global styles
│   ├── theme/                      # Docusaurus theme overrides
│   └── plugins/                    # Custom plugins
├── lib/                            # Utilities and helper functions
│   └── types.d.ts                  # Type definitions
└── ...
```

## Development Guidelines

### File Organization

```
src/
├── pages/                          # 📄 Create new pages here
│   ├── about.mdx
│   ├── download.mdx
│   └── index.tsx
├── components/
│   ├── about/                      # 📁 About page specific components
│   │   ├── LanguageGoals.tsx
│   │   ├── LatestVersionFeatures.tsx
│   │   └── GetInvolved.tsx
│   ├── download/                   # 📁 Download page specific components
│   │   ├── Platforms.tsx
│   │   └── SystemRequirements.tsx
│   ├── shared/                     # 🔄 Shared across multiple pages
│   │   ├── Buttons.tsx
│   │   ├── SVGLinks.tsx
│   │   └── HorizontalLine.tsx
│   └── ui/                         # 🎨 UI library components
└── lib/                           # ⚙️ Utilities and helpers
    └── types.d.ts
```

### Component Guidelines

```
src/components/shared/
├── Buttons.tsx                     # 🔘 ALL button components
│   ├── SlideBackgroundButton
│   ├── PrimaryButton
│   ├── SecondaryButton
│   └── IconButton
├── SVGLinks.tsx                    # 🔗 SVG icons and links
│   ├── GitHubIcon
│   ├── TwitterIcon
│   ├── DiscordIcon
│   └── ExternalLinkIcon
└── HorizontalLine.tsx              # ➖ Other shared components
```

**Icon Priority:**

1. 🎯 **First Choice**: [Lucide Icons](https://lucide.dev)
2. 🔍 Check availability at [lucide.dev](https://lucide.dev)
3. 📦 Only use custom SVG if not available in Lucide
4. 📁 Add custom icons to `SVGLinks.tsx`

### Git Commit Messages

Use proper commit message format:

- `feat: add new download page component`
- `fix: resolve button hover animation issue`
- `docs: update README with project guidelines`
- `style: improve responsive design for mobile`
- `refactor: reorganize shared components`

### Icon Usage

1.  First check [Lucide Icons](https://lucide.dev) for available icons
2.  Use Lucide icons whenever possible for consistency
3.  Only use custom SVG icons if not available in Lucide
4.  Add custom SVG icons to `src/components/shared/SVGLinks.tsx`

_Made by Soplang Team❤️._
