# Production Deployment Guide for Netlify

## ✅ What's Been Fixed

1. **CORS Issues Resolved**: Netlify function now has proper CORS headers for all responses
2. **API Endpoint Fixed**: Contact form correctly uses Netlify functions in production
3. **Local Development Working**: Email sending works perfectly on localhost
4. **Build Successful**: Production build completed without errors

## 🚀 Deployment Steps

### 1. Netlify Dashboard Setup
1. Go to your Netlify dashboard for `priyanshudas.netlify.app`
2. Navigate to Site Settings > Environment Variables
3. Add the following environment variables:
   - `GMAIL_USER`: Your Gmail address (e.g., rajpriyanshu9078@gmail.com)
   - `GMAIL_APP_PASSWORD`: Your Gmail app password (not regular password)

### 2. Deploy to Netlify
You can deploy using one of these methods:

**Option A: Drag & Drop**
- Drag the `dist/` folder to Netlify deploy area

**Option B: Git Integration**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

### 3. Verify Deployment
After deployment, test the contact form at:
`https://priyanshudas.netlify.app/contact`

## 🔧 Production Configuration

The contact form is now configured to:
- Use `http://localhost:3001/api/send-email` for local development
- Use `https://priyanshudas.netlify.app/.netlify/functions/api/send-email` for production

## 📧 Gmail Setup Instructions

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail" app
   - Use this password in Netlify environment variables

## 🎯 Testing Checklist

- [ ] Contact form loads without errors
- [ ] Form validation works correctly
- [ ] Email sends successfully in production
- [ ] CORS errors are resolved
- [ ] Success/error messages display properly

## 📞 Support

If you encounter any issues:
1. Check Netlify function logs in the dashboard
2. Verify environment variables are set correctly
3. Test with different email addresses
