const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { featured, category, limit } = req.query;
    let query = 'SELECT * FROM projects';
    let params = [];
    let conditions = [];

    if (featured === 'true') {
      conditions.push('featured = true');
    }

    if (category) {
      conditions.push('category = $' + (params.length + 1));
      params.push(category);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC';

    if (limit) {
      query += ' LIMIT $' + (params.length + 1);
      params.push(parseInt(limit));
    }

    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM projects WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
