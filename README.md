# Brose Films Production Website

A professional film production company website built with React and Node.js, featuring 3D animations and cinematic design.

## 🎬 Features

- **3D Cinematic Hero Section** - Animated film reels, camera lens, and dynamic lighting
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Modern UI/UX** - Gold/black cinema theme with smooth animations
- **Full-Stack Architecture** - React frontend with Express.js backend
- **Database Integration** - SQLite database for dynamic content
- **Professional Sections** - Home, About, Services, Portfolio, Subsidiaries, Contact

## 🚀 Quick Start

### Frontend (Client)
```bash
cd client
npm install
npm start
```
Runs on http://localhost:3000

### Backend (Server)
```bash
cd server
npm install
npm run dev
```
Runs on http://localhost:5000

## 📁 Project Structure

```
brosefilms/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── 3D/        # Three.js 3D components
│   │   │   ├── Navigation/
│   │   │   └── LoadingScreen/
│   │   ├── pages/         # Page components
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Services/
│   │   │   ├── Portfolio/
│   │   │   ├── Subsidiaries/
│   │   │   └── Contact/
│   │   └── App.js
│   ├── package.json
│   └── netlify.toml       # Netlify configuration
├── server/                # Express.js backend
│   ├── routes/           # API routes
│   ├── database/         # Database connection & schema
│   └── package.json
└── README.md
```

## 🛠 Technologies Used

### Frontend
- React 18
- React Three Fiber (3D animations)
- Styled Components
- Framer Motion
- GSAP
- Axios

### Backend
- Node.js
- Express.js
- SQLite3
- CORS
- Helmet

## 🎯 3D Components

- **HeroScene** - Main 3D canvas container
- **FilmReel** - Animated rotating film reels
- **CameraLens** - Camera lens with aperture rings
- **CinematicLights** - Dynamic lighting system

## 📦 Deployment

### Netlify (Frontend Only)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure redirects for SPA routing

### Full-Stack Deployment
- Frontend: Netlify, Vercel, or GitHub Pages
- Backend: Heroku, Railway, or DigitalOcean

## 🔧 Environment Variables

Create `.env` files in both client and server directories:

### Server (.env)
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=brosefilms_db
DB_USER=your_username
DB_PASSWORD=your_password
```

## 📝 Content Management

The site includes sample content that can be easily replaced:
- Company information and branding
- Project portfolio with images/videos
- Team member details
- Service descriptions
- Contact information

## 🎨 Customization

- Colors: Modify the gold (#FFD700) and black theme in styled components
- Animations: Adjust timing and effects in Framer Motion and GSAP
- 3D Elements: Customize Three.js components in `/src/components/3D/`

## 📄 License

This project is proprietary software developed for Brose Films Production.

## 🤝 Support

For support and customization requests, contact the development team.
# GitHub Pages Deployment
