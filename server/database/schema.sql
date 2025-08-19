-- Brose Films Production Database Schema
-- Create database: CREATE DATABASE brosefilms_db;

-- Projects table for portfolio items
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    image_url VARCHAR(500),
    video_url VARCHAR(500),
    client VARCHAR(255),
    year INTEGER,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    featured BOOLEAN DEFAULT FALSE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subsidiaries table
CREATE TABLE IF NOT EXISTS subsidiaries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    logo_url VARCHAR(500),
    website_url VARCHAR(500),
    specialty VARCHAR(255),
    established_year INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    bio TEXT,
    image_url VARCHAR(500),
    linkedin_url VARCHAR(500),
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO services (title, description, icon, featured, order_index) VALUES
('Film Production', 'Full-scale cinematic productions from concept to final cut', 'film', true, 1),
('Creative Advertising', 'Compelling commercial content that drives engagement', 'megaphone', true, 2),
('Content Strategy', 'Strategic content planning and brand storytelling', 'strategy', true, 3),
('Media Solutions', 'Comprehensive media production and distribution', 'media', true, 4);

INSERT INTO subsidiaries (name, description, specialty, established_year) VALUES
('Brose Studios', 'Premier film production facility with state-of-the-art equipment', 'Film Production', 2018),
('Creative Edge Media', 'Innovative advertising and commercial content creation', 'Advertising', 2019),
('Narrative Labs', 'Story development and content strategy consultancy', 'Content Strategy', 2020),
('Digital Horizon', 'Digital media distribution and streaming solutions', 'Digital Media', 2021);

INSERT INTO projects (title, description, category, client, year, featured) VALUES
('The Last Frontier', 'Epic adventure film showcasing breathtaking landscapes', 'Feature Film', 'Independent', 2023, true),
('Brand Revolution', 'Award-winning commercial campaign for luxury automotive', 'Commercial', 'Luxury Auto Corp', 2023, true),
('Digital Dreams', 'Innovative web series exploring future technology', 'Web Series', 'Tech Innovators', 2023, false),
('Corporate Vision', 'Professional corporate video series', 'Corporate', 'Fortune 500 Company', 2022, false);
