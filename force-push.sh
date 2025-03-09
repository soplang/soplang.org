#!/bin/bash

# Add all changes
git add .

# Commit the changes
git commit -m "Add new pages: Download Latest, Get Started, Reference, Forums, and Contribute"

# Force push to GitHub (use with caution)
git push -f origin main

echo "Changes force pushed to GitHub successfully!" 