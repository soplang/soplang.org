#!/bin/bash

# Add all changes
git add .

# Commit the changes
git commit -m "Update color scheme to be more eye-friendly for math education website (primary: #3F72AF, secondary: #5E9A78)"

# Force push to GitHub (use with caution)
git push -f origin main

echo "Changes force pushed to GitHub successfully!" 