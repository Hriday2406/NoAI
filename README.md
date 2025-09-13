# NoAI - React + TypeScript + Vite + TailwindCSS v4

A modern, production-ready React development environment featuring the latest versions of React, TypeScript, Vite, and TailwindCSS v4.

## 🚀 Technologies

- **React 19.1.1** - Latest React with improved performance and features
- **TypeScript 5.8.3** - Latest TypeScript for comprehensive type safety
- **Vite 7.1.5** - Lightning-fast development server and build tool
- **TailwindCSS 4.1.13** - Latest TailwindCSS v4 with enhanced features and performance
- **ESLint** - Code quality and consistency with React-specific rules

## ✨ Features

- ⚡ **Instant HMR** (Hot Module Replacement) for rapid development
- 🎨 **TailwindCSS v4** with the new simplified configuration system
- 📦 **Optimized production builds** with automatic code splitting
- 🔧 **TypeScript** with strict type checking for better code quality
- 🧹 **ESLint** configuration with React hooks and refresh plugins
- 🌙 **Dark/Light mode** support with responsive design utilities

## 🛠 TailwindCSS v4 Setup

This project uses TailwindCSS v4, which introduces several improvements over v3:

### Key Changes in v4:
- **Simplified CSS imports**: Uses `@import "tailwindcss"` instead of separate base/components/utilities
- **New PostCSS plugin**: Uses `@tailwindcss/postcss` for better Vite integration
- **Enhanced performance**: Faster builds and improved tree-shaking
- **Better TypeScript support**: Improved IntelliSense and type safety

### Configuration:
- **CSS**: TailwindCSS is imported via `@import "tailwindcss"` in `src/index.css`
- **PostCSS**: Configured in `postcss.config.js` with `@tailwindcss/postcss`
- **Content detection**: Automatically scans all `.html`, `.js`, `.ts`, `.jsx`, `.tsx` files

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd NoAI

# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Open your browser and navigate to http://localhost:5173/
```

The development server includes:
- ⚡ Lightning-fast HMR
- 🎨 Real-time TailwindCSS compilation
- 🔍 TypeScript error checking
- 🧹 ESLint integration

## 🏗 Building

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Production builds are optimized with:
- 📦 Automatic code splitting
- 🗜 CSS and JavaScript minification
- 🌳 TailwindCSS tree-shaking (unused styles removed)
- 📊 Bundle analysis and gzip size reporting

## 🧹 Code Quality

```bash
# Run ESLint
npm run lint

# Run TypeScript compiler check
npx tsc --noEmit
```

## 📂 Project Structure

```
NoAI/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── App.tsx            # Main application component
│   ├── App.css           # Component-specific styles
│   ├── index.css          # Global styles with TailwindCSS v4
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── postcss.config.js      # PostCSS configuration for TailwindCSS v4
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node-specific TypeScript config
└── eslint.config.js       # ESLint configuration
```

## 🎨 TailwindCSS v4 Usage Examples

The project includes examples of TailwindCSS v4 features:

```tsx
// Responsive design with hover effects
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
  Click me
</button>

// Dark mode support
<p className="text-gray-600 dark:text-gray-300">
  This text adapts to light/dark mode
</p>

// Flexbox layout utilities
<div className="flex justify-center items-center gap-4 mb-8">
  <img src={logo1} alt="Logo 1" />
  <img src={logo2} alt="Logo 2" />
</div>
```

## 🌟 Demo

The application includes a working counter demo showcasing:
- React state management with hooks
- TailwindCSS v4 styling with hover effects
- TypeScript integration
- Responsive design patterns

## 🔧 Configuration Details

### Vite Configuration
- React plugin with SWC for fast compilation
- TypeScript support with strict checking
- Development server with HMR
- Optimized production builds

### TailwindCSS v4 Configuration
- Automatic content detection from HTML and JavaScript files
- PostCSS integration with autoprefixer
- Tree-shaking for minimal production CSS
- Dark mode and responsive utilities enabled

### TypeScript Configuration
- Strict type checking enabled
- Modern ES modules and target
- React JSX transform
- Separate configs for app and Node.js code

### ESLint Configuration
- React hooks rules for proper hook usage
- React refresh rules for HMR compatibility
- TypeScript-aware linting
- Modern JavaScript features support

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Open browser**: Navigate to `http://localhost:5173/`
4. **Start coding**: Edit `src/App.tsx` and see changes instantly!

## 📝 Notes

- **TailwindCSS v4**: This project uses TailwindCSS v4, which is the latest stable version with significant improvements over v3
- **PostCSS Plugin**: Uses the new `@tailwindcss/postcss` plugin for better Vite integration
- **No JS Config**: TailwindCSS v4 eliminates the need for `tailwind.config.js` in simple setups
- **Performance**: Builds are optimized for production with minimal bundle sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
