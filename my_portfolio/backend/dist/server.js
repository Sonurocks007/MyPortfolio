"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const projects_1 = __importDefault(require("./routes/projects"));
const messages_1 = __importDefault(require("./routes/messages"));
const about_1 = __importDefault(require("./routes/about"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://sonu-portfolio.vercel.app'
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express_1.default.json());
// Routes
app.use('/api/projects', projects_1.default);
app.use('/api/messages', messages_1.default);
app.use('/api/about', about_1.default);
// Root route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sonu Gupta - Portfolio API (TS)</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: #f8fafc;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #1e293b;
                padding: 1rem;
                position: relative;
                overflow-x: hidden;
            }
            
            .container {
                text-align: center;
                max-width: 800px;
                width: 100%;
                padding: 2.5rem;
                background: #f8fafc;
                border-radius: 20px;
                border: 1px solid #e2e8f0;
                box-shadow: 
                    0 10px 25px rgba(0, 0, 0, 0.1),
                    0 4px 6px rgba(0, 0, 0, 0.05);
                position: relative;
                z-index: 1;
            }
            
            h1 { 
                font-size: 3rem; 
                margin-bottom: 1rem;
                color: #1e293b;
                font-weight: 800;
            }
            
            .status { 
                display: inline-block;
                background: linear-gradient(45deg, #10b981, #34d399);
                color: white;
                padding: 0.8rem 2rem;
                border-radius: 50px;
                font-weight: 700;
                margin: 1.5rem 0;
                font-size: 1rem;
                box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
                border: 2px solid rgba(255, 255, 255, 0.2);
            }
            
            .welcome-text {
                font-size: 1.2rem;
                margin: 1.5rem 0;
                color: #64748b;
                line-height: 1.6;
                font-weight: 400;
            }
            
            .links { 
                margin: 2.5rem 0; 
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .links a {
                color: #1e293b;
                text-decoration: none;
                padding: 1rem 1.5rem;
                background: #ffffff;
                border-radius: 12px;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s ease;
                border: 1px solid #e2e8f0;
            }
            
            .links a:hover { 
                background: #e2e8f0;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                border-color: #cbd5e1;
            }
            
            .endpoints-section {
                margin: 2.5rem 0;
            }
            
            .endpoints-title {
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
                font-weight: 700;
                color: #1e293b;
            }
            
            .endpoints-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            
            .endpoint-card {
                background: #ffffff;
                border-radius: 12px;
                padding: 1.5rem;
                border: 1px solid #e2e8f0;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .endpoint-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                border-color: #cbd5e1;
            }
            
            .endpoint-method {
                display: inline-block;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-weight: 700;
                font-size: 0.8rem;
                margin-bottom: 0.8rem;
                text-transform: uppercase;
            }
            
            .endpoint-method.get {
                background: linear-gradient(45deg, #10b981, #34d399);
                color: white;
            }
            
            .endpoint-method.post {
                background: linear-gradient(45deg, #3b82f6, #60a5fa);
                color: white;
            }
            
            .endpoint-path {
                font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #1e293b;
            }
            
            .endpoint-description {
                font-size: 0.9rem;
                color: #64748b;
                line-height: 1.4;
            }
            
            .footer-text {
                margin-top: 2.5rem;
                font-size: 1rem;
                color: #64748b;
                font-weight: 300;
            }
            
            @media (max-width: 768px) {
                .container {
                    padding: 1.5rem;
                    border-radius: 25px;
                    max-width: 95%;
                }
                
                h1 { 
                    font-size: 2.2rem; 
                }
                
                .links {
                    grid-template-columns: 1fr;
                    gap: 0.8rem;
                }
                
                .endpoints-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                
                .endpoint-card {
                    padding: 1.2rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Portfolio TypeScript API</h1>
            <div class="status">✅ Server Running (TS)</div>
            <p class="welcome-text">Welcome to Sonu Gupta's Portfolio TypeScript Backend API</p>
            
            <div class="links">
                <a href="https://github.com/Sonurocks007" target="_blank">💻 GitHub</a>
            </div>
            
            <div class="endpoints-section">
                <h3 class="endpoints-title">📡 Available Endpoints</h3>
                <div class="endpoints-grid">
                    <div class="endpoint-card">
                        <div class="endpoint-method get">GET</div>
                        <div class="endpoint-path">/api/projects</div>
                        <div class="endpoint-description">Fetch all portfolio projects with details, images, and tech stacks</div>
                    </div>
                    <div class="endpoint-card">
                        <div class="endpoint-method get">GET</div>
                        <div class="endpoint-path">/api/about</div>
                        <div class="endpoint-description">Get skills, experience, achievements, and certifications data</div>
                    </div>
                    <div class="endpoint-card">
                        <div class="endpoint-method post">POST</div>
                        <div class="endpoint-path">/api/messages</div>
                        <div class="endpoint-description">Send contact form messages with email notifications</div>
                    </div>
                </div>
            </div>
            
            <p class="footer-text">
                Built with ❤️ using Node.js, Express & MongoDB (Fully Typed)
            </p>
        </div>
    </body>
    </html>
  `);
});
// API root route
app.get('/api', (req, res) => {
    res.json({
        message: "🎉 Welcome to Sonu Gupta's Portfolio TS API!",
        status: "✅ Server is running successfully",
        version: "1.0.0",
        endpoints: {
            projects: "GET /api/projects - Fetch all portfolio projects",
            about: "GET /api/about - Fetch about information (skills, experience, etc.)",
            messages: "POST /api/messages - Send contact form message"
        },
        social: {
            github: "https://github.com/Sonurocks007",
            linkedin: "https://linkedin.com/in/sonu-gupta",
            twitter: "https://x.com/Sonurocks"
        },
        built_with: ["Node.js", "Express.js", "TypeScript", "MongoDB", "SendGrid"],
        timestamp: new Date().toISOString()
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
