const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const result = await db.query(
      'INSERT INTO contact_messages (name, email, company, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, email, company, subject, message]
    );

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      id: result.rows[0].id 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all contact messages (admin endpoint)
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
