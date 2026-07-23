# Accredian Enterprise Landing Page Recreation

A responsive, high-performance clone of the Accredian Enterprise landing page, built as a technical assignment. This project demonstrates clean architecture, reusable components, and modern web development practices using Next.js.

----------------------------------------------------------

# Live Demo

**Vercel Deployment:** https://accredian-partial-clone-six.vercel.app/

**GitHub Repository:** https://github.com/dharanshetty05/accredian-partial-clone.git

----------------------------------------------------------

# Assignment Overview

The objective of this assignment was to recreate the Accredian Enterprise landing page using Next.js. The focus was on building a fully responsive, maintainable, and structured application rather than just a pixel-perfect visual copy. Emphasizing clean engineering practices, the project leverages Next.js App Router, modular UI components, separation of concerns (data vs. presentation), and internal API integrations.

----------------------------------------------------------

# Features Implemented

*   **Responsive Landing Page:** Fully functional across mobile, tablet, and desktop viewports.
*   **Navigation:** Sticky header with desktop and mobile (hamburger) navigation menus.
*   **Footer:** Comprehensive footer with structured links and company information.
*   **Reusable UI Components:** Modular components including Buttons, Cards, Accordions, Badges, and Section Headings.
*   **Internal API Integration:** Next.js Route Handlers supplying mock data for Statistics and FAQs.
*   **Smooth Section Navigation:** Clean organization of 12 distinct landing page sections.
*   **App Router Architecture:** Modern Next.js folder structure utilizing Server Components for performance.
*   **TypeScript:** Strong typing for components, API responses, and static data.
*   **Tailwind CSS:** Utility-first styling for rapid, responsive design implementation.
*   **Interactive Elements:** Client-side functionality for Mobile Navigation and FAQ accordions.

----------------------------------------------------------

# Tech Stack

*   **Languages:** TypeScript, HTML
*   **Frameworks:** Next.js 16 (App Router), React 19
*   **Libraries:** Lucide React (Icons), Framer Motion
*   **Styling:** Tailwind CSS 4
*   **Deployment:** Vercel
*   **Package Manager:** npm

----------------------------------------------------------

# Project Structure

The project follows a modular, feature-based architecture within the `src` directory to ensure scalability and maintainability:

```text
src/
├── app/
│   ├── api/          # Next.js Route Handlers (Internal mock APIs)
│   ├── layout.tsx    # Root application layout
│   └── page.tsx      # Main landing page assembling all sections
├── components/
│   ├── layout/       # Global structural components (Navbar, Footer, MobileNav)
│   ├── sections/     # Distinct, feature-specific landing page sections (Hero, FAQs, etc.)
│   └── ui/           # Atomic, reusable design system components (Button, Card, Accordion)
├── lib/
│   ├── data/         # Static fallback data and type definitions
│   ├── api.ts        # Fetch utilities for internal APIs
│   ├── constants.ts  # Global configuration variables
│   └── utils.ts      # Utility functions (e.g., Tailwind class merging)
└── types/            # Global TypeScript interfaces
```

This structure was chosen to strictly separate the presentation layer (UI components), the structural layer (layouts/sections), and the data layer (lib/api). It allows for easier testing, component reuse, and future scalability.

----------------------------------------------------------

# Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dharanshetty05/accredian-partial-clone.git
    cd accredian-partial-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Create a production build (Optional):**
    ```bash
    npm run build
    npm run start
    ```

==========================================================

# Approach Taken

My primary engineering goal was to build a system that is scalable and maintainable, rather than just a static HTML/CSS clone.

*   **Component-Driven Design:** I started by identifying atomic UI elements in the reference design (buttons, section headings, styled cards) and built them as generic, reusable components in `src/components/ui`. This ensured visual consistency and kept section components clean.
*   **App Router & Server Components:** I utilized the Next.js App Router (`app/` directory). Most section components are React Server Components by default, which reduces the client-side JavaScript bundle size. Only components that require interactivity (like the FAQ `Accordion` and `MobileNav`) are marked with `"use client"`.
*   **Data Separation:** To simulate a real-world enterprise application, hardcoded data was abstracted away from the UI components. Data is either stored in `src/lib/data` or served via API routes, then passed down as props.
*   **Responsive Strategy:** I adopted a mobile-first approach using Tailwind CSS. By defining base styles for mobile and layering `md:` and `lg:` utility classes, the application scales gracefully to larger screens without complex media queries.

==========================================================

# Architecture

*   **Server Components:** The main `page.tsx` and most sections (Hero, TrackRecord, etc.) are Server Components. They fetch data on the server and render static HTML.
*   **Client Components:** Interactivity is pushed to the leaves of the component tree. For example, `Navbar` is a Server Component, but it imports a client-side `MobileNav` for the hamburger menu functionality.
*   **Data Flow:** `page.tsx` is responsible for fetching required dynamic data (using `lib/api.ts`). It then passes this data down to the respective section components (e.g., `FAQs`, `TrackRecord`) via props.
*   **API Layer:** The `app/api/` directory acts as a mock backend, serving JSON data, which decoupling the frontend from potential future backend implementations.

==========================================================

# Mock API Integration

Next.js Route Handlers are used to simulate backend endpoints for selected sections (Statistics and FAQs), demonstrating how the UI can consume API-driven data.

1.  **`/api/stats`:** Returns statistics data used in the "Track Record" section.
2.  **`/api/faqs`:** Returns categorized frequently asked questions.

src/lib/api.ts provides strongly typed data access utilities used by Server Components. The project also exposes mock API endpoints through Next.js Route Handlers (/api/stats and /api/faqs) to demonstrate API integration.

==========================================================

# Responsiveness & Accessibility

*   **Responsiveness:** The layout relies heavily on CSS Grid and Flexbox via Tailwind. Standardized breakpoints are used consistently to switch from single-column mobile layouts to multi-column desktop layouts.
*   **Accessibility:** Semantic HTML tags (`<section>`, `<nav>`, `<main>`, `<footer>`) are used throughout. Interactive elements like buttons and accordion headers utilize proper tags to ensure baseline screen reader compatibility.

==========================================================

# AI Usage (MANDATORY)

During the development of this project, I utilized **Antigravity** (an advanced AI coding assistant based on Gemini) to accelerate the engineering process.

**Where AI helped me:**
*   **Scaffolding:** Generating the initial boilerplate for React components and standardizing the Next.js file structure.
*   **Tailwind Styling:** Translating visual reference concepts into initial Tailwind CSS utility classes, especially for complex CSS Grids.
*   **Data Migration:** Assisting in migrating hardcoded static arrays into the API route handlers and writing the corresponding TypeScript interfaces.
*   **Documentation:** Helping to draft sections of this README by summarizing the implemented architecture.

**What I modified, improved, and completed manually:**
*   **Architecture Decisions:** I dictated the strict separation between `ui`, `sections`, and `layout` components, and decided which components should be Server vs. Client components.
*   **Component Composition:** I manually refactored the AI-generated code to extract repetitive patterns into the `src/components/ui` directory (e.g., creating the reusable `Accordion` component from a monolithic FAQ block).
*   **Responsive Refinements:** The AI provided a baseline, but I manually adjusted padding, margins, and flex-wrapping across breakpoints to ensure the UI felt polished and not just "functional".
*   **API Integration:** I reviewed and refined the data flow, ensuring that page.tsx centrally fetches the required data and passes it to the appropriate components.
*   **Final Polishing & Code Cleanup:** I performed thorough code reviews, removed unused imports, fixed hydration errors, and ensured styling consistency across all 12 sections.

==========================================================

# Challenges

*   **Balancing API Integration and Simplicity:**  While introducing mock API routes, I ensured only the assignment-required sections consumed API data. Static configuration data (such as navigation and footer content) was intentionally kept local to avoid unnecessary complexity.
*   **Balancing Server vs. Client Components:** Deciding where to draw the line for `"use client"`. For example, I initially made entire sections Client Components to handle simple click states, but refactored to extract *only* the interactive pieces (like an Accordion item) into Client Components to keep the parent sections as Server Components for better performance.

==========================================================

# Future Improvements

Given more time, I would implement the following practical improvements:

*   **Lead Capture Backend:** Connect the "Apply Now" buttons to a functional API route that stores lead data in a database (e.g., PostgreSQL via Prisma) or forwards it to a CRM.
*   **CMS Integration:** Migrate the static data and API routes to a headless CMS (like Sanity or Contentful) to allow non-developers to update course details and FAQs.
*   **E2E Testing:** Add Cypress or Playwright tests to automatically verify critical user journeys, such as mobile navigation and FAQ toggling.
*   **Advanced Animations:** Integrate framer-motion more deeply for scroll-triggered reveal animations to enhance the "premium" feel of the enterprise page.

==========================================================

# Key Learnings

This project reinforced several key engineering concepts:

*   **App Router Data Fetching:** Mastering the pattern of fetching data in Server Components and passing it to Client Components only when necessary.
*   **Component Architecture:** The immense value of investing time early to build a robust `ui` component library, which exponentially speeds up the development of later sections.
*   **Responsible AI Integration:** Learning how to effectively direct AI tools to generate boilerplate and styling, while maintaining strict manual control over architectural design, data flow, and code quality.

==========================================================

# License

This project was created for educational purposes and as an internship assessment submission. All rights to the original Accredian design and branding remain with Accredian.
