# Email Authentication Troubleshooting Guide

## Current Error: EAUTH - Missing credentials for "PLAIN"

This error occurs when the Gmail app password is not properly configured or is missing from the environment variables.

## Steps to Fix:

### 1. Check if .env file exists
Make sure you have a `.env` file in the server directory with the following format:

```env
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3001
```

### 2. Create App Password (if not done)
If you haven't created an app password yet:

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" as the app
4. Select "Other (Custom name)" and name it "Portfolio Contact Form"
5. Click "Generate" and copy the 16-character password

### 3. Update .env file
Replace the placeholder values with your actual credentials:

```env
GMAIL_USER=rajpriyanshu9078@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx  # Your actual 16-character app password
PORT=3001
```

### 4. Restart the Server
After updating the .env file, restart the server:

```bash
# If server is running, stop it with Ctrl+C
node server.js
```

### 5. Test the Configuration
Send a test email through the contact form to verify the setup works.

## Common Issues:

- **Using regular password instead of app password**: You MUST use an app password, not your regular Gmail password
- **2FA not enabled**: App passwords require 2-factor authentication to be enabled
- **Incorrect email format**: Make sure the GMAIL_USER is your full email address
- **Spaces in app password**: The 16-character password should be entered without spaces

## Security Notes:

- Never commit the `.env` file to version control
- Keep your app password secure
- If compromised, revoke the app password and generate a new one

## Success Indicators:

When configured correctly, you should see logs like:
- `📧 Email request received from: [name] <[email]>`
- `📤 Attempting to send email...`
- `✅ Email sent successfully!`
- `📨 Message ID: [message-id]`
- `📧 Recipient: [your-email]`
