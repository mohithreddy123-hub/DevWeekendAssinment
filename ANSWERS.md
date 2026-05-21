# Project Q&A — Tip Calculator & Bill Splitter

---

## 1. How to Run

### Setup and Development
To install dependencies and start the development server:
```bash
# Install dependencies
npm install

# Start local server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Verification and Compilation
To run code quality validation and build optimization:
```bash
# Run lint checks
npm run lint

# Build production bundle
npm run build
```

---

## 2. Stack & Design Choices

### React + Vite Selection
*   **Vite:** Selected over legacy setups (like Create React App) because of its native ESM-based Hot Module Replacement (HMR). Cold server start and module transformations are nearly instantaneous, while Vite's Rollup configuration generates heavily optimized chunk splits for production.
*   **React 19:** Utilized functional components and standard hooks. React's unidirectional data flow allows us to hoist state and use `useMemo` for derived states, ensuring the UI remains highly performant and syncs in real-time without external state manager overhead.

### CSS Choice: Tailwind CSS v4
*   We adopted the brand-new **Tailwind CSS v4** featuring the `@tailwindcss/vite` compiler. Rather than relying on separate PostCSS wrappers, Tailwind v4 is integrated directly inside the Vite compilation pipeline, reducing build times. Config variables are defined natively inside `index.css` using the `@theme` directive, maintaining standard CSS conventions.

### Aesthetic Direction
*   **Premium Dark UI:** Designed a sleek SaaS dashboard aesthetic rather than a typical basic calculator. A neutral dark slate base (`#030712`) combined with glowing gradient radial backdrops, neon accents (indigo/emerald), and a semi-transparent glassmorphic container provides a high-fidelity visual experience.
*   **Layout Shift Prevention:** Empty error message elements often cause jarring visual shifts. To resolve this, validation errors are placed in fixed-height animation tracks, preventing the input forms or results card from jumping up and down when validation is triggered or cleared.

---

## 3. Responsive & Accessibility (A11y)

### Responsive Grid
*   **Flex-to-Grid Structure:** On small Viewports (under `768px`), the layout stacks vertically (`grid-cols-1`) so inputs and outcomes fit cleanly. On larger layouts, it transitions into an even `grid-cols-2` with equal height matching, making the results panel sticky and prominent.
*   **Virtual Keyboards:** Inputs are customized with `inputmode="decimal"` and `inputmode="numeric"` along with patterns (`[0-9.]*` and `[0-9]*`) to ensure mobile device keyboards automatically display numeric dialers, enhancing touch accessibility.

### Accessibility Design
*   **Keyboard Navigation:** All interactive elements (input fields, preset buttons, reset trigger) are fully keyboard-navigable via standard `Tab` sequences. Presets are semantically valid `<button>` tags rather than dummy styled `div` components.
*   **Focus Outline Rings:** Focus outlines are not disabled; they are replaced with custom focus rings (`focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-slate-950`) to keep focus visible for keyboard users while maintaining the dark styling.
*   **Screen Readers:** Added explicit `aria-invalid` and `aria-describedby` elements dynamically linked to validation error lines, notifying assistive technologies of form state updates. Semantic landmarks like `<main>`, `<section>`, and `<header>` are used.

---

## 4. AI Usage

*   **Scaffolding & Templates:** Used AI to bootstrap Vite project scaffolding commands, build the initial folder structures, and configure standard utilities.
*   **Component Modularity:** AI assisted in drafting structure separations for presentational components, helping us isolate validation constraints (`validators.js`) and mathematical computations (`calculations.js`) into pure helper functions.
*   **UI Iteration:** Iterated with the AI to refine input event handlers, ensuring the sanitizer handles duplicate decimal points or pasted text without causing rendering bugs.

---

## 5. Honest Gap & Future Enhancements

### Current Limitation: Fixed Currency
*   The application currently locks the input and outputs to **INR (₹)**. While ideal for the target requirement, a fully production-ready international app would support multiple currencies (USD, EUR, GBP) and dynamic live exchange rate conversion.

### Future Improvements
1.  **Multi-Currency Selector:** A dropdown menu allowing users to swap currencies, automatically adjusting formatting symbols.
2.  **Custom Split Splitting:** Currently, the bill is split equally among all people. A future release would allow users to assign unequal shares to individual guests (e.g., guest A ordered ₹800, guest B ordered ₹400).
3.  **Local Storage Cache:** Save calculations locally or share the split calculation details via an exportable URL query parameter or QR code.
