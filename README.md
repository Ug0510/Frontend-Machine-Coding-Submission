# Frontend-Machine-Coding-Submission ( Lookbook web app)

A modern, mobile-first React application for showcasing fashion looks with interactive product annotations and a smooth reel-like experience.

## Project Overview

This project is a frontend implementation of a fashion e-commerce lookbook that allows users to browse through fashion looks (images and videos), interact with product annotations, and navigate to product detail pages. The application is built with a focus on smooth transitions, clean UI, and responsive design.

## Features

- **Reel-like Experience**: Smooth vertical scrolling between looks and horizontal navigation between previews
- **Video & Image Support**: 
  - Videos play in loop and only change when swiped
  - Images display for 5 seconds with progress indicator
  - Only the video in the current view plays automatically
- **Product Discovery**:
  - Interactive annotation dots on images
  - Scrollable product cards at the bottom
  - Product detail cards with shop functionality
- **Navigation & Interaction**:
  - Swipe up/down for next/prev look
  - Tap left/right to navigate between previews
  - Mute/unmute controls for videos
- **Modern UI Elements**:
  - Fixed transparent header
  - Animated like/save buttons
  - Toast notifications
  - Clean product cards

## Technical Decisions

### Library Choices

I selected specific libraries to address key requirements while keeping the project simple and maintainable:

1. **Vite**: Chosen over Create React App for faster development experience and better performance. Vite's hot module replacement and optimized build process significantly improved development speed.

2. **React Router DOM**: Implemented for handling navigation between the lookbook and product detail pages. This provides a clean way to manage routes and pass product IDs as parameters.

3. **Swiper**: Selected for handling both vertical and horizontal swipe gestures. After evaluating several options, Swiper provided the best combination of smooth animations, touch support, and customization options.

4. **Framer Motion**: Used for animations and transitions. This library offers a simple API for creating complex animations while maintaining good performance on mobile devices.

5. **React Player**: Implemented for video handling with features like mute/unmute, autoplay control, and loop functionality. This was chosen over HTML5 video for its cross-browser compatibility and event handling.

6. **React Circular Progressbar**: Used for the timer indicators on image previews. This provides a clean, customizable circular progress indicator that matches the design requirements.

7. **React Icons**: Utilized for consistent icon usage throughout the app, providing a wide selection of icons that can be easily styled.

### Architecture Decisions

The application follows a component-based architecture with clear separation of concerns:

- **Data Management**: Sample product and look data is stored in a centralized data.js file, making it easy to replace with API calls in the future
- **Component Structure**: 
  - Lookbook (main container)
  - ReelViewer (handles both video and image previews)
  - ProductScrollbar (horizontal scrollable product list)
  - ProductCard (product information overlay)
  - ProductDetailPage (dedicated product page)
  - Header (fixed transparent navigation)

### UI/UX Considerations

- **Mobile-First Design**: All components are designed for mobile first approach
- **Performance Optimization**: Videos only play when in view to conserve bandwidth and battery
- **Interaction Feedback**: Animations and toasts provide clear feedback for user actions
- **Accessibility**: Proper contrast ratios and interactive elements sized for touch

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository or unzip the project files
```
git clone https://github.com/Ug0510/Frontend-Machine-Coding-Submission.git
```

2. Navigate to the project directory
```
cd Frontend-Machine-Coding-Submission
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm run dev
```

5. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

### Adding Your Content

1. Add your video files to the `public/videos/` directory
2. Add your image files to the `public/images/` directory
3. Update the data structure in `src/data/data.js` with your content information

## Build for Production

```
npm run build
```

The build output will be in the `dist` directory, ready for deployment.


## Project Structure

```
lookbook-app/
├── public/
│   ├── images/       # Product and look images
│   └── videos/       # Look videos
├── src/
│   ├── components/   # React components
│   ├── data/         # Sample data
│   ├── assets/       # Static assets
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Application entry point
└── README.md         # Project documentation
```
