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

*   I decided to go with React with Vite because it’s the front-end framework I am most comfortable with and Vite provides for a very fast development experience. I used Tailwind CSS because it was helpful for me to build the UI faster and maintain responsive styling easily.

*   As for the design, I wanted it to feel like a modern product UI and not a normal calculator. So I went for a clean glassmorphism style with soft gradients and spacing to make the interface feel premium but still easy to use.

*   One design decision I made was to always show the results panel, so users can see changes as they type, without a calculate button. Another option was to not have the UI jump when errors are present or removed, by reserving space for error messages during validation.

---

## 3. Responsive & Accessibility

*    The app is fully responsive. On smaller screens like mobile devices, the layout stacks vertically so the inputs and results are easy to read and use. On larger screens, the app switches to a two-column layout to use the space better and keep the results visible.

*    For mobile users, I used numeric input modes so phones automatically open the number keyboard when entering bill amounts, tip percentages, or people count.

*    For accessibility, all inputs and buttons are keyboard accessible using the Tab key, and I kept visible focus states so users can clearly see which field is active. I also added inline validation messages with `aria-invalid` and `aria-describedby` support to improve screen reader accessibility.

---

## 4. AI Usage

*    I used AI mainly to speed up development and structure some parts faster, especially for validation logic, component structure, and UI improvements. It helped me reduce repetitive coding work and iterate on the design more quickly.

*    I did not use AI blindly. I changed multiple parts of the generated code based on how I wanted the user experience and interactions to behave. For example, the initial validation logic showed errors too aggressively while typing, so I modified it to make the validation smoother and prevent flickering or layout shifts.

*    I mainly used AI as a coding partner to improve productivity and save time, while still making the final implementation decisions and changes myself.

---

## 5. Honest Gap & Future Improvements

### Current Limitation

*    Right now, the app only supports INR (₹). It works well for the current requirement, but a more complete version could support multiple currencies like USD, EUR, and GBP.

### Future Improvements

- Add a currency selector so users can switch between different currencies easily.
- Add custom bill splitting instead of equal splitting, so different people can pay different amounts.
- Save previous calculations using local storage.
- Add a share option using a link or QR code for easier bill sharing.

---

## 6. Rounding Policy

*    I used standard rounding to 2 decimal places for all currency values using JavaScript number formatting. Since currency values are usually shown with 2 decimal places, this felt like the most natural and user-friendly option for a tip calculator.

*    For example, if the per-person amount becomes ₹3.3333, the app displays it as ₹3.33.
