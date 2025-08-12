# SkillLink Educational Platform

## Overview

SkillLink is a comprehensive educational platform that connects learners with tutors, events, courses, and workshops. The application is built as a full-stack web application with React frontend and Express backend, designed to facilitate educational connections and skill-building opportunities.

## Recent Changes (August 2025)

- **Complete UI Redesign**: All pages redesigned to match exact HTML specifications provided by user
- **Enhanced Home Page**: Added hero banner with carousel, tab navigation, and horizontal scrolling sections for Find a Tutor, Featured Events, Popular Courses, and Upcoming Workshops
- **Improved Search & Filtering**: Added comprehensive search functionality and filter dropdowns on all pages
- **Responsive Cards**: All content cards are clickable with hover animations and lead to detailed modal views
- **Fixed Technical Issues**: Resolved all LSP diagnostics and component import issues for optimal performance

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component library for consistent UI
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **API Design**: RESTful API with structured endpoints for tutors, events, courses, and workshops
- **Data Storage**: In-memory storage with interface abstraction for future database integration
- **Development**: Hot module replacement and live reloading via Vite integration

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Shared schema definitions between frontend and backend using Zod for validation
- **Tables**: Structured entities for tutors, events, courses, and workshops with proper relationships
- **Migration**: Drizzle Kit for database schema management and migrations

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives for accessibility
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Centralized layout component with consistent header and navigation
- **Modals**: Reusable detail modal system for displaying entity information
- **Search & Filter**: Integrated search functionality with sidebar filtering capabilities

### Development Workflow
- **Monorepo Structure**: Single repository with client, server, and shared code
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Hot Reloading**: Vite development server with Express API integration
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Headless UI components for accessibility and customization
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind integration
- **ESBuild**: Fast JavaScript bundler for server-side code

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Drizzle Kit**: Database migration and schema management
- **Neon Database**: Serverless PostgreSQL provider (configured but not yet implemented)
- **Zod**: Schema validation for type-safe data handling

### State Management and Data Fetching
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form handling with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Routing and Navigation
- **Wouter**: Lightweight router for React applications
- **React**: Core framework for building the user interface

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Conditional CSS class management
- **cmdk**: Command palette component for enhanced user experience