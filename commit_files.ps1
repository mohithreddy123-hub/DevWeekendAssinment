# Initialize git repository if not already done
if (!(Test-Path .git)) {
    git init
    git remote add origin https://github.com/mohithreddy123-hub/DevWeekendAssinment
    git branch -M main
}

# Define files and their commit messages in order of dependencies/logical layers
$commits = @(
    @{ Path = ".gitignore"; Msg = "chore: add .gitignore" },
    @{ Path = "package.json"; Msg = "chore: configure project dependencies in package.json" },
    @{ Path = "package-lock.json"; Msg = "chore: add package-lock.json lockfile" },
    @{ Path = "vite.config.js"; Msg = "chore: configure vite with tailwindcss plugin" },
    @{ Path = "eslint.config.js"; Msg = "chore: configure eslint rules for react 19" },
    @{ Path = "index.html"; Msg = "feat: set up index.html page shell and title" },
    @{ Path = "public/favicon.svg"; Msg = "feat: add app favicon svg" },
    @{ Path = "public/icons.svg"; Msg = "feat: add vector icons svg resource" },
    @{ Path = "src/assets/hero.png"; Msg = "feat: add hero image asset for results panel" },
    @{ Path = "src/assets/react.svg"; Msg = "feat: add react logo svg asset" },
    @{ Path = "src/assets/vite.svg"; Msg = "feat: add vite logo svg asset" },
    @{ Path = "src/utils/calculations.js"; Msg = "feat: implement safe math functions for tip & split calculations" },
    @{ Path = "src/utils/formatters.js"; Msg = "feat: implement currency & numeric input formatting utilities" },
    @{ Path = "src/utils/validators.js"; Msg = "feat: implement validator functions for inputs" },
    @{ Path = "src/hooks/useTipCalculator.js"; Msg = "feat: implement custom hook for state & validation logic" },
    @{ Path = "src/components/BillInput.jsx"; Msg = "feat: implement BillInput component with layout shift-proof validation" },
    @{ Path = "src/components/TipSelector.jsx"; Msg = "feat: implement TipSelector component with custom tip input option" },
    @{ Path = "src/components/PeopleInput.jsx"; Msg = "feat: implement PeopleInput component with integer-only validation" },
    @{ Path = "src/components/ResetButton.jsx"; Msg = "feat: implement ResetButton component with custom animations" },
    @{ Path = "src/components/ResultsPanel.jsx"; Msg = "feat: implement ResultsPanel component with custom animations and share button" },
    @{ Path = "src/App.css"; Msg = "style: configure root app animations style overrides" },
    @{ Path = "src/App.jsx"; Msg = "feat: build main dashboard structure & responsive grid layout" },
    @{ Path = "src/index.css"; Msg = "style: import tailwind css v4 and custom style presets" },
    @{ Path = "src/main.jsx"; Msg = "feat: add main react app mounting entrypoint" },
    @{ Path = "README.md"; Msg = "docs: write project readme with setup instructions and features list" },
    @{ Path = "ANSWERS.md"; Msg = "docs: write implementation details, design decisions, and answers to assignment questions" }
)

Write-Host "Starting step-by-step git commits..." -ForegroundColor Cyan

foreach ($c in $commits) {
    if (Test-Path $c.Path) {
        Write-Host "Adding and committing: $($c.Path)" -ForegroundColor Yellow
        git add $c.Path
        git commit -m $c.Msg
    } else {
        Write-Warning "File not found: $($c.Path)"
    }
}

Write-Host "`nAll files committed locally!" -ForegroundColor Green
Write-Host "To push your changes to GitHub, run:" -ForegroundColor Cyan
Write-Host "  git push -u origin main" -ForegroundColor White
