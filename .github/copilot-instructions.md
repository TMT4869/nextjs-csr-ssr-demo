# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js project designed to demonstrate and compare Client Side Rendering (CSR) vs Server Side Rendering (SSR) techniques.

## Project Structure
- `/src/app` - App Router pages and components
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and helpers
- `/src/types` - TypeScript type definitions

## Key Technologies
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- React Server Components
- Client Components

## Coding Guidelines
1. Use TypeScript for all components and utilities
2. Follow Next.js 14 App Router conventions
3. Clearly distinguish between Server Components and Client Components
4. Use proper TypeScript types for all props and data
5. Implement responsive design with Tailwind CSS
6. Follow React best practices for component composition
7. Use descriptive component and function names
8. Add proper comments explaining CSR vs SSR implementations

## Demo Pages
- CSR demo pages should use 'use client' directive
- SSR demo pages should be Server Components by default
- Include performance metrics and loading states
- Show practical examples of when to use each approach
