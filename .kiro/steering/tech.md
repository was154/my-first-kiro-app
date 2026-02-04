# Technology Stack

## Frontend Architecture
- **HTML5** with semantic markup and Japanese language support
- **Vanilla JavaScript** (ES6+) for interactivity and data management
- **CSS3** with modern features (Grid, Flexbox, CSS Variables)
- **Font Awesome** for iconography
- **Google Fonts** (Noto Sans JP) for Japanese typography

## Build System
- **Static Site** - No build process required
- **Direct file serving** - Can be deployed to any static hosting

## Browser Support
- Modern browsers with ES6+ support
- Mobile-first responsive design
- Progressive enhancement approach

## Development Workflow

### Local Development
```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### File Structure
- `index.html` - Main application entry point
- `script.js` - Application logic and data
- `styles.css` - All styling and responsive design

## Code Conventions
- **Japanese content** in HTML with proper lang attributes
- **English** for code comments and technical documentation
- **Semantic HTML** structure with proper accessibility
- **Mobile-first** CSS approach
- **Progressive enhancement** JavaScript patterns

## Performance Considerations
- Minimal external dependencies
- Optimized images and assets
- Efficient DOM manipulation
- Lazy loading for course data pagination