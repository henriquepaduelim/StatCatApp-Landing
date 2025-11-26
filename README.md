# StatCat Landing Page Template

This is a high-conversion, professional landing page template built with Next.js and Tailwind CSS. It is designed to be easily customizable for any sports club, business, or application.

## Features

- **Fully Responsive:** Mobile-first design that looks great on all devices.
- **Component-Based:** Built with modern React components for each section.
- **Easy Customization:** All content and styling are centralized for quick and easy changes.
- **Next.js 14:** Utilizes the latest features of the Next.js App Router.
- **Tailwind CSS:** Styled with a utility-first CSS framework for maximum flexibility.
- **Video Background:** Engaging hero section with a video background.
- **Ready to Deploy:** One-click deploy with Vercel.

---

## Getting Started

### 1. Installation

First, clone the repository and navigate into the project directory. Then, install the necessary dependencies.

```bash
git clone <your-repo-url>
cd statcat-landing
npm install
```

### 2. Running the Development Server

To see the site in action on your local machine, run the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Customization Guide

This template is designed to be easily customized. All user-editable content is located in just two main places: `src/content.ts` and `tai  lwind.config.ts`.

### 1. Editing Text Content

All text content for the landing page (titles, subtitles, button text, FAQ items, etc.) is located in:
`src/content.ts`

Open this file and you will see a large JavaScript object. Simply find the text you want to change and edit it.

**Example: Changing the Hero Title**

Open `src/content.ts` and find the `hero` section:

```javascript
// src/content.ts

export const content = {
  hero: {
    title: "The All-In-One Platform to Manage, Train, and Grow Your Club", // <-- EDIT THIS LINE
    subtitle: "Your subtitle here...",
    // ...
  },
  // ...  
};
```

After saving the file, your development server will automatically reload with the new text.

### 2. Changing Colors and Styles (Theming)

All colors and fonts are controlled by the Tailwind CSS configuration file:
`tailwind.config.ts`

**Changing Colors:**

Find the `colors` object within the `theme.extend` section. You can change the hex codes for `navy`, `teal`, and the `warm-gray` palette to match your brand.

```javascript
// tailwind.config.ts

// ...
      colors: {
        navy: "#272727", // <-- EDIT THIS
        teal: "#fed766", // <-- EDIT THIS
        "warm-gray-50": "#F9FAFB",
        // ...
      },
// ...
```

**Changing Fonts:**

The template uses Google Fonts, configured in `src/app/layout.tsx`. To change the fonts:
1.  Go to [Google Fonts](https://fonts.google.com/) and choose your desired fonts.
2.  In `layout.tsx`, import your new fonts and assign them to CSS variables.
3.  In `tailwind.config.ts`, update the `fontFamily` object to use your new font variables.

### 3. Replacing Media (Video and Images)

All static media is located in the `public/` directory.

- **Hero Video:** To replace the background video, simply replace the file at `public/videos/hero-video.mp4` with your own video file. **It is highly recommended to compress your video for faster page loads.**
- **Logos and Images:** To add logos for the "Trusted By" section or screenshots for placeholders, add your images to the `public/` folder (e.g., `public/logos/client-logo.png`) and update the path in the `src/content.ts` file.

---

## Deployment

The easiest way to deploy this template is with **Vercel**.

1.  **Sign Up:** Create an account on [Vercel](https://vercel.com) and connect it to your Git provider (GitHub, GitLab, etc.).
2.  **Import Project:** From your Vercel dashboard, click "Add New... > Project" and import the repository for this template.
3.  **Configure Environment Variables:** If you are using Google Analytics, add your Measurement ID in the project settings under "Environment Variables".
    - **Name:** `NEXT_PUBLIC_GA_ID`
    - **Value:** `G-XXXXXXXXXX`
4.  **Deploy:** Click the "Deploy" button. Vercel will automatically detect the Next.js framework and configure the build settings. Your site will be live in minutes!