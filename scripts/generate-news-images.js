const fs = require('fs');
const path = require('path');

// Create the blog images directory if it doesn't exist
const blogImagesDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(blogImagesDir)) {
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Generate SVG placeholder images for news items
const generateNewsImageSVG = (title, color) => {
  // Create a simplified title for the image
  const simplifiedTitle = title.split(':')[0].trim();
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="${color}" />
    <text x="400" y="200" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">
      ${simplifiedTitle}
    </text>
    <text x="400" y="250" font-family="Arial" font-size="24" fill="white" text-anchor="middle">
      Soplang News
    </text>
  </svg>`;
};

// News items that need images
const newsItems = [
  { id: 'soplang-2.0', title: 'Announcing Soplang 2.0', color: '#3F72AF' },
  { id: 'community-milestone', title: 'Community Milestone', color: '#5E9A78' },
  { id: 'university-adoption', title: 'University Adoption', color: '#6B5B95' },
  { id: 'hackathon', title: 'Soplang Hackathon', color: '#E84A5F' },
  { id: 'release-1.5.0', title: 'Soplang 1.5.0 Release', color: '#3F72AF' },
  { id: 'enterprise-adoption', title: 'Enterprise Adoption', color: '#5E9A78' },
  { id: 'learning-resources', title: 'Learning Resources', color: '#6B5B95' },
  { id: 'community-contributions', title: 'Community Contributions', color: '#E84A5F' },
];

// Generate images for each news item
newsItems.forEach(item => {
  const svgContent = generateNewsImageSVG(item.title, item.color);
  fs.writeFileSync(path.join(blogImagesDir, `${item.id}.svg`), svgContent);
  console.log(`Created placeholder for ${item.title}`);
});

console.log('All news images generated successfully!'); 