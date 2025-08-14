# Portfolio Website

## Overview

This is a professional portfolio website for Ranga Pavan Shasam, a Software Development Engineer in Test II. The application showcases professional experience, skills, education, and provides contact information through a modern, responsive single-page application built with React and TypeScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Component Structure
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Portfolio Sections**: Modular components for each portfolio section (Hero, About, Experience, Skills, Education, Contact)
- **Navigation**: Responsive navigation with smooth scrolling between sections
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **File Serving**: Static file serving for resume downloads
- **Development**: Hot module replacement and development middleware via Vite integration
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management schema with Zod validation
- **Migration**: Database migrations managed through Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL connection

### Design System
- **Component Library**: shadcn/ui with "new-york" style variant
- **Theme**: Custom CSS variables for consistent color scheme and typography
- **Typography**: Inter font family with Google Fonts integration
- **Icons**: Lucide React icons with React Icons for brand-specific icons

### Development Workflow
- **Type Safety**: Strict TypeScript configuration across client and server
- **Path Aliases**: Organized import paths with @ prefix for client code
- **Hot Reload**: Development server with instant feedback
- **Error Handling**: Runtime error overlay for development debugging

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management
- **connect-pg-simple**: PostgreSQL session store integration

### UI & Styling
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Pre-built component library with consistent design system
- **Google Fonts**: Web font delivery for Inter typography

### Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TanStack Query**: Server state management and caching solution

### Replit Integration
- **Development Banner**: Replit-specific development environment integration
- **Runtime Error Modal**: Enhanced error reporting in Replit environment
- **Cartographer Plugin**: Development tooling for Replit projects