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

## 5. Useful Commands

We have some "magic" commands to update the website data:

*   **Update Downloads**: `npm run generate:downloads` (gets the latest download links).
*   **Update Contributors**: `npm run generate:contributors` (finds people who helped on GitHub).
*   **Update Sitemap**: `npm run generate:sitemap` (searches the whole site and updates the map). **Always run this before you finish your work.**

---

## 6. Building for Production

When the website is ready to be put online, run:
```bash
npm run build
```
This will check for errors and make the website super fast.

If you have any questions, feel free to ask the team!
