# SplitWisely — Standalone Bill Splitter & Tip Calculator

A polished, production-quality, responsive standalone bill splitter and tip calculator. Built with React, Vite, and Tailwind CSS, this app delivers a premium glassmorphic fintech user interface featuring real-time calculations, inline validations, custom presets, and responsive grid layouts.

### 🌐 Deployed Application URL
**Live Demo:** [https://dev-weekend-assinment.vercel.app/](https://dev-weekend-assinment.vercel.app/)

---

## 🚀 Key Features

*   **Premium Light Glassmorphism UI:** Elegant white glassmorphic card design (`bg-white/70 backdrop-blur-2xl`) featuring simulated edge refraction border overlays, ambient organic background floating blobs (`float-slow`), and a subtle SVG fractal paper-noise overlay.
*   **Real-time Computations:** Calculations update instantly as you type with smooth numeric interpolation (`AnimatedNumber.jsx`).
*   **INR Currency Support (₹):** Standardized currency formatting tailored to the Indian numbering system.
*   **Relaxed Input Sanitization & Cursor Stability:** Allows users to type negative signs (`-`), decimal points (`.`), and intermediate empty states naturally without aggressive key filtering or cursor jumping.
*   **Precise Inline Error Messaging:** Reserved vertical error layout prevents jarring layout shifts. Displays precise inline validation warnings (prefixed with `❌`) when inputs violate rules.
*   **Tactile Micro-interactions & Spring Physics:** 
    - Custom organic spring easing transition curves (`ease-spring`).
    - Active click scaling feedback (`active:scale-95`) on buttons.
    - Diagonal hover light sweep on the results panel.
    - Symmetrical `-45deg` hover rotation on the reset button icon.
    - High-contrast emerald-pulsing glow frame (`animate-pulse-glow`) to highlight the Per Person Share result.
*   **A11y Compliant:** Supports clear focus rings, screen reader roles, standard tabindex keyboard navigation, and proper aria labels.

---

## 🛠️ Tech Stack & Architecture

*   **Framework:** React 19 (Functional components, custom hooks, and memoized derived state)
*   **Build Tool:** Vite 8 (Ultra-fast HMR and bundling)
*   **Styling:** Tailwind CSS v4 (Using `@tailwindcss/vite` plugin for zero-config compilation)
*   **Icons:** Lucide React (Sleek vector icons)

### Directory Structure

```text
src/
├── components/
│   ├── BrandLogo.jsx      # Custom split-S geometric monogram logo component
│   ├── BillInput.jsx      # Bill amount input with currency prefix
│   ├── TipSelector.jsx    # Preset tip buttons and custom input selector
│   ├── PeopleInput.jsx    # Integer person count input
│   ├── ResultsPanel.jsx   # Results container with gradient borders and light sweep
│   └── ResetButton.jsx    # Tactile reset action button
├── hooks/
│   └── useTipCalculator.js# Encapsulates inputs, validations, and calculations
├── utils/
│   ├── calculations.js    # Safe mathematical computations
│   ├── formatters.js      # Indian Numbering System currency (₹) formatter
│   └── validators.js      # Validator thresholds and error messaging
├── App.jsx                # Main grid assembly and page layout
├── index.css              # Custom Tailwind configuration, keyframes, and global styles
└── main.jsx               # React entry point
```

---

## ⚙️ Installation & Running Locally

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone & Navigate
```bash
cd DevWeekendAssinment
```

### 2. Install Dependencies & Start Dev Server
To install dependencies and start the local development server in a single command:
```bash
npm install && npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
To bundle assets for production deployment:
```bash
npm run build
```
This generates optimized static files in the `/dist` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

### 5. Lint Check
```bash
npm run lint
```

---

## 🌐 Responsive Design Layouts

*   **Mobile (< 768px):** Components stack in a single-column layout, ensuring compact inputs and visible results above the fold. Inputs use touch-friendly virtual keyboards (`inputmode="decimal"` and `inputmode="numeric"`).
*   **Desktop (>= 768px):** Transforms into a two-column grid. Left column manages inputs; right column holds the premium results panel with responsive width layouts.
