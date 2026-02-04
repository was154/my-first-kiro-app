# Project Structure

## File Organization

```
/
├── index.html          # Main application page
├── script.js           # Application logic and course data
├── styles.css          # All styling and responsive design
├── .kiro/              # Kiro configuration
│   └── steering/       # Project steering documents
├── .vscode/            # VS Code configuration
└── .git/               # Git repository
```

## Code Architecture

### HTML Structure (`index.html`)
- **Header**: Fixed navigation with brand and menu links
- **Hero Section**: Main landing area with statistics and CTA
- **About Section**: Project description and feature cards
- **Courses Section**: Paginated course grid with filtering
- **Features Section**: Information about course elements
- **Footer**: Links and additional information

### JavaScript Architecture (`script.js`)
- **Data Layer**: `coursesData` array with all course information
- **Pagination Logic**: Course display management
- **Event Handlers**: User interaction management
- **Utility Functions**: Search, favorites, statistics
- **Animation Controllers**: Scroll effects and transitions

### CSS Architecture (`styles.css`)
- **Reset & Base**: Global styles and typography
- **Component Styles**: Modular component styling
- **Layout Systems**: Grid and flexbox layouts
- **Responsive Design**: Mobile-first media queries
- **Animations**: Transitions and keyframe animations

## Content Management

### Course Data Structure
Each course contains:
- `id`: Unique identifier
- `name`: Course name in Japanese
- `distance`: Walking distance
- `start/goal`: Station information
- `location`: Geographic coverage
- `mysteries`: Number of puzzle elements
- `description`: Course overview

### Styling Conventions
- **BEM-like naming**: `.component-element--modifier`
- **CSS Custom Properties**: For consistent theming
- **Mobile-first**: Base styles for mobile, enhanced for desktop
- **Component isolation**: Self-contained styling blocks