#!/bin/bash

# Add all changes
git add .

# Commit the changes
git commit -m "Redesign website to match Python.org style with custom colors (primary: #1E3A8A, secondary: #F59E0B)"

# Push to GitHub
git push origin main

echo "Changes pushed to GitHub successfully!" 