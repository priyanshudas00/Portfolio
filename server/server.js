const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

// Path to the view count JSON file
const viewCountFilePath = path.join(__dirname, 'viewCount.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not your regular password
    }
  });
};

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, availability, message } = req.body;

    // Log incoming request
    console.log(`📧 Email request received from: ${name} <${email}>`);
    console.log(`📋 Subject: ${subject}, Availability: ${availability || 'Not specified'}`);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.warn('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields: Name, Email, Subject, and Message' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`❌ Validation failed: Invalid email format - ${email}`);
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address format (e.g., yourname@example.com)' 
      });
    }

    // Validate message length
    if (message.length < 10) {
      console.warn('❌ Validation failed: Message too short');
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a more detailed message (at least 10 characters)' 
      });
    }

    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            ${availability ? `<p><strong>Availability:</strong> ${availability}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      `
    };

    // Send email
    console.log('📤 Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log(`📨 Message ID: ${info.messageId}`);
    console.log(`📧 Recipient: ${process.env.GMAIL_USER}`);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check server configuration.';
      console.error('🔐 Authentication error - Check Gmail app password configuration');
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection to email service failed. Please check your internet connection.';
      console.error('🌐 Connection error - Network issue detected');
    }

    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running' 
  });
});

app.get('/api/view-count', (req, res) => {
  fs.readFile(viewCountFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error reading view count' });
    }
    const viewCount = JSON.parse(data);
    res.status(200).json(viewCount);
  });
});

app.post('/api/view-count', (req, res) => {
  fs.readFile(viewCountFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error reading view count' });
    }
    const viewCount = JSON.parse(data);
    viewCount.totalViews += 1; // Increment the view count
    viewCount.lastUpdated = new Date().toISOString(); // Update the last updated time

    fs.writeFile(viewCountFilePath, JSON.stringify(viewCount, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error saving view count' });
      }
      res.status(200).json({ success: true, totalViews: viewCount.totalViews });
    });
  });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Email API available at: http://localhost:${PORT}/api/send-email`);
  console.log(`View count API available at: http://localhost:${PORT}/api/view-count`);
});

module.exports = app;
