const fs = require('fs');
const path = require('path');

// Create the scripts directory if it doesn't exist
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Create the testimonials directory if it doesn't exist
const testimonialsDir = path.join(__dirname, '../public/images/testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// Generate SVG placeholder images
const generatePlaceholderSVG = (name, color) => {
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="${color}" />
    <text x="150" y="150" font-family="Arial" font-size="120" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${initials}
    </text>
  </svg>`;
};

// Create placeholder images for our testimonials
const testimonials = [
  { name: 'Mr Sharafdin', color: '#3F72AF' }, // Primary color
  { name: 'Omar Tood', color: '#5E9A78' },    // Secondary color
  { name: 'Ismail Ainte', color: '#6B5B95' }  // Another complementary color
];

testimonials.forEach(person => {
  const fileName = person.name.toLowerCase().replace(' ', '');
  const svgContent = generatePlaceholderSVG(person.name, person.color);
  fs.writeFileSync(path.join(testimonialsDir, `${fileName}.svg`), svgContent);
  console.log(`Created placeholder for ${person.name}`);
});

console.log('All placeholder images generated successfully!'); 