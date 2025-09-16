// Load environment variables manually
const fs = require('fs');
const path = require('path');

// Read .env file manually
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

const nodemailer = require('nodemailer');

// Test email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'brosefilmsproduction@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

// Test email content
const mailOptions = {
  from: process.env.EMAIL_USER || 'brosefilmsproduction@gmail.com',
  to: 'brosefilmsproduction@gmail.com',
  subject: 'Test Email - Contact Form Setup',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
        Contact Form Test Email
      </h2>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> Test User</p>
        <p><strong>Email:</strong> test@example.com</p>
        <p><strong>Company:</strong> Test Company</p>
        <p><strong>Subject:</strong> Testing Contact Form</p>
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #333; margin-top: 0;">Message:</h3>
        <p style="line-height: 1.6; color: #555;">This is a test message to verify that the contact form email functionality is working correctly. If you receive this email, the Gmail App Password configuration is successful!</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          <strong>Reply to:</strong> test@example.com<br>
          <strong>Submitted:</strong> ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `
};

// Test the email sending
async function testEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('Email User:', process.env.EMAIL_USER);
    console.log('Email Pass:', process.env.EMAIL_PASS ? '***configured***' : 'NOT SET');
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Check brosefilmsproduction@gmail.com for the test email');
  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check your Gmail App Password.');
    }
  }
}

testEmail();
