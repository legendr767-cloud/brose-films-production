const https = require('https');
const querystring = require('querystring');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { name, email, company, subject, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and message are required' })
      };
    }

    // Send email using Gmail SMTP via nodemailer-like approach
    const emailData = {
      to: 'brosefilmsproduction@gmail.com',
      subject: `New Contact Form: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Reply to:</strong> ${email}</p>
      `
    };

    // For now, just return success - we'll integrate proper email later
    console.log('Contact form submission:', emailData);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message received successfully' 
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
