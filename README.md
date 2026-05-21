# SplitWisely — Premium Tip Calculator & Bill Splitter

A polished, production-quality, responsive tip calculator and bill splitter web application. Built with React, Vite, and Tailwind CSS, this app delivers a smooth, native-feeling SaaS user interface featuring real-time calculations, inline validations, custom presets, and responsive grid layouts.

---

## 🚀 Live Demo & Key Features

*   **Real-time Computations:** Calculations update instantly as you type. No clunky "Calculate" buttons.
*   **INR Currency Support (₹):** Standardized currency formatting tailored to the Indian numbering system.
*   **Robust Input Sanitization:** Gracefully rejects negative inputs, letters, or multiple decimals in real-time.
*   **Smart Tip Selector:** Select standard percentages (10%, 15%, 20%, 25%) or input a custom value. Preset choices clear custom values automatically, and vice-versa.
*   **Layout Shift Prevention:** Validation error slots are vertically reserved to prevent jarring layout jumps during typing.
*   **Aesthetic Visuals:** Built with a dark mode glassmorphism card theme, ambient glowing backdrops, and interactive micro-animations.
*   **A11y Compliant:** Supports clear focus rings, screen reader roles, standard tabindex keyboard navigation, and proper labels.

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
│   ├── BillInput.jsx      # Bill amount input with currency prefix
│   ├── TipSelector.jsx    # Buttons grid and custom tip percentage input
│   ├── PeopleInput.jsx    # Integer person count input
│   ├── ResultsPanel.jsx   # Glow card displaying split totals
│   └── ResetButton.jsx    # Interactive calculator reset action
├── hooks/
│   └── useTipCalculator.js# Encapsulates inputs, validations, and calculations
├── utils/
│   ├── calculations.js    # Pure math computations
│   ├── formatters.js      # Indian Numbering System currency (₹) formatter
│   └── validators.js      # Validator thresholds and error messaging
├── styles/
│   └── index.css          # Tailwind imports, custom scrollbar and focus styles
├── App.jsx                # Main grid assembly and page header/footer
└── main.jsx               # React entry point
```

---

## ⚙️ Installation & Running Locally

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone & Navigate
```bash
cd DevWeekendAssinment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
To bundle assets for production deployment:
```bash
npm run build
```
This generates optimized static files in the `/dist` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

### 6. Lint Check
```bash
npm run lint
```

---

## 🌐 Responsive Design Layouts

*   **Mobile (< 768px):** Components stack in a single-column layout, ensuring compact inputs and visible results above the scroll line. Inputs use touch-friendly virtual keyboards (`inputmode="decimal"` and `inputmode="numeric"`).
*   **Desktop (>= 768px):** Transforms into a two-column grid. Left column manages inputs; right column holds a sticky results panel with glowing ambient circles, matching standard dashboard design patterns.
