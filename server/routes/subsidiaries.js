const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// Get all subsidiaries
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM subsidiaries ORDER BY established_year ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching subsidiaries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single subsidiary
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM subsidiaries WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Subsidiary not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching subsidiary:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
