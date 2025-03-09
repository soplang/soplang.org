# Soplang | Modern Programming Education Platform

<div align="center">
  <img src="public/logo.png" alt="Soplang Logo" width="200"/>
  <p><em>Empowering the next generation of programmers through intuitive language learning</em></p>
</div>

## About Soplang

Soplang is an innovative educational platform designed to make programming language learning accessible, engaging, and effective. Inspired by Python's readability and modern pedagogical approaches, Soplang creates a seamless bridge between theoretical computer science concepts and practical coding skills.

### Our Mission

To democratize programming education by providing a structured, intuitive learning path that adapts to individual learning styles while maintaining academic rigor and industry relevance.

## Platform Features

- **Interactive Learning Environment**: Code, compile, and run programs directly in your browser
- **Progressive Curriculum**: Structured learning paths from fundamentals to advanced concepts
- **Real-time Feedback**: Immediate code evaluation with helpful error messages and suggestions
- **Mathec Integration**: Mathematical concepts seamlessly integrated with programming exercises
- **Multilingual Support**: Learn programming concepts in multiple human languages
- **Accessibility Focus**: Designed with eye-friendly color schemes and accessibility standards
- **Community Collaboration**: Share projects, participate in challenges, and learn together

## Educational Approach

Soplang's educational methodology is built on three core principles:

1. **Concept Before Syntax**: Understanding the "why" before the "how"
2. **Learn by Doing**: Practical application through guided exercises and projects
3. **Scaffolded Learning**: Progressive complexity with appropriate support at each stage

## Technical Implementation

### Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) for server-rendered React applications
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive, accessible design
- **Deployment**: [Vercel](https://vercel.com/) for seamless continuous deployment

### Getting Started for Developers

#### Prerequisites

- Node.js 18.x or later
- npm or yarn

#### Installation

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

## Design Philosophy

### Accessibility First

Soplang is designed with accessibility as a priority. Our color scheme is specifically chosen to reduce eye strain during extended learning sessions:

```css
:root {
  --primary-color: #3F72AF; /* Soft blue - easier on eyes */
  --secondary-color: #5E9A78; /* Soft green - math education friendly */
  --background-color: #F9F7F7; /* Very light gray with slight warmth */
}
```

### Responsive Design

The platform is fully responsive, providing an optimal learning experience across all devices from desktop workstations to mobile phones.

## Contributing

We welcome contributions from educators, developers, and language enthusiasts. Whether you're improving documentation, adding new features, or fixing bugs, your input helps make programming education more accessible to everyone.

Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Educational Partners

Soplang collaborates with educational institutions worldwide to develop curriculum materials and teaching methodologies. If you're an educator interested in partnering with us, please contact [education@soplang.org](mailto:education@soplang.org).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Website**: [https://soplang.org](https://soplang.org)
- **Email**: [contact@soplang.org](mailto:contact@soplang.org)
- **Community**: [Discord](https://discord.gg/soplang)
- **Twitter**: [@SoplangEdu](https://twitter.com/SoplangEdu)
