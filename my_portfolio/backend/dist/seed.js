"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Project_1 = __importDefault(require("./models/Project"));
const Skill_1 = __importDefault(require("./models/About/Skill"));
const Experience_1 = __importDefault(require("./models/About/Experience"));
const Achievement_1 = __importDefault(require("./models/About/Achievement"));
const Certification_1 = __importDefault(require("./models/About/Certification"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
const skillsData = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Java", "HTML5", "CSS3"],
        order: 1
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Axios"],
        order: 2
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "Spring Boot", "Spring Security", "RESTful APIs", "JWT", "Server-Sent Events"],
        order: 3
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
        order: 4
    },
    {
        category: "Tools & Cloud",
        items: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "npm", "Linux"],
        order: 5
    },
    {
        category: "Concepts",
        items: ["Monorepo Architecture", "Role-Based Access Control", "Multi-tenant Systems", "Agile", "CI/CD", "Internationalization"],
        order: 6
    }
];
const experienceData = [
    {
        role: "Full Stack Developer",
        company: "Hanging Panda Pvt. Ltd.",
        duration: "August 2025 – June 2026",
        description: "Designed and launched production-grade applications serving real users — independently built a real-time lead management monorepo and a full e-commerce system with 6 product categories, subscription setups, multi-language localization (English, Arabic, French, Hindi, Urdu) with RTL, and dynamic sidebar panels. Strong focus on clean code, performance, and Agile workflows.",
        order: 1
    }
];
const achievementsData = [
    {
        title: "Released 2 Production Apps",
        description: "Released 2 production-grade applications serving real users — independently built a real-time multi-tenant platform and a full e-commerce system within 1 year of experience.",
        order: 1
    },
    {
        title: "Localization & Monorepos",
        description: "Delivered 5-language internationalization with RTL support and a monorepo architecture reducing cross-team code duplication by 40%+ across 3 applications.",
        order: 2
    }
];
const certificationsData = [
    {
        name: "6-Month Full Stack Web Development Training: Core Java, Spring Boot, React, Node, SQL",
        issuer: "QSpiders",
        link: "#",
        order: 1
    },
    {
        name: "The Joy of Computing using Python (Elite Certificate)",
        issuer: "NPTEL – IIT Kharagpur",
        link: "#",
        order: 2
    },
    {
        name: "C Programming Language Certificate",
        issuer: "NPTEL – IIT Kharagpur",
        link: "#",
        order: 3
    }
];
const projectsData = [
    {
        title: "E-Commerce Web Platform",
        shortDescription: "A production-grade, multi-department e-commerce platform built with React, Next.js, Redux Toolkit, Node.js, and PostgreSQL.",
        description: "Designed and launched a full-stack multi-department e-commerce platform with 6 product categories, customer storefront, and admin panel, serving real users in production. Built responsive product listings with dynamic zoom, advanced filters/sorting, OTP/CAPTCHA secure login, JWT expiry handlers, dynamic sidebar panels, and 5-language localization (English, Arabic, French, Hindi, Urdu) with RTL layout.",
        cardImageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        ],
        techStack: ["Next.js", "React.js", "TypeScript", "Node.js", "Redux Toolkit", "PostgreSQL", "Firebase", "Tailwind CSS"],
        demoLink: "https://ecommerce-demo.vercel.app",
        repoLink: "https://github.com/Sonurocks007",
        features: [
            "Dynamic 6-category catalog storefront with responsive image zoom & advanced search filters",
            "Robust Admin Panel with sales analytics, vendor onboarding, payouts, and full CRUD controls",
            "Established secure login systems via OTP, CAPTCHA, and JWT interceptors",
            "Seamless 5-language translation (English, Arabic, French, Hindi, Urdu) with full RTL page mirroring"
        ],
        order: 1
    },
    {
        title: "Lead Management Software System",
        shortDescription: "A real-time monorepo CRM solution with modules for lead analytics, bulk operations, and custom fields.",
        description: "Architected a high-performance MERN-style lead management system constructed under a monorepo consisting of 3 apps (client portal, admin cockpit, server) and shared helper packages. Configured lightning-fast telemetry dashboards updating staff via Server-Sent Events (SSE), granular per-module Role-Based Access Control, Firebase push alerts, custom fields, and bulk operations (CSV parser, PDF generators).",
        cardImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
        ],
        techStack: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "Tailwind CSS", "Server-Sent Events"],
        demoLink: "https://leadcrm-demo.vercel.app",
        repoLink: "https://github.com/Sonurocks007",
        features: [
            "Monorepo codebase structure with shared UI modules, slashing duplication by 40%+",
            "Real-time event streams powered by Server-Sent Events (SSE) with auto-reconnection",
            "Granular module and action level Role-Based Access Controls (RBAC)",
            "Highly configurable custom field builder, CSV spreadsheet parser, and PDF generator engines"
        ],
        order: 2
    }
];
async function seedDatabase() {
    try {
        console.log('Connecting to MongoDB database to seed...');
        await mongoose_1.default.connect(MONGO_URI);
        console.log('Connected successfully!');
        // 1. Clear existing collections
        console.log('Clearing existing collections...');
        await Promise.all([
            Skill_1.default.deleteMany({}),
            Experience_1.default.deleteMany({}),
            Achievement_1.default.deleteMany({}),
            Certification_1.default.deleteMany({}),
            Project_1.default.deleteMany({})
        ]);
        console.log('Collections cleared!');
        // 2. Insert Sonu's technical profile data
        console.log('Seeding Technical Skills...');
        await Skill_1.default.insertMany(skillsData);
        console.log('Seeding Experiences...');
        await Experience_1.default.insertMany(experienceData);
        console.log('Seeding Achievements...');
        await Achievement_1.default.insertMany(achievementsData);
        console.log('Seeding Certifications...');
        await Certification_1.default.insertMany(certificationsData);
        console.log('Seeding Projects...');
        await Project_1.default.insertMany(projectsData);
        console.log('🎉 Database seeded successfully with Sonu Gupta\'s professional credentials!');
        process.exit(0);
    }
    catch (err) {
        console.error('❌ Error during seeding:', err.message);
        process.exit(1);
    }
}
seedDatabase();
