# Fashion Lookbook App

A mobile-first Vite React application for showcasing fashion looks with interactive product annotations, following a reel-like experience.

## Features

- Smooth reel-like section for showcasing videos and images
- Video preview with progress bar and mute/unmute controls
- Image preview with 5-second timer and progress indicator
- Product scrollbar at the bottom for videos
- Interactive annotation dots on images
- Product cards with shop functionality
- Swipe navigation (up/down for looks, left/right for previews)
- Mobile-first design with desktop responsiveness

## Implementation Approach

I built this project using Vite React for faster development and better performance. The implementation focuses on creating a smooth, reel-like experience similar to popular social media platforms, with special attention to product discovery through the scrollbar and annotation dots.

### Library Choices

- **Vite**: For faster development and optimized builds
- **React**: Component-based architecture for UI development
- **Swiper**: Handles both horizontal and vertical swipe gestures
- **Framer Motion**: Provides smooth animations for product cards and interactions
- **React Player**: Manages video playback with mute/unmute controls
- **React Circular Progressbar**: Creates clean progress indicators for images
- **React Icons**: Consistent icon usage throughout the app
- **Bootstrap**: Basic responsive grid and styling components

### Project Structure

The app is organized into modular components:
- `Lookbook`: Main container component
- `ReelViewer`: Handles both video and image previews
- `ProductScrollbar`: Horizontal scrollable product list for videos
- `ProductCard`: Detailed product information overlay

## How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Unzip the project files
2. Navigate to the project directory
```
cd lookbook-app
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm run dev
```

5. Open your browser to http://localhost:5173

## Build for Production

```
npm run build
```

The build output will be in the `dist` directory, ready for deployment.
# Frontend-Machine-Coding-Submission
