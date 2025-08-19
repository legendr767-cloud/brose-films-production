const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

// Create database file path
const dbPath = path.join(__dirname, 'brosefilms.db');

// Initialize SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeTables();
  }
});

// Initialize tables
function initializeTables() {
  // Create subsidiaries table
  db.run(`
    CREATE TABLE IF NOT EXISTS subsidiaries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      logo_url TEXT,
      established_year INTEGER
    )
  `);

  // Create projects table
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      image_url TEXT,
      video_url TEXT,
      category TEXT,
      featured BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create services table
  db.run(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      features TEXT
    )
  `);

  // Insert sample data
  insertSampleData();
}

function insertSampleData() {
  // Insert subsidiaries
  const subsidiariesData = [
    ['Brose Studios', 'End‑to‑end film production with premium on‑set and post capabilities.', 'https://dummyimage.com/300x120/0b0b0b/ffd700&text=Brose+Studios', 2012],
    ['Brose VFX', 'Photoreal visual effects, simulations, and digital environments.', 'https://dummyimage.com/300x120/0b0b0b/ffa500&text=Brose+VFX', 2016],
    ['Brose Sound', 'Original scores, sound design, and immersive mixes for cinema.', 'https://dummyimage.com/300x120/0b0b0b/ffffff&text=Brose+Sound', 2018]
  ];

  db.get("SELECT COUNT(*) as count FROM subsidiaries", (err, row) => {
    if (!err && row.count === 0) {
      subsidiariesData.forEach(([name, description, logo_url, established_year]) => {
        db.run("INSERT INTO subsidiaries (name, description, logo_url, established_year) VALUES (?, ?, ?, ?)",
          [name, description, logo_url, established_year]);
      });
    }
  });

  // Insert sample projects
  const projectsData = [
    ['The Last Stand', 'Epic war drama featuring stunning cinematography and powerful performances.', 'https://dummyimage.com/600x400/1a1a1a/ffd700&text=The+Last+Stand', null, 'Drama', 1],
    ['Neon Dreams', 'Cyberpunk thriller with cutting-edge visual effects and immersive sound design.', 'https://dummyimage.com/600x400/1a1a1a/00ff00&text=Neon+Dreams', null, 'Sci-Fi', 1],
    ['Silent Waters', 'Intimate documentary exploring environmental conservation through personal stories.', 'https://dummyimage.com/600x400/1a1a1a/0099ff&text=Silent+Waters', null, 'Documentary', 1],
    ['Urban Legends', 'Horror anthology series bringing modern folklore to life.', 'https://dummyimage.com/600x400/1a1a1a/ff0066&text=Urban+Legends', null, 'Horror', 1]
  ];

  db.get("SELECT COUNT(*) as count FROM projects", (err, row) => {
    if (!err && row.count === 0) {
      projectsData.forEach(([title, description, image_url, video_url, category, featured]) => {
        db.run("INSERT INTO projects (title, description, image_url, video_url, category, featured) VALUES (?, ?, ?, ?, ?, ?)",
          [title, description, image_url, video_url, category, featured]);
      });
    }
  });

  // Insert services
  const servicesData = [
    ['Film Production', 'Full-scale film production from concept to completion', 'film', 'Pre-production planning,On-set filming,Post-production'],
    ['Visual Effects', 'Cutting-edge VFX and CGI for film and television', 'vfx', 'Motion capture,3D modeling,Compositing'],
    ['Sound Design', 'Professional audio production and sound engineering', 'sound', 'Original scoring,Sound mixing,Audio post-production']
  ];

  db.get("SELECT COUNT(*) as count FROM services", (err, row) => {
    if (!err && row.count === 0) {
      servicesData.forEach(([name, description, icon, features]) => {
        db.run("INSERT INTO services (name, description, icon, features) VALUES (?, ?, ?, ?)",
          [name, description, icon, features]);
      });
    }
  });
}

// Query wrapper to match PostgreSQL interface
const query = (text, params = []) => {
  return new Promise((resolve, reject) => {
    // Convert PostgreSQL syntax to SQLite
    let sqliteQuery = text.replace(/\$(\d+)/g, '?');
    
    if (sqliteQuery.toLowerCase().includes('select')) {
      db.all(sqliteQuery, params, (err, rows) => {
        if (err) reject(err);
        else resolve({ rows });
      });
    } else {
      db.run(sqliteQuery, params, function(err) {
        if (err) reject(err);
        else resolve({ rows: [], rowCount: this.changes, insertId: this.lastID });
      });
    }
  });
};

module.exports = {
  query,
  db
};
