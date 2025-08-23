# CHICKS GOLD - Gaming Marketplace Frontend

A responsive, modern gaming marketplace frontend application built with React and TypeScript. This project demonstrates advanced frontend development skills including pure CSS styling, responsive design, and component architecture.

## 🎮 Project Overview

CHICKS GOLD is a mock gaming marketplace that showcases various gaming items, currencies, and services. The application features a clean, professional design with interactive elements including dropdown navigation, product filtering, search functionality, and a responsive product grid.

## ✨ Features

### Core Functionality
- **Product Catalog**: Display of gaming items with pricing, descriptions, and stock status
- **Advanced Filtering**: Game selection, price ranges, and item type filtering
- **Search System**: Real-time search functionality across products
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Dropdown menus with hover effects
- **Shopping Cart**: Cart functionality with quantity selection
- **Pagination**: Multi-page product browsing

### Design Elements
- **Pure CSS Styling**: No external CSS frameworks used
- **Modern UI/UX**: Clean, professional gaming marketplace aesthetic
- **Consistent Card Proportions**: Maintained across all screen sizes
- **Interactive Elements**: Hover effects, dropdowns, and smooth transitions
- **Game-Themed Assets**: Custom gaming item images and icons

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 4.9.5
- **Styling**: Pure CSS (No frameworks)
- **Icons**: React Icons 5.5.0
- **Build Tool**: Create React App 5.0.1
- **Testing**: Jest & React Testing Library

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Astravexx/chicksgold-frontend-test.git
   cd chicksgold-frontend-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run start` - Runs the app in development mode
- `npm run test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Desktop**: Full navigation with dropdown menus and side-by-side filters
- **Tablet**: Optimized layout with stacked filters and adjusted navigation
- **Mobile**: Mobile-first approach with collapsible navigation and touch-friendly controls

## 🎨 Design Choices

### Pure CSS Implementation
- **No External Frameworks**: Demonstrates mastery of fundamental CSS concepts
- **Custom Components**: All UI elements built from scratch
- **Flexbox & Grid**: Modern CSS layout techniques for responsive design
- **CSS Variables**: Consistent theming and maintainable styles

### Component Architecture
- **Modular Design**: Reusable components with clear separation of concerns
- **TypeScript Interfaces**: Strong typing for product data and component props
- **State Management**: Local state management using React hooks
- **Event Handling**: Smooth interactions with proper event management

### Asset Substitution
- **Gaming Theme**: RuneScape-inspired items and terminology
- **Custom Images**: Placeholder images representing gaming items
- **Icon Integration**: React Icons for consistent iconography
- **Brand Identity**: CHICKS GOLD branding throughout the interface

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and user controls
│   ├── MainContent.tsx # Main product catalog and filters
│   ├── ProductCard.tsx # Individual product display
│   ├── Footer.tsx      # Site footer
│   └── Icon.tsx        # Icon wrapper component
├── App.tsx             # Main application component
├── App.css             # Global application styles
└── index.tsx           # Application entry point
```

## 🔧 Technical Implementation

### State Management
- **React Hooks**: useState for local component state
- **Event Handling**: Mouse events for dropdown interactions
- **Form Controls**: Controlled inputs for search and filtering

### Performance Considerations
- **Efficient Rendering**: Optimized component re-renders
- **Image Optimization**: Proper image sizing and loading
- **Smooth Animations**: CSS transitions for better UX

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Accessible dropdown interactions
- **Screen Reader Support**: Alt text and ARIA labels

## 📋 Challenge Requirements Met

 **Technology Stack**: ReactJS with TypeScript  
 **Pure CSS**: No style frameworks used  
 **Responsive Design**: Mobile, tablet, and desktop views  
 **Card Proportions**: Consistent dimensions across screen sizes  
 **Mock Design**: Gaming marketplace theme with substitute assets  
 **Code Organization**: Well-structured, documented components  
 **Documentation**: Comprehensive README with setup instructions  

## 🎯 Future Enhancements

- **API Integration**: Connect to backend services
- **User Authentication**: Login/signup functionality
- **Real-time Updates**: Live inventory and pricing
- **Advanced Filtering**: More sophisticated search algorithms
- **Performance Optimization**: Lazy loading and code splitting

**Deployed URL**: chicksgold-frontend-test.vercel.app

**Note**: This is a mock application designed to showcase frontend development skills. No real transactions or data persistence is implemented.
