# Contact Form Fix - TODO List

## Issue: "Page not found" error when submitting contact form on Netlify

### Root Cause
- Contact.tsx is calling incorrect endpoint: `/.netlify/functions/api/send-email`
- Should be calling: `/.netlify/functions/send-email` (without `/api`)

### Steps to Fix:
1. [x] Fix API endpoint URL in Contact.tsx - **COMPLETED**
2. [x] Verify Netlify function configuration - **COMPLETED**
3. [ ] Test the fix locally
4. [ ] Deploy and test in production

### Completed:
- [x] Identified the root cause
- [x] Created plan for fixing the issue
- [x] Fixed the API endpoint URL in Contact.tsx
