# Soplang.org - Official Website

This is the official website for Soplang, a modern programming language inspired by Python. The website is built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive design optimized for all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, OpenGraph, and fast page speed
- **Documentation**: Comprehensive documentation with a dynamic sidebar
- **Blog**: Latest news, updates, and tutorials
- **Community**: Links to forums, GitHub, and social media

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/soplang/soplang.org.git
cd soplang.org
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/soplang.org
├── src/                  # Source directory
│   ├── app/              # Next.js App Router
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog pages
│   │   ├── community/    # Community page
│   │   ├── docs/         # Documentation pages
│   │   ├── downloads/    # Downloads page
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable components
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Navbar.tsx    # Navigation bar component
│   │   └── ...           # Other components
│   └── styles/           # Global styles
│       └── globals.css   # Global CSS with Tailwind imports
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Customization

### Colors

The primary and secondary colors are defined as CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary-color: #1E3A8A; /* Default blue */
  --secondary-color: #F59E0B; /* Default orange */
}
```

These variables are used in the Tailwind configuration (`tailwind.config.js`) to define the `primary` and `secondary` color classes:

```js
theme: {
  extend: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
    },
  },
},
```

To change the colors, simply update the CSS variables in `globals.css`.

### Dark Mode

Dark mode is implemented using Tailwind's `dark` class and a custom `ThemeProvider` component. The theme can be toggled using the `ThemeToggle` component in the navigation bar.

## Deployment

The website is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to us at [contact@soplang.org](mailto:contact@soplang.org) or join our [Discord community](https://discord.gg/soplang).
