# Artisan Aperture - Photography Portfolio Website

## Table of Contents

1.  [Introduction](#introduction)
2.  [Features](#Features)
3.  [Technology Stack](#technology-stack)
4.  [Project Structure](#project-structure)
5.  [Setup and Installation](#setup-and-installation)
6.  [Running the Project](#running-the-project)
7.  [Pages Overview](#pages-overview)
    *   [Home Page (`pages/index.vue`)](#home-page-pagesindexvue)
    *   [Portfolio Page (`pages/portfolio.vue`)](#portfolio-page-pagesportfoliovue)
    *   [About Page (`pages/about.vue`)](#about-page-pagesaboutvue)
    *   [Services Page (`pages/services.vue`)](#services-page-pagesservicesvue)
    *   [Contact Page (`pages/contact.vue`)](#contact-page-pagescontactvue)
8.  [Key Components (Assumed)](#key-components-assumed)
    *   [Navbar](#navbar)
9.  [Customization](#customization)
    *   [Content Updates](#content-updates)
    *   [Styling](#styling)
10. [Potential Improvements & TODOs](#potential-improvements--todos)

## 1. Introduction

Artisan Aperture is a modern, responsive, and visually appealing website template designed for photographers to showcase their work, offer services, and connect with potential clients. It features a clean design with elegant typography and smooth transitions, built using Vue.js (likely Nuxt.js) and Tailwind CSS.

## 2. Features

*   **Homepage:** 
    Engaging hero section with an auto-advancing image slideshow and a showcase of featured works.
*   **Portfolio Gallery:**
    *   Categorized image gallery.
    *   Interactive filtering by category.
    *   Lightbox feature for viewing full-size images.
    *   Hover effects on gallery items.
*   **About Page:**
    *   Photographer's biography section.
    *   Placeholder for an Instagram feed.
*   **Services Page:**
    *   Detailed listing of photography services with descriptions, features, and pricing.
    *   "Book Now" call-to-action linking to the contact page.
    *   Option to download a full pricing guide (PDF).
*   **Contact Page:**
    *   User-friendly contact form.
    *   Display of contact information (location, email, phone).
    *   Social media links.
    *   Embedded Google Maps for location.
*   **Responsive Design:** Optimized for various screen sizes (desktop, tablet, mobile).
*   **Modern UI/UX:** Smooth transitions, hover effects, and a clean aesthetic.

## 3. Technology Stack

*   **Vue.js 3:** (Likely with Nuxt.js, inferred from `<NuxtLink>` and `pages` directory structure) for the frontend framework.
*   **TypeScript:** For type safety and improved developer experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Vite (likely, if Nuxt 3):** For fast development server and build tooling.

## 4. Project Structure

The project follows a standard Nuxt 3 directory structure:

```
artisan-aperture/
├── .nuxt/                # Nuxt build directory (auto-generated)
├── .output/              # Nuxt server output directory (auto-generated for `nuxt build`)
├── assets/               # Uncompiled assets (e.g., global CSS, SASS files - if any)
├── components/           # Reusable Vue components (e.g., Navbar.vue)
├── layouts/              # Layout components (e.g., default.vue - if used, Nuxt provides a default)
├── node_modules/         # Project dependencies (managed by npm/yarn)
├── pages/                # Application views and routes (Vue components)
│   ├── index.vue         # Homepage (/)
│   ├── about.vue         # About Me page (/about)
│   ├── portfolio.vue     # Portfolio gallery page (/portfolio)
│   ├── services.vue      # Services offered page (/services)
│   └── contact.vue       # Contact page (/contact)
├── public/               # Static assets directly served from the root
│   ├── images/           # Image assets for the site (hero, portfolio, etc.)
│   │   ├── hero-1.jpg
│   │   ├── portfolio/
│   │   └── ...
│   └── pricing-guide.pdf # Example PDF asset
├── app.vue               # Main App root component (Nuxt 3 standard)
├── nuxt.config.ts        # Nuxt.js configuration file
├── package.json          # Project dependencies and npm scripts
├── tailwind.config.js    # Tailwind CSS configuration (if customizing beyond defaults)
├── tsconfig.json         # TypeScript configuration (standard for Nuxt TS projects)
└── README.md             # This documentation file
```

## 5. Setup and Installation

1.  **Prerequisites:**
    *   Node.js (LTS version recommended)
    *   npm or yarn

2.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd artisan-aperture
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Set up environment variables (if any):**
    *   Create a `.env` file if needed for API keys or other configurations.

## 6. Running the Project

*   **Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the development server, typically at `http://localhost:3000`.

*   **Build for Production:**
    ```bash
    npm run build
    # or
    yarn build
    ```

*   **Preview Production Build (if Nuxt.js):**
    ```bash
    npm run preview
    # or
    yarn preview
    ```

## 7. Pages Overview

### Home Page (`pages/index.vue`)

*   **Purpose:** Serves as the landing page, introducing the photographer and their style.
*   **Key Sections:**
    *   **Hero Section:** Full-screen auto-advancing slideshow of images with a title, tagline, and a "View Portfolio" call-to-action button.
    *   **Featured Works:** A grid display of selected photographs, highlighting key projects or styles.
*   **Data:**
    *   `slides`: Array of objects for hero slideshow images and titles.
    *   `featuredWorks`: Array of objects for featured work items (id, title, category, image).
*   **Functionality:**
    *   Automatic slideshow progression.
    *   Hover effects on featured works to show title and category.

### Portfolio Page (`pages/portfolio.vue`)

*   **Purpose:** Showcases the photographer's full collection of work, filterable by category.
*   **Key Sections:**
    *   **Portfolio Header:** A prominent title and introductory text.
    *   **Filter Buttons:** Buttons for each category (e.g., "All", "Weddings", "Portraits") to filter the gallery.
    *   **Gallery Grid:** A responsive grid displaying thumbnail images.
    *   **Lightbox:** A modal overlay to display a larger version of the selected image.
*   **Data:**
    *   `selectedCategory`: Reactive variable to store the currently active filter.
    *   `selectedImage`: Reactive variable to store the image data for the lightbox.
    *   `categories`: Array of strings for filter button labels.
    *   `gallery`: Array of objects, each representing a photo with id, title, category, and image path.
*   **Functionality:**
    *   Filters gallery items based on `selectedCategory`.
    *   Opens a lightbox when an image is clicked.
    *   Closes the lightbox when clicked outside the image or on the close button.
    *   Hover effects on gallery items to show title and category.

### About Page (`pages/about.vue`)

*   **Purpose:** Provides background information about the photographer.
*   **Key Sections:**
    *   **About Header:** Title and tagline.
    *   **Bio Section:** A two-column layout with a profile image and a detailed biography.
    *   **Instagram Feed:** A section to display recent Instagram posts (currently uses static data).
*   **Data:**
    *   `instagramPosts`: Array of objects for static Instagram post data (id, image, caption).
*   **Placeholders:**
    *   `[Your Name]` in the bio should be personalized.
    *   Instagram username in the "Follow on Instagram" link.
    *   Instagram feed is static; could be integrated with the Instagram API.

### Services Page (`pages/services.vue`)

*   **Purpose:** Details the photography services offered, including features and pricing.
*   **Key Sections:**
    *   **Services Header:** Title and introductory text.
    *   **Services List:** A grid of cards, each representing a service package. Each card includes an image, title, description, list of features, price, and a "Book Now" button.
    *   **Pricing PDF Download:** A section encouraging users to download a comprehensive pricing guide.
*   **Data:**
    *   `services`: Array of objects, each detailing a service (id, title, description, image, price, features).
*   **Functionality:**
    *   "Book Now" buttons link to the `/contact` page.
    *   "Download PDF" link allows users to download `pricing-guide.pdf`.

### Contact Page (`pages/contact.vue`)

*   **Purpose:** Allows users to get in touch with the photographer.
*   **Key Sections:**
    *   **Contact Header:** Title and introductory text.
    *   **Contact Form:** Fields for Name, Email, Subject, and Message.
    *   **Contact Information:** Displays location, email, and phone number.
    *   **Social Media Links:** Icons linking to social media profiles (Instagram, Facebook, Twitter).
    *   **Google Maps:** Embedded map showing the photographer's location (or service area).
*   **Data:**
    *   `form`: Reactive object to hold form input values (name, email, subject, message).
*   **Functionality:**
    *   `handleSubmit`: A function that currently logs form data to the console and shows an alert. This should be integrated with a backend service or email API for actual form submission.
*   **Placeholders:**
    *   Social media profile URLs (`yourusername`).
    *   Contact details (address, email, phone).
    *   Google Maps embed URL.

## 8. Key Components (Assumed)

### Navbar

*   A `Navbar` component is referenced in all page templates (`<Navbar />`).
*   The code for this component was not provided but is crucial for site navigation.
*   It likely contains links to Home, Portfolio, About, Services, and Contact pages.

## 9. Customization

### Content Updates

*   **Text:** Most text content (titles, paragraphs, descriptions) can be directly edited within the `<template>` section of the respective `.vue` files.
*   **Images:**
    *   Image paths are specified in the `<script setup lang="ts">` section (e.g., `gallery`, `slides`, `featuredWorks`, `services`, `instagramPosts`) or directly in the `<template>` (e.g., profile image in `about.vue`).
    *   Ensure new images are placed in the `public/images/` directory (or as configured) and paths are updated accordingly.
*   **Portfolio Items (`portfolio.vue`):** Modify the `gallery` array in the script section.
*   **Services (`services.vue`):** Modify the `services` array.
*   **Featured Works (`index.vue`):** Modify the `featuredWorks` array.
*   **Hero Slides (`index.vue`):** Modify the `slides` array.
*   **Instagram Posts (`about.vue`):** Modify the `instagramPosts` array. For a dynamic feed, an API integration is needed.
*   **Contact Information & Social Links (`contact.vue`):** Update directly in the template or script.
*   **Pricing Guide (`services.vue`):** Replace `public/pricing-guide.pdf` with your actual guide.

### Styling

*   **Tailwind CSS:** Most styling is done using Tailwind CSS utility classes directly in the `<template>` of each component. Refer to the Tailwind CSS Documentation for available classes.
*   **Custom Fonts:**
    *   The project uses 'Playfair Display' and 'Open Sans'. These are defined via scoped CSS in each component:
        ```css
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-opensans {
          font-family: 'Open Sans', sans-serif;
        }
        ```
    *   Ensure these fonts are properly imported/linked in your project (e.g., via a global CSS file or a Nuxt config).
*   **Global Styles:** For styles that apply across the entire application (like font imports or base styles), consider adding them to a global CSS file (e.g., `assets/css/main.css`) and importing it in your Nuxt config or main entry point.

## 10. Potential Improvements & TODOs

*   **Navbar Component:** Document and include the `Navbar.vue` component if it exists.
*   **Global CSS for Fonts:** Move the `.font-playfair` and `.font-opensans` class definitions to a global CSS file (e.g., in `assets/css/`) to avoid repetition and improve maintainability.
*   **Contact Form Submission:** Implement actual backend logic for the contact form (e.g., using an email service like SendGrid, or a serverless function). Currently, it only logs to the console.
*   **Dynamic Instagram Feed:** Integrate with the Instagram Basic Display API to fetch and display recent posts dynamically instead of using static data.
*   **CMS Integration:** For easier content management by non-developers, consider integrating a headless CMS (e.g., Strapi, Contentful, Sanity).
*   **Image Optimization:** Implement image optimization strategies (e.g., using Nuxt Image for Nuxt.js projects, or other tools) to ensure fast load times.
*   **Accessibility (a11y):** Review and enhance accessibility, ensuring proper ARIA attributes, keyboard navigation, and color contrast.
*   **SEO Optimization:** Implement SEO best practices (meta tags, structured data). Nuxt.js offers good support for this.
*   **Error Handling:** Add more robust error handling, especially for API calls or form submissions.
*   **Loading States:** Implement loading indicators for data fetching or image loading to improve UX.
*   **Testing:** Add unit and end-to-end tests.
*   **Type Definitions:** Create more specific type definitions for props and data structures (e.g., `GalleryItem`, `Service`, `Slide`) for better TypeScript integration.

---