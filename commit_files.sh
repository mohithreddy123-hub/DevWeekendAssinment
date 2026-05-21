#!/bin/bash

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/mohithreddy123-hub/DevWeekendAssinment
    git branch -M main
fi

# Define files and messages
declare -A commits
commits[".gitignore"]="chore: add .gitignore"
commits["package.json"]="chore: configure project dependencies in package.json"
commits["package-lock.json"]="chore: add package-lock.json lockfile"
commits["vite.config.js"]="chore: configure vite with tailwindcss plugin"
commits["eslint.config.js"]="chore: configure eslint rules for react 19"
commits["index.html"]="feat: set up index.html page shell and title"
commits["public/favicon.svg"]="feat: add app favicon svg"
commits["public/icons.svg"]="feat: add vector icons svg resource"
commits["src/assets/hero.png"]="feat: add hero image asset for results panel"
commits["src/assets/react.svg"]="feat: add react logo svg asset"
commits["src/assets/vite.svg"]="feat: add vite logo svg asset"
commits["src/utils/calculations.js"]="feat: implement safe math functions for tip & split calculations"
commits["src/utils/formatters.js"]="feat: implement currency & numeric input formatting utilities"
commits["src/utils/validators.js"]="feat: implement validator functions for inputs"
commits["src/hooks/useTipCalculator.js"]="feat: implement custom hook for state & validation logic"
commits["src/components/BillInput.jsx"]="feat: implement BillInput component with layout shift-proof validation"
commits["src/components/TipSelector.jsx"]="feat: implement TipSelector component with custom tip input option"
commits["src/components/PeopleInput.jsx"]="feat: implement PeopleInput component with integer-only validation"
commits["src/components/ResetButton.jsx"]="feat: implement ResetButton component with custom animations"
commits["src/components/ResultsPanel.jsx"]="feat: implement ResultsPanel component with custom animations and share button"
commits["src/App.css"]="style: configure root app animations style overrides"
commits["src/App.jsx"]="feat: build main dashboard structure & responsive grid layout"
commits["src/index.css"]="style: import tailwind css v4 and custom style presets"
commits["src/main.jsx"]="feat: add main react app mounting entrypoint"
commits["README.md"]="docs: write project readme with setup instructions and features list"
commits["ANSWERS.md"]="docs: write implementation details, design decisions, and answers to assignment questions"

# Maintain exact ordering
order=(
    ".gitignore"
    "package.json"
    "package-lock.json"
    "vite.config.js"
    "eslint.config.js"
    "index.html"
    "public/favicon.svg"
    "public/icons.svg"
    "src/assets/hero.png"
    "src/assets/react.svg"
    "src/assets/vite.svg"
    "src/utils/calculations.js"
    "src/utils/formatters.js"
    "src/utils/validators.js"
    "src/hooks/useTipCalculator.js"
    "src/components/BillInput.jsx"
    "src/components/TipSelector.jsx"
    "src/components/PeopleInput.jsx"
    "src/components/ResetButton.jsx"
    "src/components/ResultsPanel.jsx"
    "src/App.css"
    "src/App.jsx"
    "src/index.css"
    "src/main.jsx"
    "README.md"
    "ANSWERS.md"
)

echo "Starting step-by-step git commits..."

for file in "${order[@]}"; do
    if [ -f "$file" ]; then
        echo "Adding and committing: $file"
        git add "$file"
        git commit -m "${commits[$file]}"
    else
        echo "Warning: File not found: $file"
    fi
done

echo ""
echo "All files committed locally!"
echo "To push your changes to GitHub, run:"
echo "  git push -u origin main"
