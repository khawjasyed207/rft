require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*' // Replace with your frontend URL in production
}));
app.use(express.json());

// File upload configuration
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    cb(null, allowedTypes.includes(file.mimetype));
  }
});

// Email configuration (using nodemailer)
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Form submission endpoint
app.post('/send-message', upload.single('attachment'), async (req, res) => {
  try {
    const { name, email, industry, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required fields' 
      });
    }

    // Prepare email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || '20r11a1256@gcet.edu.in',
      replyTo: email,
      subject: `New Contact: ${name} (${industry || 'No Industry'})`,
      text: `
        Name: ${name}
        Email: ${email}
        Industry: ${industry || 'Not specified'}
        Message: ${message || 'No message provided'}
      `,
      attachments: req.file ? [{
        filename: req.file.originalname || 'attachment',
        path: req.file.path
      }] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up uploaded file
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.json({ 
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).json({
      error: 'Failed to send message',
      details: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
