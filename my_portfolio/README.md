# 💼 MERN Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

A **modern, responsive personal portfolio** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and styled with **Tailwind CSS**.  
Showcase your projects, skills, experience, achievements, and certifications with a dynamic backend, **dark/light mode**, and smooth animations.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-blue?style=for-the-badge&logo=vercel)](https://saurav-portfolio-dun.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sauravkumarsah-dev/)

</div>

---

## 🌟 **Key Highlights**

- 🚀 **Production Ready** - Fully deployed and functional
- 🎨 **Modern Design** - Glass morphism with smooth animations
- 📱 **Fully Responsive** - Perfect on all devices
- 🌙 **Dark/Light Mode** - User preference persistence
- 💾 **Database Driven** - Dynamic content management
- 📧 **Working Contact Form** - Email notifications via SendGrid
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

---

## 📸 **Screenshots**

<div align="center">

### 🏠 **Home Page**
![Home Page](https://drive.google.com/uc?export=view&id=19TwgnlFq3YvODpizaIl5PWPmCJxZi7TI)

### 🛠️ **Projects Page**
![Project Page](https://drive.google.com/uc?export=view&id=1d1aLESZj07CK2skhn36sVL3JMMBTvcig)

### 📄 **Resume Page**
![Resume Page](https://drive.google.com/uc?export=view&id=1NynPhdIowr1lYOJrWXwaxKq51D1FSdSp)

### 👤 **About Page**
![About Page](https://drive.google.com/uc?export=view&id=1nHD4jnhxKxjc3mnvuHzW8Q0IRdYThPFG)

### 📬 **Contact Page**
![Contact Page](https://drive.google.com/uc?export=view&id=18Outd-8qb1A7-GYAmJh7sUtrSDqLHepf)

</div>

---

## 🛠️ **Tech Stack**

### **Frontend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Modern frontend library with hooks | 18.x |
| **Vite** | Fast build tool and dev server | 7.x |
| **Tailwind CSS** | Utility-first, responsive styling | 3.x |
| **Framer Motion** | Smooth animations & transitions | 12.x |
| **React Router** | Client-side routing | 7.x |
| **Axios** | HTTP client for API requests | 1.x |

### **Backend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript runtime for backend | 18+ |
| **Express.js** | Web framework for REST API | 5.x |
| **MongoDB Atlas** | Cloud database for projects & messages | Latest |
| **Mongoose** | MongoDB object modeling for Node.js | 8.x |
| **SendGrid** | Reliable email delivery service | 8.x |
| **CORS** | Cross-origin resource sharing | 2.x |

---

## ⚡ **Key Features**

### 🎨 **Design & UX**
- ✅ **Glass Morphism Design** - Modern glass-like UI elements
- ✅ **Gradient Backgrounds** - Beautiful animated gradients
- ✅ **Floating Particles** - Interactive particle animations
- ✅ **Smooth Transitions** - Framer Motion powered animations
- ✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Toggle with localStorage persistence

### 🚀 **Functionality**
- ✅ **Dynamic Content** - Database-driven projects and about info
- ✅ **Working Contact Form** - SendGrid email integration
- ✅ **Project Showcase** - Interactive project cards with details
- ✅ **Skills Display** - Categorized technical skills
- ✅ **Experience Timeline** - Professional journey visualization
- ✅ **Achievements & Certifications** - Professional accomplishments
- ✅ **Resume Download** - PDF download functionality

### 🔧 **Technical**
- ✅ **REST API** - Well-structured backend endpoints
- ✅ **Database Integration** - MongoDB with Mongoose ODM
- ✅ **Error Handling** - Graceful fallbacks throughout
- ✅ **Loading States** - Skeleton screens and progress indicators
- ✅ **Performance Optimized** - Fast loading and smooth interactions
- ✅ **SEO Ready** - Meta tags and structured content

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- SendGrid account for email functionality

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurav-kumar-sah-dev/saurav-portfolio.git
   cd saurav-portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**

   **Frontend (.env in client folder):**
   ```env
   VITE_BACKEND_URL=http://localhost:5000/api
   ```
   
   **Backend (.env in server folder):**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   SENDGRID_API_KEY=SG.your-sendgrid-api-key
   PORT=5000
   ```

5. **Run the Application**
   
   **Start Backend Server:**
   ```bash
   cd server
   npm start
   ```
   
   **Start Frontend (in new terminal):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

---

## 📁 **Project Structure**

```
Portfolio/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/          # Main application pages
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Resume.jsx
│   │   ├── api/            # API configuration
│   │   │   └── api.js
│   │   └── assets/         # Static assets
│   ├── public/             # Public static files
│   │   ├── Profile-Image/  # Profile images
│   │   ├── projects-related-images/  # Project images
│   │   └── Resume/         # Resume PDF
│   └── dist/               # Production build
├── server/                 # Node.js backend application
│   ├── config/             # Database configuration
│   │   └── db.js
│   ├── controllers/        # Route controllers
│   │   ├── messagesController.js
│   │   └── projectsController.js
│   ├── models/             # MongoDB models
│   │   ├── About/          # About section models
│   │   │   ├── Achievement.js
│   │   │   ├── Certification.js
│   │   │   ├── Experience.js
│   │   │   └── Skill.js
│   │   ├── Message.js      # Contact form messages
│   │   └── Project.js      # Project data model
│   ├── routes/             # API routes
│   │   ├── about.js
│   │   ├── messages.js
│   │   └── projects.js
│   ├── utils/              # Utility functions
│   │   └── sendEmail.js
│   └── server.js           # Main server file
└── README.md
```

---

## 📚 **API Documentation**

### **Base URLs**
- **Production**: `https://saurav-portfolio-vx82.onrender.com/api`
- **Development**: `http://localhost:5000/api`

### **Endpoints**

#### 🏠 **Welcome**
- **GET** `/` - Welcome page with API information
- **GET** `/api` - JSON API information

#### 📧 **Messages**
- **POST** `/messages` - Send contact form message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in your services..."
  }
  ```

#### 🛠️ **Projects**
- **GET** `/projects` - Get all projects
- **GET** `/projects/:id` - Get specific project by ID

#### 👤 **About Section**
- **GET** `/about` - Get combined about data:
  - `skills` - Categorized technical skills
  - `experience` - Professional experience timeline
  - `achievements` - Professional achievements
  - `certifications` - Certifications and awards
  - `currentFocus` - Current learning focus areas

### **Response Examples**

**GET `/projects`** → returns an array of projects
```json
[
  {
    "_id": "...",
    "title": "Project Title",
    "description": "Project description...",
    "techStack": ["React", "Node.js", "MongoDB"],
    "imageUrls": ["https://..."],
    "demoLink": "https://...",
    "repoLink": "https://..."
  }
]
```

**GET `/about`** → returns combined about data
```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["React", "JavaScript", "Tailwind CSS"]
    }
  ],
  "experience": [
    {
      "role": "Full Stack Developer",
      "company": "Tech Company",
      "duration": "2023 - Present"
    }
  ],
  "achievements": [
    {
      "title": "Project Achievement",
      "description": "Description..."
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization"
    }
  ],
  "currentFocus": [
    "Building full-stack applications with MERN stack"
  ]
}
```

**POST `/messages`** → returns success
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

---

## 🚀 **Deployment Status**

### ✅ **Frontend (Vercel)**
- **URL**: [https://saurav-portfolio-dun.vercel.app/](https://saurav-portfolio-dun.vercel.app/)
- **Status**: 🟢 Live and working
- **Features**: All pages functional, responsive design
- **Performance**: Optimized with CDN

### ✅ **Backend (Render)**
- **URL**: [https://saurav-portfolio-vx82.onrender.com/](https://saurav-portfolio-vx82.onrender.com/)
- **Status**: 🟢 Live and working
- **Database**: MongoDB Atlas connected
- **Email**: SendGrid integration active
- **API**: RESTful endpoints documented

### ✅ **Contact Form**
- **Status**: 🟢 Fully functional
- **Email Delivery**: Working via SendGrid
- **Database**: Messages saved to MongoDB
- **Templates**: Professional HTML email templates

---

## 🔧 **Environment Variables**

### **Frontend (Vercel)**
```env
VITE_BACKEND_URL=https://your-backend.example.com/api
```

### **Backend (Render)**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SENDGRID_API_KEY=SG.your-sendgrid-api-key
PORT=5000
```

---

## 🎯 **Recent Updates**

- ✅ **Production Deployment** - Live on Vercel (frontend) and Render (backend)
- ✅ **Database Integration** - MongoDB Atlas with dynamic content
- ✅ **Email Functionality** - SendGrid integration for contact form
- ✅ **Responsive Design** - Mobile-first approach with perfect scaling
- ✅ **Performance Optimization** - Fast loading and smooth animations
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Loading States** - Skeleton screens and progress indicators

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Vercel** for hosting the frontend
- **Render** for hosting the backend
- **MongoDB Atlas** for database hosting
- **SendGrid** for email services
- **Tailwind CSS** for the amazing utility-first CSS framework
- **Framer Motion** for smooth animations
- **React** team for the amazing library
- **Node.js** community for the robust backend ecosystem

---

## 📞 **Contact**

**Saurav Kumar Sah**
- **Portfolio**: [https://saurav-portfolio-dun.vercel.app/](https://saurav-portfolio-dun.vercel.app/)
- **LinkedIn**: [https://www.linkedin.com/in/sauravkumarsah-dev/](https://www.linkedin.com/in/sauravkumarsah-dev/)
- **GitHub**: [https://github.com/saurav-kumar-sah-dev](https://github.com/saurav-kumar-sah-dev)
- **Email**: [Contact via Portfolio](https://saurav-portfolio-dun.vercel.app/contact)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Saurav Kumar Sah](https://www.linkedin.com/in/sauravkumarsah-dev/)

[![GitHub stars](https://img.shields.io/github/stars/saurav-kumar-sah-dev/saurav-portfolio?style=social)](https://github.com/saurav-kumar-sah-dev/saurav-portfolio)
[![GitHub forks](https://img.shields.io/github/forks/saurav-kumar-sah-dev/saurav-portfolio?style=social)](https://github.com/saurav-kumar-sah-dev/saurav-portfolio)

</div>