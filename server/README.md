# Portfolio Contact Form Backend

This server handles contact form submissions from your portfolio website and sends them directly to your Gmail account.

## Setup Instructions

### 1. Configure Gmail App Password

To send emails through Gmail, you need to generate an App Password:

1. **Enable 2-Factor Authentication** on your Gmail account (if not already enabled)
2. Go to your Google Account settings: https://myaccount.google.com/
3. Navigate to **Security** → **2-Step Verification** → **App passwords**
4. Generate a new app password for "Mail"
5. Copy the generated 16-character password

### 2. Update Environment Variables

Edit the `server/.env` file and replace the placeholder with your actual credentials:

```env
GMAIL_USER=rajpriyanshu9078@gmail.com
GMAIL_APP_PASSWORD=your_actual_app_password_here
PORT=3001
NODE_ENV=development
```

### 3. Start the Server

```bash
# Navigate to server directory
cd server

# Install dependencies (if not already installed)
npm install

# Start the server
npm start

# For development with auto-restart
npm run dev
```

### 4. Test the Setup

1. Start the server: `npm start`
2. Open your portfolio website
3. Fill out the contact form and submit
4. Check your Gmail inbox for the test message

## API Endpoints

- `POST /api/send-email` - Send contact form email
- `GET /api/health` - Health check endpoint

## Security Notes

- Never commit your actual `.env` file to version control
- Use App Passwords instead of your regular Gmail password
- The server includes input validation and error handling
- CORS is enabled for local development

## Troubleshooting

If emails aren't being received:

1. Verify your App Password is correct
2. Check that 2FA is enabled on your Gmail account
3. Ensure the server is running on port 3001
4. Check the server console for error messages
5. Verify your Gmail account allows "less secure apps" (though App Password should bypass this)
