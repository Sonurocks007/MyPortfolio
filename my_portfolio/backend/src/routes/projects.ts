import express, { Router, Request, Response } from 'express';
import Project from '../models/Project';

const router: Router = express.Router();

// GET all projects sorted by order, then newest
router.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new project
router.post('/', async (req: Request, res: Response) => {
  const {
    title,
    shortDescription,
    description,
    cardImageUrl,
    imageUrls,
    imageUrl,
    techStack,
    demoLink,
    repoLink,
    features,
    order
  } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const project = new Project({
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
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single project by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
