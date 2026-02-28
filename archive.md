# Project Archive: Elite Partners Enterprise Portal

This document provides a brief overview of the website's architecture, key features, and file structure.

## 🏗️ Core Architecture
The application is built using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. It leverages a custom "Reflex Glass" design system for a high-end, enterprise-grade aesthetic.

## 📂 Key Files & Descriptions

### 🌐 Routing & Layout
- `src/app/page.tsx`: The primary landing page. It orchestrates the hero section, dynamic statistics, a rich services grid (including VoIP, CRM, and AI), and a secure contact portal.
- `src/app/layout.tsx`: Defines the root HTML structure, global fonts (Inter), and metadata.
- `src/app/globals.css`: Contains the Tailwind configuration, HSL theme variables, and custom glassmorphism utility classes (`.glass`, `.glass-morphism`, etc.).

### 🧩 UI Components
- `src/components/glass-card.tsx`: A polymorphic container that provides the signature backdrop blur and border effects.
- `src/components/glass-button.tsx`: An extension of the ShadCN button with specialized variants for primary, secondary, and accent glass styles.
- `src/components/number-ticker.tsx`: A custom hook-based component that animates numeric statistics for social proof.
- `src/components/theme-provider.tsx`: Manages theme persistence and platform-specific styling (iOS/Android/Web).

### 🤖 AI Functionality (Genkit)
- `src/ai/genkit.ts`: The central configuration for the Google Generative AI plugin.
- `src/ai/flows/ai-assistant-chatbot-flow.ts`: A server-side Genkit flow that acts as the knowledge base for the "Elite Assistant," trained on company service data.
- `src/components/ai-assistant.tsx`: The client-side floating chatbot UI that interacts with the Genkit flow.

### 🖼️ Asset Management
- `src/lib/placeholder-images.json`: A centralized registry of high-resolution Unsplash images used across the site.
- `src/lib/placeholder-images.ts`: A TypeScript utility to safely reference image assets throughout the application.

## 🛠️ Technology Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS + ShadCN UI
- **AI Engine**: Firebase Genkit + Google Gemini
- **Icons**: Lucide React
- **Animations**: Framer Motion principles (Tailwind Animate)

---
*Generated for Elite Partners Development Team.*