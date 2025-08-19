const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// Get all services
router.get('/', async (req, res) => {
  try {
    const { featured } = req.query;
    let query = 'SELECT * FROM services';
    let params = [];

    if (featured === 'true') {
      query += ' WHERE featured = 1';
    }

    query += ' ORDER BY id ASC';

    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
