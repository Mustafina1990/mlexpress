#!/bin/bash

# ML Expresstäd AB - Quick Deployment Script
# This script helps you deploy your site quickly

echo "🚀 ML Expresstäd AB - Deployment Script"
echo "========================================"
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "📦 Building the site first..."
    npm run build
    echo ""
fi

echo "✅ Build complete! Your site is ready in the 'dist' folder."
echo ""
echo "Choose your deployment method:"
echo ""
echo "1. 🔵 Netlify Drag & Drop (Easiest)"
echo "   → Go to: https://app.netlify.com/drop"
echo "   → Drag the 'dist' folder to the page"
echo ""
echo "2. 🔧 Netlify CLI"
echo "   → Run: netlify deploy --prod --dir=dist"
echo "   → (Install first: npm install -g netlify-cli)"
echo ""
echo "3. 🟣 Vercel CLI"
echo "   → Run: vercel --prod"
echo "   → (Install first: npm install -g vercel)"
echo ""
echo "4. 🟢 Manual Upload"
echo "   → Open the 'dist' folder in Finder"
echo "   → Upload to your hosting provider"
echo ""
echo "📝 Need help? Check DEPLOYMENT_GUIDE.md"
echo ""

# Ask if user wants to open dist folder
read -p "Open 'dist' folder in Finder? (y/n): " open_finder

if [ "$open_finder" = "y" ] || [ "$open_finder" = "Y" ]; then
    open dist
    echo "✅ Opened dist folder!"
fi

echo ""
echo "🎉 Good luck with your deployment!"
