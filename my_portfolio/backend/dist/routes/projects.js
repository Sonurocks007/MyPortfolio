"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Project_1 = __importDefault(require("../models/Project"));
const router = express_1.default.Router();
// GET all projects sorted by order, then newest
router.get('/', async (req, res) => {
    try {
        const projects = await Project_1.default.find().sort({ order: 1, createdAt: -1 });
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
// POST new project
router.post('/', async (req, res) => {
    const { title, shortDescription, description, cardImageUrl, imageUrls, imageUrl, techStack, demoLink, repoLink, features, order } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    try {
        const project = new Project_1.default({
            title,
            shortDescription,
            description,
            cardImageUrl,
            imageUrls: imageUrls || [],
            imageUrl: imageUrl || '',
            techStack: techStack || [],
            demoLink,
            repoLink,
            features: features || [],
            order: order || 0
        });
        await project.save();
        res.status(201).json(project);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
// GET single project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project_1.default.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.default = router;
