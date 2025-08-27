# Netlify Dashboard Setup Guide

## 📋 Netlify Deployment Settings

When deploying to Netlify, use these settings in your dashboard:

### 1. Build & Deploy Settings
- **Base directory**: (leave blank - root directory)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 2. Environment Variables (in Netlify Dashboard)
Go to: Site Settings > Environment Variables

Add these variables:
- `GMAIL_USER` = `rajpriyanshu9078@gmail.com` (your Gmail)
- `GMAIL_APP_PASSWORD` = `your-app-password` (Gmail app password)

### 3. Functions Directory
- **Functions directory**: `netlify/functions` (already configured in netlify.toml)

## 🚀 Deployment Methods

### Option A: Drag & Drop (Easiest)
1. Run `npm run build` locally
2. Drag the entire `dist` folder to Netlify deploy area
3. Netlify will automatically deploy

### Option B: Git Integration
1. Connect your GitHub repository to Netlify
2. Netlify will auto-detect the settings from netlify.toml
3. It will build and deploy automatically on every git push

### Option C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod --dir=dist
```

## 🔧 Gmail App Password Setup

1. Enable 2-factor authentication on Gmail
2. Go to: Google Account > Security > 2-Step Verification > App passwords
3. Generate password for "Mail" app
4. Use this password (not your regular password) in Netlify environment variables

## ✅ Verification

After deployment, test:
1. Visit `https://priyanshudas.netlify.app/contact`
2. Fill out the contact form
3. Check if email is received
4. Check Netlify function logs in dashboard

## 📞 Troubleshooting

If functions don't work:
1. Check Netlify function logs
2. Verify environment variables are set
3. Ensure `netlify/functions` directory exists in deployment
