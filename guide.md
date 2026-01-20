# Project Guide for Teammates

Welcome to the Soplang website project! This guide will help you understand how the project works and how you can add new things to it.

## 1. Getting Started

Before you start, make sure you have **Node.js** installed on your computer.

### Install Dependencies
First, download all the required tools by running this command in your terminal:
```bash
npm install
```

### Run the Website Locally
To see the website on your computer while you work, use:
```bash
npm run dev
```
Now, open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Project Structure

Here is where the important files are located:

*   **`src/app/`**: This is where the website pages are. For example, `src/app/contact/page.tsx` is the Contact page.
*   **`src/docs/`**: This is where all the documentation files are. They use the `.mdx` format.
*   **`src/posts/`**: This is where the blog posts are located.
*   **`src/components/`**: This folder contains small pieces of the website like the Navbar, Footer, and Buttons.
*   **`src/constants/`**: This folder has data files, like the list of people who contributed or the sitemap.
*   **`scripts/`**: These are small programs that help us update data automatically.

---

## 3. Adding New Content

### How to add a Documentation Page
1.  Go to `src/docs/`.
2.  Create a new file ending in `.mdx`.
3.  Use a number at the beginning of the filename (like `16_new-page.mdx`) to keep them in order.
4.  Add a "frontmatter" at the top like this:
    ```markdown
    ---
    title: Your Title
    description: A short summary
    order: 10
    ---
    ```

### How to add a Blog Post
1.  Go to `src/posts/`.
2.  Create a new file ending in `.mdx`.
3.  Add the post content and images.

---

## 4. Special Components for MDX

When you write in `.mdx` files, you can use these special tools to make your pages look better:

### Code Window
To show code with a nice terminal look:
```markdown
**example.sop**
```soplang
qor("Hello World")
```
```

### Beautiful Tables
Instead of standard Markdown tables, use our custom table for a better look:
```markdown
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Head 1</TableHead>
      <TableHead>Head 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 5. Automation & Data Generation

The project uses several automation scripts located in the `scripts/` folder to keep dynamic data up-to-date. These scripts fetch information from external sources (like GitHub) and generate TypeScript/JSX files in `src/constants/`.

### 🛠️ Download Links (`scripts/generateDownloads.js`)
*   **Command**: `npm run generate:downloads`
*   **How it works**: 
    1.  It sends a request to the GitHub API: `https://api.github.com/repos/soplang/soplang/releases/latest`.
    2.  It looks at the `assets` array of the latest release.
    3.  It matches files against platform extensions (e.g., `.exe` for Windows, `.dmg` for Mac, `.tar.gz` for Linux).
    4.  It calculates file sizes and maps them to the beautiful UI cards you see on the /downloads page.
*   **Output**: Generates `src/constants/downloadData.tsx`.

### 🗺️ Sitemap Crawler (`scripts/generateSitemap.js`)
*   **Command**: `npm run generate:sitemap`
*   **How it works**:
    1.  It recursively crawls the `src/app/` directory to find all valid website routes.
    2.  It automatically ignores Next.js internal folders (starting with `(` or `[`).
    3.  It reads all `.mdx` files in `src/docs/` and `src/posts/` and uses `gray-matter` to extract the `title` and `order` from the top of the file.
    4.  It sorts the entire site structure so that navigation stays consistent.
*   **Output**: Generates `src/constants/sitemap.ts`. **Run this whenever you add a new page!**

### 👥 Contributors Discovery (`scripts/generateContributors.js`)
*   **Command**: `npm run generate:contributors`
*   **How it works**:
    1.  Fetches the list of contributors from the Soplang GitHub repository.
    2.  Filters out bots to only show real users.
    3.  Includes a "Fallback" mechanism: if the GitHub API is down or reaches a limit, it uses a hardcoded list to ensure the website doesn't break during build.
*   **Output**: Generates `src/constants/contributorsData.tsx`.

### 📊 Community Stats (`scripts/generateCommunityStats.js`)
*   **Command**: `npm run generate:community`
*   **How it works**:
    1.  Fetches the number of GitHub Stars and Forks.
    2.  Uses a clever "Link Header" trick to count total contributors without downloading the whole list.
    3.  Combines this with hardcoded targets for Discord members and total downloads.
*   **Output**: Generates `src/constants/communityStats.tsx`.

---

## 6. Development Tools

### Syntax Highlighting
We use a custom component `src/components/SoplangHighlighter.tsx` to colorize Soplang code snippets. If you add a new keyword to the Soplang language, you must add it to the `soplangKeywords` array in that file so it displays correctly on the website.

### Custom Table Integration
Standard Markdown tables (| header | ...) are automatically transformed into our premium `Table` component. However, for complex tables, we recommend using the `<Table>` JSX components directly in your MDX files for more layout control.

---

## 7. Building for Production

When the website is ready to be put online, run:
```bash
npm run build
```
This will:
1.  Check for Type errors (TypeScript).
2.  Run the Next.js compiler to optimize assets.
3.  Check all links and routes.

If you have any questions, feel free to ask the team!
