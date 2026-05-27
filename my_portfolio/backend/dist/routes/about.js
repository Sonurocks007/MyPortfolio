"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Skill_1 = __importDefault(require("../models/About/Skill"));
const Experience_1 = __importDefault(require("../models/About/Experience"));
const Achievement_1 = __importDefault(require("../models/About/Achievement"));
const Certification_1 = __importDefault(require("../models/About/Certification"));
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    try {
        const [skills, experience, achievements, certifications] = await Promise.all([
            Skill_1.default.find().sort({ order: 1 }),
            Experience_1.default.find().sort({ order: 1 }),
            Achievement_1.default.find().sort({ order: 1 }),
            Certification_1.default.find().sort({ order: 1 }),
        ]);
        const currentFocus = [
            "Building scalable web platforms with Next.js App Router and type-safe server actions",
            "Optimizing multi-tenant architectures and robust Role-Based Access Control (RBAC)",
            "Fostering enterprise integrations with Spring Boot, Spring Security, and TypeScript"
        ];
        res.json({ skills, experience, achievements, certifications, currentFocus });
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.default = router;
