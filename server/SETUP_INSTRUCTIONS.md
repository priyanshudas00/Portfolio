# Contact Form Setup Instructions

## Gmail Configuration

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication (2FA) if not already enabled

### Step 2: Create App Password
1. Go to Google App Passwords: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other (Custom name)" and name it "Portfolio Contact Form"
4. Click "Generate"
5. Copy the 16-character app password (it will look like: xxxx xxxx xxxx xxxx)

### Step 3: Configure Environment Variables
1. Copy the `.env.example` file to `.env` in the server directory
2. Fill in your actual credentials:

```env
# Gmail Configuration
GMAIL_USER=rajpriyanshu9078@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Server Configuration
PORT=3001
```

## Testing the Contact Form

### Step 1: Start the Backend Server
```bash
cd server
npm install
node server.js
```

### Step 2: Start the Frontend
2. Get your Account SID and Auth Token from the dashboard
3. Purchase a Twilio phone number that supports WhatsApp

### Step 2: Configure WhatsApp Sandbox
1. Go to Twilio Console → Messaging → Try it Out → Send a WhatsApp Message
2. Follow instructions to set up WhatsApp sandbox
3. Add your personal WhatsApp number to the sandbox

## Testing the Contact Form

### Step 1: Start the Backend Server
```bash
cd server
npm install
node server.js
```

### Step 2: Start the Frontend
```bash
npm run dev
```

### Step 3: Test the Form
1. Open http://localhost:5175/contact
2. Fill out the contact form
3. Submit and check your Gmail inbox

## Troubleshooting

### Common Issues:
1. **Gmail Authentication Error**: Make sure 2FA is enabled and you're using an App Password, not your regular password
2. **Port Already in Use**: Change PORT in .env file if 3001 is occupied
3. **CORS Errors**: Ensure backend is running on the correct port

### Security Notes:
- Never commit your `.env` file to version control
- Keep your App Password secure
- Use environment variables for all sensitive data

## Support
If you encounter any issues, check:
- Node.js and npm versions
- Internet connectivity
- Gmail account settings
- Firewall/antivirus settings

## Quick Start

1. **Set up Gmail App Password** (see instructions above)
2. **Create .env file** in server directory with your credentials
3. **Start backend**: `cd server && node server.js`
4. **Start frontend**: `npm run dev`
5. **Test**: Fill out contact form at http://localhost:5175/contact
- Internet connectivity
- Gmail account settings
- Firewall/antivirus settings
